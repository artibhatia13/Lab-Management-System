import { Box, Text, Flex, Image } from "@chakra-ui/react";

export default function EquipmentDetails() {
  const equipments = [
    {
      id: 1,
      eqp_id: 123424221,
      eqp_name: "CPU",
      eqp_qty: 23,
      eqp_img: "/cpu.png",
    },
    {
      id: 2,
      eqp_id: 338294221,
      eqp_name: "Monitor",
      eqp_qty: 23,
      eqp_img: "/monitor.png",
    },
    {
      id: 3,
      eqp_id: 583924221,
      eqp_name: "Mouse",
      eqp_qty: 20,
      eqp_img: "/mouse.png",
    },
    {
      id: 4,
      eqp_id: 683424221,
      eqp_name: "Keyboard",
      eqp_qty: 21,
      eqp_img: "/keyboard.png",
    },
  ];

  const displayrow = (arr) =>
    arr.map((item) => (
      <Flex border="1px" w="42em" key={item.eqp_id} borderColor="#e0e0e0">
        <Image src={item.eqp_img} w="7em" my="auto" mx="2em" />
        <Box my="-1px" w="100%">
          <Flex w="100%">
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
              fontWeight="500"
            >
              Equipment ID :
            </Text>
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
            >
              {item.eqp_id}
            </Text>
          </Flex>
          <Flex w="100%">
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
              fontWeight="500"
            >
              Equipment Name :
            </Text>
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
            >
              {item.eqp_name}
            </Text>
          </Flex>
          <Flex w="100%">
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
              fontWeight="500"
            >
              Equipment Quantity :
            </Text>
            <Text
              border="1px"
              flex="0.5"
              pl="2em"
              py="0.9em"
              borderColor="#e0e0e0"
              fontSize="14px"
            >
              {item.eqp_qty}
            </Text>
          </Flex>
        </Box>
      </Flex>
    ));

  return (
    <Box>
      <Flex>{displayrow(equipments.slice(0, 2))}</Flex>
      <Flex mb="4em">{displayrow(equipments.slice(2))}</Flex>
    </Box>
  );
}
