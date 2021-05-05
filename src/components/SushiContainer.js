import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({allSushi, wallet, spendMoney}) {

  let [sushiNumber, updateSushiNumber] = useState(1)

  function handleMoreSushi() {
    updateSushiNumber((sushiNumber) => (sushiNumber+4))
  }


  const sushiCards = allSushi
    .filter( (sushi) => sushi.id >= sushiNumber && sushi.id <= sushiNumber + 3  )
    .map((sushi) => 
      < Sushi {...sushi} key = {sushi.id} image = {sushi.img_url} wallet = {wallet} spendMoney = {spendMoney} />
    )
      
  

  return (
    <div className="belt">
      {sushiCards}
      <MoreButton onHandleClick = {handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
