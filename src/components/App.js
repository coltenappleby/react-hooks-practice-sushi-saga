import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  let [allSushi, updateAllSushi] = useState([])
  let [wallet, updateWallet] = useState(20)

  useEffect(() => {

    let sushiArray = []
  
    fetch(API)
      .then(r => r.json())
      .then(data => {
        for(let i = 0; i < data.length; i++ ){
          sushiArray.push({...data[i], eaten: false}) 
        }
        updateAllSushi(sushiArray)
      })
  }) 

  function spendMoney(cash) {
    updateWallet(wallet-cash)
  }


  return (
    <div className="app">
      <SushiContainer allSushi = {allSushi} wallet = {wallet} spendMoney = {spendMoney} />
      <Table wallet = {wallet} />
    </div>
  );
}

export default App;
