import "./styles.css";
import { useEffect, useState } from "react";
import { result } from "./api";
import InputRenderer from "./components/InputRenderer";

export default function App() {
  const [formConfig, setFormConfig] = useState([]);
  const [formData, setFormData] = useState({});
  const [errors, setError] = useState({});

  const validate = function () {
    setError({});
    formConfig.forEach((item) => {
      if (item.required && !formData[item.id]) {
        setError((prev) => ({
          ...prev,
          [item.id]: `${item.id} is a required field`,
        }));
      }
    });
  };

  const updateFormData = function (id, target) {
    const { value, checked, type } = target;
    setFormData((prev) => ({
      ...prev,
      [id]: type == "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    result.then((data) => {
      console.log(data);
      setFormConfig(data.fields);
    });
  }, []);
  return (
    <div>
      {formConfig?.map((item) => {
        return (
          <>
            <InputRenderer
              key={item.id}
              element={item}
              updateFormData={updateFormData}
              formData={formData}
            />
            {errors[item.id] && <p className="red">Error: {errors[item.id]}</p>}
          </>
        );
      })}
      <button
        onClick={() => {
          validate();
          console.log(formData);
        }}
      >
        Submit
      </button>
    </div>
  );
}
