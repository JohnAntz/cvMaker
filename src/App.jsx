import { useState } from "react";
import FormComponent from "./components/FormComponent";
import Academics from "./components/Academic";
import Work from "./components/Work";
import Preview from "./components/Preview";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    birthday: "",
    email: "",
    phoneNumber: "",
  });
  const [academicInfo, setAcademicInfo] = useState({
    academicCenter: "",
    degree: "",
    date: "",
  });
  const [workInfo, setWorkInfo] = useState({
    companyName: "",
    jobDescription: "",
    startDate: "",
    endDate: "",
  });

  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Personal Info" },
    { id: "tab2", label: "Academic Info" },
    { id: "tab3", label: "Work Info" },
  ];

  const tabsContent = {
    tab1: (
      <FormComponent
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
    ),
    tab2: (
      <Academics
        academicInfo={academicInfo}
        setAcademicInfo={setAcademicInfo}
      />
    ),
    tab3: <Work workInfo={workInfo} setWorkInfo={setWorkInfo} />,
  };

  return (
    <div className="min-h-dvh w-full  flex flex-col p-10 gap-10 items-center bg-slate-700">
      <main
        className="flex flex-col gap-10
      ">
        <div className="space-x-4 border-b-black border-b-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded text-white ${
                activeTab === tab.id
                  ? "bg-slate-500 text-black"
                  : "text-gray-700"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>
        <div>{tabsContent[activeTab]}</div>
      </main>
      <Preview
        personalInfo={personalInfo}
        academicInfo={academicInfo}
        workInfo={workInfo}
      />
    </div>
  );
}
