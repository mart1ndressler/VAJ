import {useState} from "react";
import {WinningNumbers} from "./WinningNumbers";

function Lottery() {
  // TODO: Change the component to use state
  //const lotteryNumbers = [];
  const [lotteryNumbers, setLotteryNum] = useState([]);

  if(lotteryNumbers.length < 10)
  {
    return (
      <div className="Lottery">
        <div className="TodaysNumbers">
          <div style={{padding: 5}}>
            Today's numbers are: {JSON.stringify(lotteryNumbers)}
          </div>
          <button
            onClick={() => {
              let nextNumber = Math.floor(Math.random() * 100);
              console.log(`Next number is ${nextNumber}`);
              // TODO: save the random number to the array
              setLotteryNum((pNums) => [...pNums, nextNumber]);
            }}>
            Roll next number
          </button>
        </div>
      </div>
    );
  }
  else return (<div className="Lottery"> <WinningNumbers numbers={lotteryNumbers}/> </div>);
}

export {Lottery};