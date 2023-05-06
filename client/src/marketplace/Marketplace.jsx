import FoodItem from "../components/FoodItem";

export default function Marketplace() {
  
  const exampleFood = {name: "Example",
                       img_path: "../assets/test.jpg"}
  
  return <FoodItem name={exampleFood.name} img_path={exampleFood.img_path}/>
}