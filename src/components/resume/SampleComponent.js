import React from "react";

const SampleComponent = () => {
  const myObj = { first: "", second: "" };

  const myFunction = (e) => {
    myObj.first += e.currentTarget.value;
    console.log("SampleComponent.first:", myObj.first);
  };

  return <input onBlur={myFunction} type="text" />;
};

export { SampleComponent };
