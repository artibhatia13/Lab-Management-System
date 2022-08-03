import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import backend from "../../../const";
import {
  AdminNav,
  Heading,
  LabDetails,
  EquipmentDetails,
  LabBlueprint,
  Timetable,
} from "../../../src/components";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function Lab() {
  const router = useRouter();
  const [lab, setLab] = useState(null);
  // const [load,setLoad]= useState(false)
  const [id, setId] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    // console.log(id)
    setId(id);
    async function fetchData() {
      const response = await axios.get(`${backend}/lab/${id}`);
      const res = response.data;
      if (res.status) {
        const resData = res.data;
        // console.log(resData)
        setLab(resData);
        // setLoad(true)

        if (res.msg) alert(res.msg);
      } else {
        alert("Sorry could not retrieve Lab list");
      }
    }
    fetchData();
  }, [router.isReady]);

  const handleDelete = () => {
    const { id } = router.query;
    console.log(id);
    setId(id);
    var config = {
      method: "post",
      url: `${backend}/delete_lab/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          console.log(response.data);
          setTimeout(() => {
            window.location.href = "/admin";
          }, 500);
          alert(`${response.data.msg}`);
        } else {
          alert("Error in details");
        }
      })
      .catch(function (error) {
        alert("Error in Deleted System");
      });
  };

  if (!lab) return null;
  else
    return (
      <Box bg="#fafafa">
        <AdminNav />
        <Box mx="5em" my="3em">
          <Heading text={`${lab.l_name} details`} />
          <Button
            position="absolute"
            my="-6em"
            right="5em"
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
          <LabDetails lab={lab} />

          <Heading text="Working Condition" />
          <LabBlueprint lab={lab} id={id} />

          <Heading text={`All equipments of Lab (${lab.l_name})`} />
          <EquipmentDetails />

          <Heading text="Time Table" />
          <Timetable tt={lab.availableDays} />
        </Box>
      </Box>
    );
}
