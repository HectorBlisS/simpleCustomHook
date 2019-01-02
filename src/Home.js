import React from "react";
import useName from "./hooks";

export default function(props) {
  const name = useName();
  return <div>Bienvenido {name.value}</div>;
}
