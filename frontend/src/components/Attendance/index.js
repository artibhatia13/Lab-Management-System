import {
  Box,
  Flex,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Attendance() {
  const hrs = [
    { hour: "1st", time: "9:30-10:30" },
    { hour: "2nd", time: "10:30-11:30" },
    { hour: "3rd", time: "11:30-12:20" },
  ];

  return (
    <Box mb="3em" bg="white" borderRadius="6px" px="3em" py="1.5em" w="60%">
      <Flex justifyContent="space-between">
        <Text fontSize="22px" fontWeight="500">
          CSL332_NetworkLab
        </Text>
        <Flex>
          <Text fontSize="16px">3 Aug 2022</Text>
          <Text
            mx="1em"
            mt="-6px"
            fontSize="22px"
            fontWeight="200"
            opacity="0.3"
          >
            |
          </Text>
          <Text fontSize="16px">3 Hours</Text>
        </Flex>
      </Flex>
      {hrs.map((item) => (
        <Box
          key={item.hour}
          mt="1em"
          borderBottom="1px"
          borderColor="#e0e0e0"
          pb="1em"
        >
          <Text fontSize="16px" fontWeight="500" mb="1em">
            {item.hour} hour -- {item.time}
          </Text>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="1">Present</Radio>
              <Radio value="2">Absent</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      ))}
      <Button
        my="1em"
        bg="#87C0CD"
        color="white"
        borderRadius="10em"
        py="1em"
        px="2em"
      >
        Mark Attendance
      </Button>
    </Box>
  );

  // const labdays = [
  //   "roll no",
  //   "Name",
  //   "1/7/22",
  //   "8/7/22",
  //   "22/7/22",
  //   "29/7/22",
  //   "6/8/22",
  //   "Total",
  // ];
  // const students = [
  //   {
  //     rollno: 1,
  //     name: "Aadhil Farhan",
  //     attendance: [1, 1, 1, 1, 1],
  //     total: "87%",
  //   },
  //   {
  //     rollno: 2,
  //     name: "Abraham kurikal",
  //     attendance: [1, null, 1, 1, 1],
  //     total: "87%",
  //   },
  //   {
  //     rollno: 3,
  //     name: "Alan Philipose",
  //     attendance: [1, 1, null, 1, 1],
  //     total: "87%",
  //   },
  //   {
  //     rollno: 4,
  //     name: "Amal Raj",
  //     attendance: [1, 1, 1, null, 1],
  //     total: "87%",
  //   },
  //   {
  //     rollno: 5,
  //     name: "Anagha S menon",
  //     attendance: [1, 1, 1, 1, 1],
  //     total: "87%",
  //   },
  //   {
  //     rollno: 6,
  //     name: "Anand",
  //     attendance: [null, 1, 1, null, null],
  //     total: "87%",
  //   },
  //   {
  //     rollno: 7,
  //     name: "Aneetta Marry Sajan",
  //     attendance: [1, 1, 1, 1, 1],
  //     total: "87%",
  //   },
  //   {
  //     rollno: 8,
  //     name: "Anetha Menon",
  //     attendance: [1, 1, null, 1, 1],
  //     total: "87%",
  //   },
  // ];

  // return (
  //   <Box>
  //     <Grid templateColumns="0.5fr repeat(7,1fr)">
  //       {labdays.map((item) => (
  //         <GridItem
  //           key={item}
  //           p="1em"
  //           border="1px"
  //           borderColor="#e0e0e0"
  //           textAlign="center"
  //         >
  //           {item}
  //         </GridItem>
  //       ))}
  //     </Grid>
  //     {students.map((item) => (
  //       <Grid templateColumns="0.5fr repeat(7,1fr)" key={item.rollno}>
  //         <GridItem
  //           p="1em"
  //           border="1px"
  //           borderColor="#e0e0e0"
  //           textAlign="center"
  //         >
  //           {item.rollno}
  //         </GridItem>
  //         <GridItem
  //           p="1em"
  //           border="1px"
  //           borderColor="#e0e0e0"
  //           textAlign="center"
  //         >
  //           {item.name}
  //         </GridItem>
  //         {item.attendance.map((subitem, index) => (
  //           <GridItem
  //             p="1em"
  //             border="1px"
  //             borderColor="#e0e0e0"
  //             textAlign="center"
  //             key={index}
  //           >
  //             {subitem ? subitem : <Text color="red.400">AB</Text>}
  //           </GridItem>
  //         ))}
  //         <GridItem
  //           p="1em"
  //           border="1px"
  //           borderColor="#e0e0e0"
  //           textAlign="center"
  //         >
  //           {item.total}
  //         </GridItem>
  //       </Grid>
  //     ))}
  //   </Box>
  // );
}
