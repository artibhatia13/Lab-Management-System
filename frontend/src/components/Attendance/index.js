import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";

export default function Attendance() {
  const labdays = [
    "roll no",
    "Name",
    "1/7/22",
    "8/7/22",
    "22/7/22",
    "29/7/22",
    "6/8/22",
    "Total",
  ];
  const students = [
    {
      rollno: 1,
      name: "Aadhil Farhan",
      attendance: [1, 1, 1, 1, 1],
      total: "87%",
    },
    {
      rollno: 2,
      name: "Abraham kurikal",
      attendance: [1, null, 1, 1, 1],
      total: "87%",
    },
    {
      rollno: 3,
      name: "Alan Philipose",
      attendance: [1, 1, null, 1, 1],
      total: "87%",
    },
    {
      rollno: 4,
      name: "Amal Raj",
      attendance: [1, 1, 1, null, 1],
      total: "87%",
    },
    {
      rollno: 5,
      name: "Anagha S menon",
      attendance: [1, 1, 1, 1, 1],
      total: "87%",
    },
    {
      rollno: 6,
      name: "Anand",
      attendance: [null, 1, 1, null, null],
      total: "87%",
    },
    {
      rollno: 7,
      name: "Aneetta Marry Sajan",
      attendance: [1, 1, 1, 1, 1],
      total: "87%",
    },
    {
      rollno: 8,
      name: "Anetha Menon",
      attendance: [1, 1, null, 1, 1],
      total: "87%",
    },
  ];

  return (
    <Box>
      <Grid templateColumns="0.5fr repeat(7,1fr)">
        {labdays.map((item) => (
          <GridItem
            key={item}
            p="1em"
            border="1px"
            borderColor="#e0e0e0"
            textAlign="center"
          >
            {item}
          </GridItem>
        ))}
      </Grid>
      {students.map((item) => (
        <Grid templateColumns="0.5fr repeat(7,1fr)" key={item.rollno}>
          <GridItem
            p="1em"
            border="1px"
            borderColor="#e0e0e0"
            textAlign="center"
          >
            {item.rollno}
          </GridItem>
          <GridItem
            p="1em"
            border="1px"
            borderColor="#e0e0e0"
            textAlign="center"
          >
            {item.name}
          </GridItem>
          {item.attendance.map((subitem) => (
            <GridItem
              p="1em"
              border="1px"
              borderColor="#e0e0e0"
              textAlign="center"
            >
              {subitem ? subitem : <Text color="red.400">AB</Text>}
            </GridItem>
          ))}
          <GridItem
            p="1em"
            border="1px"
            borderColor="#e0e0e0"
            textAlign="center"
          >
            {item.total}
          </GridItem>
        </Grid>
      ))}
    </Box>
  );
}
