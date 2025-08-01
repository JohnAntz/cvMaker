function FormComponent({ personalInfo, setPersonalInfo }) {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "John Doe",
      label: "Full Name",
    },
    {
      id: 2,
      name: "birthday",
      type: "date",
      placeholder: "",
      label: "Birthday",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "john@example.com",
      label: "Email",
    },
    {
      id: 4,
      name: "phoneNumber",
      type: "tel",
      placeholder: "123-456-7890",
      label: "Phone Number",
    },
  ];

  return (
    <form className="bg-white flex flex-col gap-2  rounded-lg p-4">
      {inputs.map((input) => (
        <div key={input.id} className="flex flex-col">
          <label htmlFor={input.name}>{input.label}</label>
          <input
            className="border-2 rounded-lg p-2"
            id={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={personalInfo[input.name]}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, [input.name]: e.target.value })
            }
          />
        </div>
      ))}
    </form>
  );
}

export default FormComponent;
