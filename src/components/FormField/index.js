import React from "react";
export default function FormField({ type, value, onChange, name, label }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} name={name} onChange={onChange} />
    </div>
  );
}
