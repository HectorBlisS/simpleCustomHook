import React from "react";
import useName from "./hooks";

export default function(props) {
  const name = useName();

  return (
    <div>
      Perfil de:{name.value}
      <br />
      <input onChange={e => name.onChange(e.target.value)} value={name.value} />
    </div>
  );
}
