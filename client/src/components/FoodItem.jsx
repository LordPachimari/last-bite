import { Image } from '@mantine/core';

export default function FoodItem(props) {
  return (
    <>
      <h1>An image...</h1>
      <Image src={props.img_path} />
    </>
  )
}