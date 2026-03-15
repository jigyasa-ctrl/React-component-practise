import React from "react";
import "../styles.css";
export default function InputRenderer({
  element,
  key,
  updateFormData,
  formData,
}) {
  const { label, id, type, showIf, required } = element;
  const selectElement = function (id) {
    if (showIf && formData[showIf.field] !== showIf.value) {
      return;
    }
    switch (type) {
      case "checkbox":
        return (
          <div>
            {" "}
            <label>{label}</label>
            <input
              className="margin-50"
              type={type}
              onChange={(e) => updateFormData(id, e.target)}
            />
          </div>
        );
      case "text":
        return (
          <div>
            {" "}
            <label>{label}</label>
            <input
              className="margin-50"
              type="text"
              alt={label}
              onChange={(e) => updateFormData(id, e.target)}
            />
          </div>
        );
      case "number":
        return (
          <div>
            {" "}
            <label>{label}</label>
            <input
              className="margin-50"
              type="number"
              alt={label}
              onChange={(e) => updateFormData(id, e.target)}
            />
          </div>
        );
      default:
        break;
    }
  };
  return <div className="padding">{selectElement(id)}</div>;
}
