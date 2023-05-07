import { restaurants } from "@/data/data";
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
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import cartIcon from "../../../public/cart-icon.png";
import searchIcon from "../../../public/search-icon.png";
import Checkout from "@/components/Checkout";

const ImageComponent = ({ url }: { url: string }) => {
  if (url) {
    try {
      const image = JSON.parse(url) as StaticImageData;
      return <Image src={image} width={200} height={200} alt="image" />;
    } catch (error) {
      console.error("Failed to parse image URL as JSON:", error);
    }
  }

  return <></>;
};
export default function Marketplace() {
  const [leftOvers, setLeftOvers] = useState<LeftOverItem[] | null>(null);
  const [checkoutState, setCheckoutState] = useState<Boolean | null>(false);
  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase.from("last-bite").select("*");
      setLeftOvers(data as LeftOverItem[] | null);
    };
    fetch();
  }, []);
  console.log("leftOvers", leftOvers);
  return (
    <Box w="100%" h="100%">
      {checkoutState && <Checkout />}
      <Flex sx={{ alignItems: "center" }} w="100%" h={80} bg="orange.5">
        <Link href="/" className="no-underline">
          <Flex ml={100}>
            <Title order={1}>Last</Title>
            <Title order={1} color="white">
              Bite
            </Title>
          </Flex>
        </Link>

        <Flex ml={100} gap={50}>
          <Link href="/" className="no-underline">
            <Text fz="lg" fw="bold" color="white">
              Home
            </Text>
          </Link>

          <Text fz="lg" fw="bold" color="white">
            Support
          </Text>
          <Space w={300} />
          <Button
            w={80}
            radius={50}
            bg="white"
            onClick={() => setCheckoutState(true)}
          >
            <Image src={cartIcon} alt="cart-icon" height={20} />
            <Space w={10} />
            <Text color="black" fz={20} c="grey">
              2
            </Text>
          </Button>
          <Input
            icon={<Image src={searchIcon} alt="search-icon" height={16} />}
            placeholder="Search nearby kitchen and stores"
            radius={50}
            w={300}
          />
        </Flex>
      </Flex>
      <Box mt={20}>
        <Flex ml={100}>
          <Title order={1}>New</Title>
          <Title order={1} color="orange" ml={10}>
            Listing
          </Title>
        </Flex>
        <Flex
          w="100%"
          h="100%"
          ml={100}
          mt={10}
          sx={{ gap: 10, flexWrap: "wrap" }}
        >
          {leftOvers &&
            leftOvers.map((item) => (
              <Card
                shadow="sm"
                key={item.id}
                padding="lg"
                radius="md"
                withBorder
                w={200}
                h={300}
              >
                <Card.Section>
                  {/* {item && (
                    <Image
                      src={JSON.parse(item.imageUrl) || ""}
                      width={200}
                      height={200}
                      alt="image"
                    />
                  )} */}
                  <ImageComponent url={item.imageUrl} />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{item?.name}</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  {item?.description}
                </Text>
              </Card>
            ))}
        </Flex>
        <Flex ml={100} mt={20}>
          <Title order={1}>Near by</Title>
          <Title order={1} color="orange" ml={10}>
            Stores
          </Title>
        </Flex>
        <Flex sx={{ gap: 10, flexWrap: "wrap" }} ml={100}>
          {restaurants &&
            restaurants.map((item) => (
              <Card
                shadow="sm"
                key={item.name}
                padding="lg"
                radius="md"
                withBorder
                w={200}
                h={300}
              >
                <Card.Section>
                  {item && (
                    <Image
                      src={item.avatarUrl}
                      width={200}
                      height={200}
                      alt="image"
                    />
                  )}
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{item?.name}</Text>
                </Group>
              </Card>
            ))}
        </Flex>
      </Box>
    </Box>
  );
}
