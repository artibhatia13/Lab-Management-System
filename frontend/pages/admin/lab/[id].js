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
        <Heading text="Computer Lab 1 details" />
        <LabDetails />
        <Heading text="All equipments of Lab (Computer Lab 1 details)" />
        <EquipmentDetails />
        <Heading text="Time Table" />
        <Timetable />
        <Heading text="Working Condition" />
        <LabBlueprint />
      </Box>
    </Box>
  );
}
