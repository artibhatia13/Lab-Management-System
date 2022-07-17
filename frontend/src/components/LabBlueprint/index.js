import { Box, Text, Flex, Image } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

export default function LabBlueprint() {
  const area1 = [
    [1, 1, -1, 1, 1, 1, 1, 1, 1],
    [1, null, null, null, null, null, null, null, 1],
    [1, null, null, null, null, null, null, null, -1],
    [1, 1, 1, 1, null, 1, 1, 1, 1],
  ];

  const area2 = [
    [1, 1, 1],
    [null, null, null],
    [1, -1, 1],
  ];

  const area3 = [
    [1, 1, 1],
    [null, null, null],
    [1, 1, 1],
  ];

  const area4 = [
    [1, 1, 1, 1],
    [1, null, null, null, null, 1],
    [1, null, null, null, null, 1],
    [1, null, null, null, null, 1],
    [1, 1, -1, 1, 1, 1],
  ];

  const area5 = [
    [1, 1, 1, 1],
    [null, null, null, 1],
    [1, null, null, 1],
    [1, null, null, 1],
    [1, 1, 1, 1],
  ];

  const displaySystem_val = (val, row, col) => {
    if (val === null)
      return <Image src="/empty.png" h="1.5em" mx="0.5em" mb="1em" key={col} />;
    else if (val == -1)
      return (
        <>
          <Popover>
            <PopoverTrigger>
              <Image src="/fault.png" h="1.5em" mx="0.5em" mb="1em" key={col} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <Text px="1em" py="0.6em" fontWeight="500">
                  System ID: 11239182
                </Text>
              </PopoverHeader>
              <PopoverBody>
                <Text px="1em" py="0.6em">
                  keyboard not working, wifi issues
                </Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </>
      );
    else if (val == 1)
      return (
        <Image src="/working.png" h="1.5em" mx="0.5em" mb="1em" key={col} />
      );
  };

  const displaySystem = (arr, bt, br, bb, bl) => {
    return (
      <Box
        borderLeft={bl + "px"}
        borderRight={br + "px"}
        borderTop={bt + "px"}
        borderBottom={bb + "px"}
        borderColor="#9e9e9e"
        p="1em"
      >
        {arr.map((item, index) => {
          return (
            <Flex key={index}>
              {item.map((subitem, sindex) =>
                displaySystem_val(subitem, index, sindex)
              )}
            </Flex>
          );
        })}
      </Box>
    );
  };

  return (
    <Box display="inline-block" border="1px" borderColor="#9e9e9e" p="1em">
      <Flex>
        <Box>
          {displaySystem(area1, 1, 0, 0, 1)}
          <Flex justifyContent="space-between">
            {displaySystem(area2, 1, 0, 1, 1)}
            {displaySystem(area3, 1, 0, 1, 0)}
          </Flex>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          border="1px"
          borderColor="#9e9e9e"
          w="14em"
        >
          <Text my="auto" opacity="0.5" fontWeight="500">
            LAB MANAGER
          </Text>
        </Box>
      </Flex>
      <Box h="3em" border="1px" borderTop="0" borderColor="#9e9e9e"></Box>
      <Flex>
        {displaySystem(area4, 0, 0, 1, 1)}
        {displaySystem(area5, 0, 1, 1, 1)}
      </Flex>
    </Box>
  );
}
