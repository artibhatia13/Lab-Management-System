import { Box, Button } from "@chakra-ui/react";

import {
  AdminNav,
  Timetable,
  CourseDetails,
  AssignmentPage,
  Attendance,
} from "../../../src/components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import axios from "axios";
import backend from "../../../const";
import { useEffect, useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export default function Lab() {
  const router = useRouter()
  const[ course,setCourse] = useState(null)
  const [id,setId]=useState('')
  const tabsStyles = {
    color: "#58B5CA",
    borderBottom: "2px",
    borderColor: "#58B5CA",
  };

  useEffect(()=>{
    if(!router.isReady) return;
    const { id } = router.query
    console.log(id)
    setId(id)

    async function fetchData(){
    const response = await axios.get(`${backend}/course/${id}`)
    const res = response.data;
    if (res.status) {
        
        const resData= res.data
        console.log(resData)
        setCourse(resData)
        // setLoad(true)
        
        if(res.msg)
            alert(res.msg)
    }
    else {
        alert('Sorry could not retrieve Lab list')
      }
    }
    fetchData();
  },[router.isReady]);

  const handleDelete = () => {
    const { id } = router.query;
    console.log(id);
    setId(id);
    var config = {
      method: "post",
      url: `${backend}/delete_course/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          console.log(response.data);
          setTimeout(() => {
            window.location.href = "/admin/course";
          }, 500);
          alert(`${response.data.msg}`);
        } else {
          alert("Error in details");
        }
      })
      .catch(function (error) {
        alert("Error in Deleting Course");
      });
  };

  if (!course)
  return null
  else
  return (
    <Box bg="#fafafa">
      <AdminNav />
      <Box mx="6em" mt="3em" mb="0em">
        <Tabs>
          <TabList>
            <Tab _selected={tabsStyles}>About</Tab>
            <Tab _selected={tabsStyles}>Timetable</Tab>
            <Tab _selected={tabsStyles}>Assignments</Tab>
            <Tab _selected={tabsStyles}>Attendance</Tab>
          </TabList>
          <Box mb="2em"></Box>
          <TabPanels>
            <TabPanel>
              <Button
                position="absolute"
                my="-6em"
                right="6em"
                px="1em"
                h="2em"
                bg="#ef5350"
                color="white"
                borderRadius="4em"
                rightIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                Delete Lab
              </Button>
              <CourseDetails course={course} id={id}/>
            </TabPanel>
            <TabPanel>
              <Timetable twidth="90%" />
            </TabPanel>
            <TabPanel>
              <AssignmentPage course={course} id={id}/>
            </TabPanel>
            <TabPanel>
              <Attendance />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
