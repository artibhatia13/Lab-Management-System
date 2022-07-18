import { Box, Text, Flex, Image } from "@chakra-ui/react";

import {
  AdminNav,
  Heading,
  LabDetails,
  EquipmentDetails,
  LabBlueprint,
  Timetable,
} from "../../../src/components";

export default function Lab() {
  return (
    <Box bg="#fafafa">
      <AdminNav />
      <Box mx="5em" my="3em">
        <Heading text="Network Lab" />
        <Text mb="4em">nvoiehjv v vhvih v0u0ijvoa</Text>
        <Heading text="Time Table" />
        <Timetable />
      </Box>
    </Box>
  );
}
