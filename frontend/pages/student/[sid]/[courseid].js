import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  StudentNav,
  Timetable,
  CourseDetails,
  AssignmentPage,
  Attendance,
} from "../../../src/components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function StCourse() {
  const router = useRouter();
  const { courseid } = router.query;

  const tabsStyles = {
    color: "#58B5CA",
    borderBottom: "2px",
    borderColor: "#58B5CA",
  };

  return (
    <Box bg="#fafafa">
      <StudentNav />
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
              <CourseDetails />
            </TabPanel>
            <TabPanel>
              <Timetable cName={courseid} />
            </TabPanel>
            <TabPanel>
              <AssignmentPage />
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
