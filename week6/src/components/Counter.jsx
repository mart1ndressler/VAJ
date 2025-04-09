import {useState} from "react";

function Counter() {
  // TODO: Change the component to use state
  //const internalCount = 0;
  const [internalCount, setCount] = useState(0);

  return (
    <div>
      {/* Notice that we can add padding or other CSS styling to components */}
      <div style={{padding: 5}}>Counter is: {internalCount}</div>
      <button
        onClick={() => {
          // TODO: increment the internal count
          //console.log("Increment was clicked, but nothing happened");
          console.log("Increment was clicked, successfully incremented count!"); 
          setCount((pCount) => pCount + 1);
        }}>
        Click to increment
      </button>
      <br></br>
      <button
        onClick={() => {
          console.log("Double was clicked, successfully doubled count!");
          setCount((pCount) => pCount * 2);
        }}>
        Click to double
      </button>
    </div>
  );
}

export {Counter};