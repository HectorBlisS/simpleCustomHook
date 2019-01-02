import { useState } from "react";

export default function() {
  const name = localStorage.getItem("name");
  const [value, setValue] = useState(name);
  function onChange(newValue) {
    setValue(newValue);
    localStorage.setItem("name", newValue);
  }
  return {
    value,
    onChange
  };
}
