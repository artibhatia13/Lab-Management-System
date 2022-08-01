import { Box, Text, Flex, Image,  
  Button,
  useDisclosure,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,} from "@chakra-ui/react";
  import { AddIcon } from "@chakra-ui/icons";
import imag from '../../../public/monitor.png'
import { useEffect, useState } from "react";
import axios from 'axios';
import backend from "../../../const";

export default function EquipmentDetails(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal1 = useDisclosure()
  const [ upSys, setUpSys] = useState('')
  const [currModal, setCurrModal] = useState(null)
  const [ upProb , setUpProb] = useState('')
  const [ sysid,setSysid] = useState('')
  const [ sysstat,setSysstat] = useState(false)
  const [ sysprob, setSysprob] = useState('')
  const [ sysList, setSysList] = useState([])
  const [ newSys, setNewSys] = useState('')
  const [equipments,setEquipments] = useState([
    {
      s_id: 123424221,
      s_problem: "CPUhsdthsrth",
      s_status: 1,
    },
    {
      s_id: 123421,
      s_problem: "CPU",
      s_status: 0,
    },
    // {
    //   s_id: 124221,
    //   s_problem: "CPU",
    //   s_status: true,
    // },
    // {
    //   s_id: 12424221,
    //   s_problem: "CPergsdrgsU",
    //   s_status: false,
    // },
    // {
    //   s_id: 1234291,
    //   s_problem: "CPU",
    //   s_status: true,
    // },
  ]);

  useEffect(()=>{
    setSysList(props.lab.l_systems)
    // console.log(props.lab)
    // console.log(props)
    // console.log(sysList)
  },[])

  // useEffect(()=>{
  //   console.log(sysList)
  // },[sysList])

  // useEffect(()=>{
  //   console.log(sysstat)
  // },[sysstat])


const handleSubmit = () => {
  const newSys = {
    s_id : sysid,
    s_status: sysstat,
    s_problem: sysprob

  }
  // console.log(sysstat)
  // console.log(newSys)
  const reqData = props.lab
  const reqId = props.id
  reqData.l_sysno=reqData.l_sysno+1
  reqData.l_systems = [...reqData.l_systems, newSys]

  // console.log(reqData)

  var config = {
      method: 'post',
      url: `${backend}/add_sys/${reqId}`,
      headers: {
          'Content-Type': 'application/json'
      },
      data: reqData
  };

  axios(config)
  .then(function (response) {
      if (response.data.status === true) {
        // console.log(response.data)
        alert("Lab System added successfully")
        setSysList([...sysList,newSys])
        setSysid('')
        setSysprob('')
        setSysstat('')
      }
      else {
          alert("Error in details")
      }
      onClose()
  })
  .catch(function (error) {
      alert("Error in adding System")
      onClose()
  });
  
}

const handleReport = (item={}) => {
  const newSys = {
    s_id : item.s_id,
    s_status: !item.s_status,
    s_problem: upProb

  }
  console.log(newSys)
  const reqData = newSys
  const reqId = props.id
  // reqData.l_systems = [...reqData.l_systems, newSys]

  // console.log(reqData)

  var config = {
      method: 'post',
      url: `${backend}/update_sys/${reqId}`,
      headers: {
          'Content-Type': 'application/json'
      },
      data: reqData
  };

  axios(config)
  .then(function (response) {
      if (response.data.status === true) {
        console.log(response.data)
        alert("Lab System updated added successfully")
        setSysList(response.data.lab.l_systems)
        setCurrModal(null)
        setUpProb('')
        setUpSys('')
      }
      else {
          alert("Error in details")
      }
      modal1.onClose()
  })
  .catch(function (error) {
      alert("Error in updating System")
      modal1.onClose()
  });
  
}




  const displayrow = (arr) =>
    arr.map((item) => (
      <Flex border="1px" w="42em" key={item.s_id} borderColor={item.s_status?"#e0e0e0":"#ff0000"}>
        <Image src={imag.src} w="7em" my="auto" mx="2em" />
        <Box my="-1px" w="100%">
          <Flex w="100%">
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
              fontWeight="500"
            >
              System ID :
            </Text>
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
            >
              {item.s_id}
            </Text>
          </Flex>
          <Flex w="100%">
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
              fontWeight="500"
            >
              System Status :
            </Text>
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
            >
              {item.s_status?"Working Properly":item.s_problem}
            </Text>
          </Flex>
          <Flex w="100%">
            <Button
            mt="2em"
            px="1em"
            h="2em"
            bg="#87C0CD"
            color="red"
            borderRadius="3em"
          
            
            >
              Delete
            </Button>
            {!item.s_status?
            <Button
            mt="2em"
            px="1em"
            h="2em"
            bg="#87C0CD"
            color="red"
            borderRadius="3em"
            onClick={() => { handleReport(item) }}
            
            >
              fix
            </Button>
            :
            <Button
            mt="2em"
            px="1em"
            h="2em"
            bg="#87C0CD"
            color="red"
            borderRadius="3em"
            onClick={() => {setCurrModal(item) ; modal1.onOpen()}}
            
            >
              report
            </Button>}

            {currModal && <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
              <ModalOverlay />
              <ModalContent mt="7em">
                <ModalHeader textAlign="center">Update System {currModal.s_id} Problem</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {/* <Input placeholder="System Id:"  mt="1em" /> */}
                  <Input placeholder="System Id:" value={currModal.s_id} mt="1em" onChange={(e) => setUpSys(e.target.value)} hidden={true}/>
                  <Input placeholder="System Prob" value={upProb} mt="1em" onChange={e=> setUpProb(e.target.value)}/>                 
                  <Box ml="auto" w="6em">
                    <Button
                      bg="#87C0CD"
                      color="white"
                      my="1.5em"
                      w="100%"
                      textAlign="center"
                      onClick={() => handleReport(currModal)}
                    >
                      Update
                    </Button>
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>}
          </Flex>
        </Box>
      </Flex>
    ));

  return (
    <Box>
       <Button
          mt="3em"
          px="2em"
          h="3em"
          bg="#87C0CD"
          color="white"
          borderRadius="5em"
          leftIcon={<AddIcon />}
          onClick={onOpen}
        >
          Add Lab
        </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="7em">
          <ModalHeader textAlign="center">Add Lab</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="System Id:" value={sysid} mt="1em" onChange={e=> setSysid(e.target.value)}/>
            {/* <Input placeholder="System Status" value={sysstat} mt="1em" onChange={e=> setSysstat(e.target.value)}/> */}
            <label> System Status:</label>
            <select placeholder="System Status" value={sysstat} onChange={e => setSysstat(e.target.value)}>
            <option value={1}>True</option>
            <option value={0}>false</option>
            </select>
            {sysstat == 0 && <Input placeholder="Problem Description" value={sysprob} mt="1em" onChange={e=> setSysprob(e.target.value)} />}
            <Box ml="auto" w="6em">
              <Button
                bg="#87C0CD"
                color="white"
                my="1.5em"
                w="100%"
                textAlign="center"
                onClick={() => handleSubmit()}
              >
                Add
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex>{displayrow(sysList)}</Flex>
      {/* // <Flex mb="4em">{displayrow(equipments.slice(2))}</Flex> */}
    </Box>
  );
}
