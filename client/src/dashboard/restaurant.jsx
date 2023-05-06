import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Center,
  Button,
  Modal,
  Group,
  Input,
  Textarea,
  NumberInput,
  Flex,
  Avatar,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

export function RestaurantDashboard() {
  const theme = useMantineTheme();
  const [navbarOpened, setNavbarOpened] = useState(false);

  const [opened, { open, close }] = useDisclosure(false);
  const [itemList, setItemList] = useState([]);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!navbarOpened}
          width={{ sm: 200, lg: 300 }}
        >
          {itemList.map((v, i) => (
            <Link href="/dashboard/pho" key={i} className="no-underline">
              <Flex
                gap="sm"
                p="md"
                align="center"
                sx={{
                  ":hover": { background: "#FFD8A8" },
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <Avatar color="cyan" radius="xl">
                  M
                </Avatar>
                <Box
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Text fw="bold">{v.name}</Text>
                  <Text
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v.description}
                  </Text>
                </Box>
              </Flex>
            </Link>
          ))}
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={navbarOpened}
                onClick={() => setNavbarOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text fz="lg" fw={700}>
              Restaurant Dashboard
            </Text>
          </div>
        </Header>
      }
    >
      <Center w="100%" h="100%">
        <>
          <Modal opened={opened} onClose={close} title="Authentication">
            <Flex direction="column" gap="sm">
              <Text fw="bold">Item name</Text>
              <Input />
              <Text fw="bold">description</Text>
              <Textarea />

              <Text fw="bold">Quantity</Text>
              <NumberInput />

              <Text fw="bold">Image</Text>
            </Flex>
            <Center>
              <Button
                color="orange"
                onClick={() => {
                  const items = itemList;
                  items.push({
                    name: "Beef pho",
                    description:
                      "Our pho noodle soup is big on flavour, free from preservatives and MSG leaving you feeling so fresh and so clean. 200 g",
                  });

                  setItemList(items);
                  close();
                }}
              >
                Post
              </Button>
            </Center>
          </Modal>

          <Group position="center">
            <Button color="orange" onClick={open}>
              Post left over
            </Button>
          </Group>
        </>
      </Center>
    </AppShell>
  );
}
