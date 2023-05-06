import { Image } from '@mantine/core';
import "./food-item.css"
export default function FoodItem(props) {
  return (
    <>
      <h1>An image...3</h1>
      <Image width={16*12} height={9*12} radius="lg" src={props.img_path} />
      <div>Food</div>
    </>
  )
}