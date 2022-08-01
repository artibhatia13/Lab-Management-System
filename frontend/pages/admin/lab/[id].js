import { Box, Text, Flex, Image } from "@chakra-ui/react";
import axios from 'axios';
import backend from "../../../const";
import {
  AdminNav,
  Heading,
  LabDetails,
  EquipmentDetails,
  LabBlueprint,
  Timetable,
} from "../../../src/components";
import { useRouter } from 'next/router'
import { useEffect,useState} from "react";

// export async function getStaticProps(){
//   if(!router.isReady) return;
//     const { id } = router.query
//     // console.log(id)
//     const response = await axios.get(`${backend}/lab/${id}`)
//     const res = response.data;
//     if (res.status) {
        
//         const resData= res.data
//         console.log(resData)
//         // setLoad(true)
        
//         if(res.msg)
//             alert(res.msg)
//     }
//     else {
//         alert('Sorry could not retrieve Lab list')
//     }
//     return {
//       props: {
//         resData,
//       },
//     }
    
// }

export default function Lab() {
  
  const router = useRouter()
  const [lab,setLab]= useState(null)
  // const [load,setLoad]= useState(false)
  const [id,setId]=useState('')
  
  useEffect(()=>{
    if(!router.isReady) return;
    const { id } = router.query
    // console.log(id)
    setId(id)
    async function fetchData(){
    const response = await axios.get(`${backend}/lab/${id}`)
    const res = response.data;
    if (res.status) {
        
        const resData= res.data
        // console.log(resData)
        setLab(resData)
        // setLoad(true)
        
        if(res.msg)
            alert(res.msg)
    }
    else {
        alert('Sorry could not retrieve Lab list')
    }
    }
    fetchData();

    

}, [router.isReady]);


  if(!lab)
  return null
  else
  return (
    <Box bg="#fafafa">
      <AdminNav />
      <Box mx="5em" my="3em">
        <Heading text={`Computer Lab ${lab.l_code} details`} />
        <LabDetails lab={lab}/>
        {/* <Heading text="Time Table" />
        <Timetable tt={lab.availableDays}/> */}
        <Heading text="All equipments of Lab (Computer Lab 1 details)" />
        <EquipmentDetails lab={lab} id={id}/>
        {/* <Heading text="Working Condition" />
        <LabBlueprint /> */}
      </Box>
    </Box>
  );
}
