import { DashboardStore } from "@/zustand/dashboard";
import {
  Box,
  Button,
  Center,
  Flex,
  Group,
  Input,
  Loader,
  Modal,
  NumberInput,
  Text,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { LeftOverItem } from "@/utils/types";
import { nanoid } from "nanoid";
import { ReactElement, useEffect, useState } from "react";
const GlobalLayout = dynamic(() => import("@/layouts/GlobalLayout"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const DashboardLayout = dynamic(() => import("@/layouts/DashboardLayout"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

import dynamic from "next/dynamic";
import { GeneralStore } from "@/zustand/general";
import { foodImages } from "@/data/data";
import Image, { StaticImageData } from "next/image";
import { supabase } from "@/supabaseClient";
export default function RestaurantDashboard() {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [isImageSelected, setImageSelected] = useState<
    StaticImageData | undefined
  >(undefined);
  const addItem = DashboardStore((state) => state.addItem);
  const [images, setImages] = useState<StaticImageData[]>([]);
  const user = GeneralStore((state) => state.currentUser);
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      quantity: 0,
    },

    validate: {
      quantity: (value) => (value < 1 ? "Low quantity" : null),
      name: (value) => (value.length < 2 ? "Invalid name" : null),
    },
  });
  useEffect(() => {
    if (user) {
      const index = foodImages.findIndex(
        (im) => im.restaurantName === user.name
      );
      console.log("food images", foodImages, user.name);
      if (index >= 0) {
        setImages(foodImages[index].images);
      }
    }
  }, [user]);

  console.log("images", images);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Left over item">
        <form
          onSubmit={form.onSubmit(async (values) => {
            form.validate();
            setLoading(true);
            console.log("error", form.errors);
            const url = isImageSelected
              ? JSON.stringify(isImageSelected)
              : "random";
            const item: LeftOverItem = {
              description: values.description,
              name: values.name,
              quantity: values.quantity,
              imageUrl: url,
              restaurantId: user ? user.id : nanoid(),
            };
            console.log(item);

            addItem(item);

            const { error } = await supabase.from("last-bite").insert(item);

            setLoading(false);

            close();
          })}
        >
          <Flex direction="column" gap="sm">
            <Text fw="bold">Item name</Text>
            <Input {...form.getInputProps("name")} />
            <Text fw="bold">description</Text>
            <Textarea {...form.getInputProps("description")} />

            <Text fw="bold">Quantity</Text>
            <NumberInput {...form.getInputProps("quantity")} />

            <Text fw="bold">Select Image</Text>
            <Flex>
              {images &&
                images.map((i, index) => (
                  <Box
                    mb={10}
                    sx={{
                      borderWidth:
                        isImageSelected && isImageSelected === i
                          ? "3px"
                          : "0px",
                      borderColor:
                        isImageSelected && isImageSelected === i
                          ? "orange"
                          : "none",
                      borderStyle: "solid",
                    }}
                    key={index}
                    onClick={() => setImageSelected(i)}
                  >
                    <Image
                      src={i}
                      alt="leftover-item"
                      width={100}
                      height={100}
                    />
                  </Box>
                ))}
            </Flex>
          </Flex>
          <Center>
            <Button color="orange" type="submit">
              {loading ? <Loader color="orange" size="sm" /> : "Post"}
            </Button>
          </Center>
        </form>
      </Modal>

      <Group position="center">
        <Button color="orange" onClick={open}>
          Post left over
        </Button>
      </Group>
    </>
  );
}
RestaurantDashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <GlobalLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </GlobalLayout>
  );
};
