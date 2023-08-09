import React from "react";
import c from "./style.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Loader = (props: Props) => {
  return (
    <div className={`${c["lds-ellipsis"]} ${props.className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
