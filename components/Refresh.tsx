import { useState, useEffect } from "react";
import { BiRefresh } from "react-icons/bi";
import getRandomInt from "./random";

const Refresh = () => {
  const [num, setNum] = useState<number>(getRandomInt());
  useEffect(() => {
    const r = getRandomInt();
    setNum(r);
  }, []);
  return (
    <>
      <div
        onClick={() => {
          setNum(getRandomInt());
        }}
      >
        <BiRefresh />
      </div>
    </>
  );
};

export default Refresh;
