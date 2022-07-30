import { Grid, GridItem, Text, Box } from "@chakra-ui/react";

export default function Timetable(cName) {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = [1, 2, 3, 4, 5, 6];
  const computerLab1 = [
    [
      { course: "Operating System", sem: 4, batch: "Batch 2", class: "CS4A" },
      { course: "Operating System", sem: 4, batch: "Batch 2", class: "CS4A" },
      { course: "Operating System", sem: 4, batch: "Batch 2", class: "CS4A" },
      { course: "Networking Lab", sem: 6, batch: "Batch 2", class: "CS6B" },
      { course: "Networking Lab", sem: 6, batch: "Batch 2", class: "CS6B" },
      { course: "Networking Lab", sem: 6, batch: "Batch 2", class: "CS6B" },
    ],
    [
      { course: "Networking Lab", sem: 6, batch: "Batch 1", class: "CS6A" },
      { course: "Networking Lab", sem: 6, batch: "Batch 1", class: "CS6A" },
      { course: "Networking Lab", sem: 6, batch: "Batch 1", class: "CS6A" },
      null,
      null,
      null,
    ],
    [null, null, null, null, null, null],
    [
      { course: "Networking Lab", sem: 6, batch: "Batch 1", class: "CS6B" },
      { course: "Networking Lab", sem: 6, batch: "Batch 1", class: "CS6B" },
      { course: "Networking Lab", sem: 6, batch: "Batch 1", class: "CS6B" },
      { course: "Operating System", sem: 4, batch: "Batch 2", class: "CS4A" },
      { course: "Operating System", sem: 4, batch: "Batch 2", class: "CS4A" },
      { course: "Operating System", sem: 4, batch: "Batch 2", class: "CS4A" },
    ],
    [
      null,
      null,
      null,
      { course: "Networking Lab", sem: 6, batch: "Batch 2", class: "CS6A" },
      { course: "Networking Lab", sem: 6, batch: "Batch 2", class: "CS6A" },
      { course: "Networking Lab", sem: 6, batch: "Batch 2", class: "CS6A" },
    ],
  ];

  const tt_cell = (cell) => {
    if (cell && cell.course == "Networking Lab" && cell.class == "CS6A")
      return (
        <Box bg="#87c0cd33" p="1em">
          <Text textAlign="center">{cell.course}</Text>
          <Text textAlign="center" fontSize="13px">
            {cell.class}
          </Text>
          <Text textAlign="center" fontSize="13px">
            {cell.batch}
          </Text>
        </Box>
      );
    else return <Text textAlign="center">-</Text>;
  };

  return (
    <Box mb="4em">
      <Grid templateColumns="repeat(7, 1fr)">
        <GridItem border="1px" p="1em" borderColor="#e0e0e0" />
        {hours.map((item) => (
          <>
            <GridItem border="1px" p="1em" borderColor="#e0e0e0">
              <Text textAlign="center">{item}</Text>
            </GridItem>
          </>
        ))}
      </Grid>
      {computerLab1.map((item, index) => (
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem border="1px" p="1em" borderColor="#e0e0e0">
            <Text textAlign="center">{weekdays[index]}</Text>
          </GridItem>
          {item.map((subitem) => (
            <>
              <GridItem border="1px" borderColor="#e0e0e0">
                {tt_cell(subitem)}
              </GridItem>
            </>
          ))}
        </Grid>
      ))}
    </Box>
  );
}
