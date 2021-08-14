import React, { useContext } from "react";
import { context } from "../App";

export default function Creation() {
  const images = useContext(context);
  console.log(images);

  return (
   <div>
       dfdas
   </div>
  );
}
