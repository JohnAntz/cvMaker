export default function Work({ workInfo, setWorkInfo }) {
  const inputs = [
    {
      id: 1,
      name: "companyName",
      type: "text",
      placeholder: "Meta",
      label: "Company name:",
    },
    {
      id: 2,
      name: "jobDescription",
      type: "text",
      placeholder:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quisquam velit tempora quam unde assumenda magni, quibusdam asperiores cum. Voluptatem.",
      label: "Job description",
    },
    {
      id: 3,
      name: "startDate",
      type: "date",
      placeholder: "2023-03-03 ",
      label: "Start date",
    },
    {
      id: 4,
      name: "endDate",
      type: "date",
      placeholder: "2025-05-08",
      label: "End date",
    },
  ];

  return (
    <form className="bg-white flex flex-col gap-2  rounded-lg p-4">
      {inputs.map((input) => (
        <div key={input.id} className="flex flex-col">
          <label htmlFor={input.name}>{input.label}</label>
          {input.id === 2 ? (
            <textarea
              className="border-2 rounded-lg p-2"
              id={input.name}
              name={input.name}
              placeholder={input.placeholder}
              value={workInfo[input.name]}
              onChange={(e) =>
                setWorkInfo({ ...workInfo, [input.name]: e.target.value })
              }
            />
          ) : (
            <input
              className="border-2 rounded-lg p-2"
              id={input.name}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={workInfo[input.name]}
              onChange={(e) =>
                setWorkInfo({ ...workInfo, [input.name]: e.target.value })
              }
            />
          )}
        </div>
      ))}
    </form>
  );
}
