import React from "react";
import Headline from "./Headline";
import OtherWorks from "./OtherWorks";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
      <div className="col-span-3">
        <Headline />
      </div>
      <div className="">
        <OtherWorks />
      </div>
    </div>
  );
};

export default Home;
