import React, {useState} from "react";

function Sushi({image, name, price, id, wallet, spendMoney}) {

  let [eaten, updateEaten] = useState(false)

  function handleClick() {

    if (price < wallet) {
      updateEaten(true)
      spendMoney(price)
    }
    

    // add sushi to table
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={ handleClick }>
        {/* Tell me if this sushi has been eaten! -- only show the plate*/}
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
