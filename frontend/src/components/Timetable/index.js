import { Grid, GridItem, Text, Box } from "@chakra-ui/react";

export default function Timetable() {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = [1, 2, 3, 4, 5, 6];
  const tt = [
    ["Network", "Network", "Network", null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, , null, "Dbms", "Dbms", "Dbms"],
    [null, null, null, null, null, null],
  ];
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
      {tt.map((item, index) => (
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem border="1px" p="1em" borderColor="#e0e0e0">
            {weekdays[index]}
          </GridItem>
          {item.map((subitem) => (
            <>
              <GridItem border="1px" p="1em" borderColor="#e0e0e0">
                <Text textAlign="center">{subitem ? subitem : "-"}</Text>
              </GridItem>
            </>
          ))}
        </Grid>
      ))}
    </Box>
  );
}
