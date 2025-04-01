import {useState, useEffect} from "react";

export function WindowSizer() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // TODO: write an useEffect hook that will update the width and height every time the window resizes
  useEffect(() => {
    function resize() {setWidth(window.innerWidth); setHeight(window.innerHeight);}
    window.addEventListener("resize", resize);
    return () => {window.removeEventListener("resize", resize);};
  }, []);

  return (
    <div>
      <div>
        Window size is {width}x{height}
      </div>
    </div>
  );
}