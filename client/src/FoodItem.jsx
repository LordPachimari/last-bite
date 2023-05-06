import "./FoodItem.css"
export default function FoodItem() {
  
  function fetchFoodItem() {
    return {name: "test",
            img_path: "../assets/test.jpg"} 
  }

  const foodItem = fetchFoodItem()

  return (
    <>
      <img className="food-item" src={foodItem.img_path} />
    </>
  )
}