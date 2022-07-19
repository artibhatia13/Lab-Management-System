import { Grid, GridItem, Text, Box } from "@chakra-ui/react";

export default function Timetable({ twidth, fs }) {
  console.log(twidth);
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = [1, 2, 3, 4, 5, 6];
  const tt = [
    [
      ["Network", "CS6A"],
      ["Network", "CS6A"],
      ["Network", "CS6A"],
      null,
      null,
      null,
    ],
    [
      null,
      null,
      null,
      ["Network", "CS6B"],
      ["Network", "CS6B"],
      ["Network", "CS6B"],
    ],
    [null, null, null, null, null, null],
    [null, null, , null, ["DBMS", "CS5A"], ["DBMS", "CS5A"], ["DBMS", "CS5A"]],
    [null, null, null, null, null, null],
  ];

  const tt_cell = (val) => {
    if (val)
      return (
        <Box>
          <Text textAlign="center">{val[0]}</Text>
          <Text textAlign="center">{val[1]}</Text>
        </Box>
      );
    else return <Text textAlign="center">-</Text>;
  };

  return (
    <Box mb="4em" w={twidth ? twidth : "100%"}>
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
            <Text textAlign="center">{weekdays[index]}</Text>
          </GridItem>
          {item.map((subitem) => (
            <>
              <GridItem
                border="1px"
                p="1em"
                borderColor="#e0e0e0"
                bg={subitem ? "#87c0cd30" : null}
              >
                {tt_cell(subitem)}
              </GridItem>
            </>
          ))}
        </Grid>
      ))}
    </Box>
  );
}
