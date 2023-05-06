import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Space,
  Text,
  Title,
} from "@mantine/core";

export default function Marketplace() {
  return (
    <Box w="100%" h="100%">
      <Flex sx={{ alignItems: "center" }} w="100%" h={80} bg="orange.5">
        <Flex ml={100}>
          <Title order={1}>Last</Title>
          <Title order={1} color="white">
            Bite
          </Title>
        </Flex>
        <Flex ml={100} gap={50}>
          <Text fz="lg" fw="bold" color="white">
            Home
          </Text>
          <Text fz="lg" fw="bold" color="white">
            Support
          </Text>
          <Space w={500} />
          <Input placeholder="search nearby kitchen and stores" w={300} />
          <Button w={80} bg="white">
            <Text color="black">Buy</Text>
          </Button>
        </Flex>
      </Flex>
      <Box mt={20}>
        <Flex ml={100}>
          <Title order={1}>New</Title>
          <Title order={1} color="orange" ml={10}>
            Listing
          </Title>
        </Flex>
      </Box>
    </Box>
  );
}
