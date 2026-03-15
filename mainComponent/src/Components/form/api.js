let data = {
    fields: [
      {
        id: "name",
        label: "Full Name",
        type: "text",
        required: true,
      },
      {
        id: "age",
        label: "Age",
        type: "number",
        required: true,
      },
      {
        id: "isStudent",
        label: "Are you a student?",
        type: "checkbox",
      },
      {
        id: "school",
        label: "School Name",
        type: "text",
        showIf: {
          field: "isStudent",
          value: true,
        },
      },
    ],
  };
  
  export const result = new Promise((resolve, reject) => {
    resolve(data);
  });
  