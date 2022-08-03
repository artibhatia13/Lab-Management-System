import {
  Box,
  Text,
  Flex,
  Image,
  Select,
  Button,
  useDisclosure,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import imag from "../../../public/monitor.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import backend from "../../../const";

export default function LabBlueprint(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal1 = useDisclosure();
  const [upSys, setUpSys] = useState("");
  const [currModal, setCurrModal] = useState(null);
  const [upProb, setUpProb] = useState("");
  const [sysid, setSysid] = useState("");
  const [sysstat, setSysstat] = useState(false);
  const [sysprob, setSysprob] = useState("");
  const [sysList, setSysList] = useState([]);
  const [newSys, setNewSys] = useState("");
  const inputRef = useRef(null);

  console.log(props);
  useEffect(() => {
    setSysList(props.lab.l_systems);
    // console.log(props.lab)
    // console.log(props)
    // console.log(sysList)
  }, [sysList]);
  // useEffect(()=>{
  //   console.log(sysList)
  // },[sysList])

  // useEffect(()=>{
  //   console.log(sysstat)
  // },[sysstat])

  const handleSubmit = () => {
    const newSys = {
      s_id: sysid,
      s_status: sysstat,
      s_problem: sysprob,
    };
    // console.log(sysstat)
    // console.log(newSys)
    const reqData = props.lab;
    const reqId = props.id;
    reqData.l_sysno = reqData.l_sysno + 1;
    reqData.l_systems = [...reqData.l_systems, newSys];

    // console.log(reqData)

    var config = {
      method: "post",
      url: `${backend}/add_sys/${reqId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          // console.log(response.data)
          alert("Lab System added successfully");
          setSysList([...sysList, newSys]);
          setSysid("");
          setSysprob("");
          setSysstat("");
        } else {
          alert("Error in details");
        }
        onClose();
      })
      .catch(function (error) {
        alert("Error in adding System");
        onClose();
      });
  };

  const handleReport = (item = {}) => {
    const newSys = {
      s_id: item.s_id,
      s_status: !item.s_status,
      s_problem: upProb,
    };
    console.log(newSys);
    const reqData = newSys;
    const reqId = props.id;
    // reqData.l_systems = [...reqData.l_systems, newSys]

    // console.log(reqData)

    var config = {
      method: "post",
      url: `${backend}/update_sys/${reqId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          console.log(response.data);
          alert("Lab System updated added successfully");
          setSysList(response.data.lab.l_systems);
          setCurrModal(null);
          setUpProb("");
          setUpSys("");
        } else {
          alert("Error in details");
        }
        modal1.onClose();
      })
      .catch(function (error) {
        alert("Error in updating System");
        modal1.onClose();
      });
  };

  const handleDelete = (item) => {
    const newSys = {
      s_id: item.s_id,
      l_sysno: props.lab.l_sysno - 1,
    };
    const reqData = newSys;
    console.log(reqData);
    const reqId = props.id;
    // reqData.l_systems = [...reqData.l_systems, newSys]

    // console.log(reqData)

    var config = {
      method: "post",
      url: `${backend}/delete_sys/${reqId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          console.log(response.data);
          alert("Lab System deleted successfully");
        } else {
          alert("Error in details");
        }
      })
      .catch(function (error) {
        alert("Error in Deleted System");
      });
  };

  const displaySystem = (arr) =>
    arr.map((item) => (
      <Popover key={item.s_id}>
        <PopoverTrigger>
          <Box border="1px" borderColor="#e0e0e0">
            <Image
              src={item.s_status ? "/working.png" : "/fault.png"}
              w="5em"
              mx="1em"
              my="1em"
              alt="sys_pic"
            />
            <Text
              fontSize="14px"
              borderTop="1px"
              borderColor="#e0e0e0"
              textAlign="center"
            >
              {item.s_id}
            </Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader px="1.5em" py="1em">
            <Flex>
              <Text fontSize="14px" fontWeight="500">
                ID:
              </Text>
              <Text fontSize="14px" ml="5px">
                {item.s_id}
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="14px" fontWeight="500">
                Status:
              </Text>
              <Text fontSize="14px" ml="5px">
                {item.s_status ? "Working Properly" : item.s_problem}
              </Text>
            </Flex>
          </PopoverHeader>
          <PopoverBody px="1.5em" py="1em">
            <Flex>
              {!item.s_status ? (
                <Button
                  px="1em"
                  h="2em"
                  bg="#87C0CD"
                  color="white"
                  borderRadius="3em"
                  fontSize="13px"
                  onClick={() => {
                    handleReport(item);
                  }}
                >
                  Fix
                </Button>
              ) : (
                <Button
                  px="1em"
                  h="2em"
                  bg="#87C0CD"
                  color="white"
                  borderRadius="3em"
                  fontSize="14px"
                  onClick={() => {
                    setCurrModal(item);
                    modal1.onOpen();
                  }}
                >
                  Report
                </Button>
              )}
              <Button
                px="1em"
                h="2em"
                ml="1em"
                bg="#ef5350e0"
                color="white"
                borderRadius="3em"
                fontSize="14px"
                onClick={() => {
                  handleDelete(item);
                }}
              >
                Delete
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
        {currModal && (
          <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
            <ModalOverlay />
            <ModalContent mt="7em">
              <ModalHeader textAlign="center">
                Update System {currModal.s_id} Problem
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* <Input placeholder="System Id:"  mt="1em" /> */}
                <Input
                  placeholder="System Id:"
                  value={currModal.s_id}
                  mt="1em"
                  onChange={(e) => setUpSys(e.target.value)}
                  hidden={true}
                />
                <Input
                  ref={inputRef}
                  placeholder="System Prob"
                  value={upProb}
                  mt="1em"
                  onChange={(e) => setUpProb(e.target.value)}
                  required="true"
                />
                <Box ml="auto" w="6em">
                  <Button
                    bg="#87C0CD"
                    color="white"
                    my="1.5em"
                    w="100%"
                    textAlign="center"
                    type="submit"
                    onClick={() => {
                      inputRef.current.value !== ""
                        ? handleReport(currModal)
                        : alert("Enter problem");
                    }}
                  >
                    Update
                  </Button>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Popover>
    ));

  return (
    <Box mb="4em">
      <Button
        px="2em"
        h="3em"
        bg="#87C0CD"
        color="white"
        borderRadius="5em"
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        Add System
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="7em">
          <ModalHeader textAlign="center">Add New System</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="System Id:"
              value={sysid}
              mt="1em"
              onChange={(e) => setSysid(e.target.value)}
            />
            {/* <Input placeholder="System Status" value={sysstat} mt="1em" onChange={e=> setSysstat(e.target.value)}/> */}
            {/* <label> System Status:</label>
            <select
              placeholder="System Status"
              value={sysstat}
              onChange={(e) => setSysstat(e.target.value)}
            >
              <option value={1}>True</option>
              <option value={0}>false</option>
            </select> */}
            <Select
              placeholder="System Status"
              mt="1em"
              value={sysstat}
              onChange={(e) => setSysstat(e.target.value)}
              color="#718096"
            >
              <option value={1}>true</option>
              <option value={0}>false</option>
            </Select>
            {sysstat == 0 && (
              <Input
                placeholder="Problem Description"
                value={sysprob}
                mt="1em"
                onChange={(e) => setSysprob(e.target.value)}
              />
            )}
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
      <Flex
        wrap="wrap"
        mt="2em"
        border="1px"
        borderColor="#e0e0e0"
        p="1.5em"
        w="70%"
      >
        {displaySystem(sysList)}
      </Flex>
    </Box>
  );
}

// const displayrow = (arr) =>
//   arr.map((item) => (
//     <Flex
//       border="1px"
//       w="42em"
//       key={item.s_id}
//       borderColor={item.s_status ? "#e0e0e0" : "#ff0000"}
//       my="2em"
//     >
//       <Image
//         src={item.s_status ? "/monitor.png" : "/fault.png"}
//         w="7em"
//         my="auto"
//         mx="2em"
//         alt="sys_pic"
//       />
//       <Box my="-1px" w="100%">
//         <Flex w="100%">
//           <Text
//             border="1px"
//             flex="0.5"
//             pl="2em"
//             py="0.9em"
//             borderColor="#e0e0e0"
//             fontSize="14px"
//             fontWeight="500"
//           >
//             System ID :
//           </Text>
//           <Text
//             border="1px"
//             flex="0.5"
//             pl="2em"
//             py="0.9em"
//             borderColor="#e0e0e0"
//             fontSize="14px"
//           >
//             {item.s_id}
//           </Text>
//         </Flex>
//         <Flex w="100%">
//           <Text
//             border="1px"
//             flex="0.5"
//             pl="2em"
//             py="0.9em"
//             borderColor="#e0e0e0"
//             fontSize="14px"
//             fontWeight="500"
//           >
//             System Status :
//           </Text>
//           <Text
//             border="1px"
//             flex="0.5"
//             pl="2em"
//             py="0.9em"
//             borderColor="#e0e0e0"
//             fontSize="14px"
//           >
//             {item.s_status ? "Working Properly" : item.s_problem}
//           </Text>
//         </Flex>
//         <Flex w="100%">
//           <Button
//             mt="2em"
//             px="1em"
//             h="2em"
//             bg="#87C0CD"
//             color="red"
//             borderRadius="3em"
//             onClick={() => {
//               handleDelete(item);
//             }}
//           >
//             Delete
//           </Button>
//           {!item.s_status ? (
//             <Button
//               mt="2em"
//               px="1em"
//               h="2em"
//               bg="#87C0CD"
//               color="red"
//               borderRadius="3em"
//               onClick={() => {
//                 handleReport(item);
//               }}
//             >
//               fix
//             </Button>
//           ) : (
//             <Button
//               mt="2em"
//               px="1em"
//               h="2em"
//               bg="#87C0CD"
//               color="red"
//               borderRadius="3em"
//               onClick={() => {
//                 setCurrModal(item);
//                 modal1.onOpen();
//               }}
//             >
//               report
//             </Button>
//           )}

//           {currModal && (
//             <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
//               <ModalOverlay />
//               <ModalContent mt="7em">
//                 <ModalHeader textAlign="center">
//                   Update System {currModal.s_id} Problem
//                 </ModalHeader>
//                 <ModalCloseButton />
//                 <ModalBody>
//                   {/* <Input placeholder="System Id:"  mt="1em" /> */}
//                   <Input
//                     placeholder="System Id:"
//                     value={currModal.s_id}
//                     mt="1em"
//                     onChange={(e) => setUpSys(e.target.value)}
//                     hidden={true}
//                   />
//                   <Input
//                     ref={inputRef}
//                     placeholder="System Prob"
//                     value={upProb}
//                     mt="1em"
//                     onChange={(e) => setUpProb(e.target.value)}
//                     required="true"
//                   />
//                   <Box ml="auto" w="6em">
//                     <Button
//                       bg="#87C0CD"
//                       color="white"
//                       my="1.5em"
//                       w="100%"
//                       textAlign="center"
//                       type="submit"
//                       onClick={() => {
//                         inputRef.current.value !== ""
//                           ? handleReport(currModal)
//                           : alert("Enter problem");
//                       }}
//                     >
//                       Update
//                     </Button>
//                   </Box>
//                 </ModalBody>
//               </ModalContent>
//             </Modal>
//           )}
//         </Flex>
//       </Box>
//     </Flex>
//   ));
