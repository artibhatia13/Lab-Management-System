import { Flex, Box, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from 'axios';
import backend from "../../../const";

export default function Loginform() {


  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  

  // useEffect(() => {
  //     let i = window.localStorage.getItem('Admin');
  //     console.log(i)
  //     if(i){
  //         window.location.href = "/home"
  //     }
  // },[])

  const handleSubmit = () => {
          const reqData = {
              "adminID" : email,
              "password" : pass
          }

          console.log(reqData)

          var config = {
              method: 'post',
              url: `${backend}/admin_login`,
              headers: {
                  'Content-Type': 'application/json'
              },
              data: reqData
          };

          axios(config)
              .then(function (response) {
                  if (response.data.status === true) {

                      alert("Login successfull")
                      window.localStorage.setItem('Admin', 'true');
                      setTimeout(() => {
                          window.location.href = "/admin"
                      }, 500)
                      

                  }
                  else {
                      alert("Wrong credentials")
                  }
              })
              .catch(function (error) {
                  alert("Wrong credentials1")
              });
              // axios.post(`${backend}/admin_login`,  reqData )
              // .then(res => {
              //   console.log(res);
              //   console.log(res.data);
              // })

    }
  return (
    <Box bg="#fafafa">
      <Box
        boxShadow="lg"
        mx="auto"
        my="5em"
        w="25em"
        px="3em"
        py="2em"
        bg="white"
      >
        <Text textAlign="center" fontSize="25px" fontWeight="500">
          Login
        </Text>
        <Box
          h="0.2em"
          w="2.5em"
          mt="0.3em"
          mx="auto"
          bg="#87C0CD"
          borderRadius="50em"
        ></Box>
        <Box mt="3em" w="100%" mx="auto">
          <Input placeholder="Email" value={email} h="3em" onChange={e=> setEmail(e.target.value)} />
          <Input placeholder="Password" value={pass} type='password' mt="1.5em" h="3em" onChange={e=> setPass(e.target.value)} />
        </Box>
        <Button
          mt="2em"
          w="100%"
          h="3em"
          bg="#87C0CD"
          color="white"
          borderRadius="10em"
          onClick={() => handleSubmit()}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
