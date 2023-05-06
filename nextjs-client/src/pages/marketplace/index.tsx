import { supabase } from "@/supabaseClient";
import { LeftOverItem } from "@/utils/types";
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Input,
  Space,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Marketplace() {
  const [leftOvers, setLeftOvers] = useState<LeftOverItem[] | null>(null);
  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase.from("last-bite").select("*");
      setLeftOvers(data as LeftOverItem[] | null);
    };
    fetch();
  }, []);
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
        return (
        <Center w="100%" h="100%" sx={{ gap: 10, flexWrap: "wrap" }}>
          {leftOvers &&
            leftOvers.map((item) => (
              <Card
                shadow="sm"
                key={item.id}
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  {item && (
                    <Image
                      src={JSON.parse(item.imageUrl) || ""}
                      width={400}
                      height={400}
                      alt="image"
                    />
                  )}
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{item?.name}</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  {item?.description}
                </Text>
              </Card>
            ))}
        </Center>
        );
      </Box>
    </Box>
  );
}
