import "./FoodItem.css"

export default function FoodItem() {
  
  function fetchFoodItem() {
    return {name: "test",
            img_path: "../assets/test.jpg"} 
  }

  const foodItem = fetchFoodItem()

  return (
    <>
        <h2>Test</h2>
    	 <img className="food-item" src="src/test.jpg" />
    	{/* <img className="food-item" src={require("./src/test.jpg")} />
    	// <img className="food-item" src={foodItem.img_path} />*/}
    </>
  )
}