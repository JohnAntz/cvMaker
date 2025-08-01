export default function Academics({ academicInfo, setAcademicInfo }) {
  const inputs = [
    {
      id: 1,
      name: "academicCenter",
      type: "text",
      placeholder: "Universidad de Malaga",
      label: "Academic Center",
    },
    {
      id: 2,
      name: "degree",
      type: "text",
      placeholder: "Ciencias Ambientales",
      label: "Degree",
    },
    {
      id: 3,
      name: "date",
      type: "date",
      placeholder: "2025-07-22",
      label: "Finish date of studies",
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
            value={academicInfo[input.name]}
            onChange={(e) =>
              setAcademicInfo({ ...academicInfo, [input.name]: e.target.value })
            }
          />
        </div>
      ))}
    </form>
  );
}
