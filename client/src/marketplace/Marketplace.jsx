import FoodItem from "../components/FoodItem";

export default function Marketplace() {
  
  const exampleFood = {food_name: "Fruits",
                       restaurant_name: "The ocean",
                       img_path: "../assets/test.jpg"}
  
  return <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
}