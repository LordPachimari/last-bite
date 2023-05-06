import { Box, Image, Text} from '@mantine/core';
import "./food-item.css"
export default function FoodItem(props) {
  return (
    <>
      <h1>An image...3</h1>
      <Box maw={16 * 13}>
        <Image maw={16 * 13} height={12 * 13} radius="lg" src={props.img_path} />
        {/*<Text>{props.name}</Text>*/}
        <div class="uppper-text">
          <Text truncate class="test">Pizza</Text>
        </div>
        <div class="lower-text">
          <Text truncate>Pizza Hut</Text>
        </div>
      </Box>
    </>
  )
}