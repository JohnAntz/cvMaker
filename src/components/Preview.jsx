// Preview.jsx
function Preview({ personalInfo, academicInfo, workInfo }) {
  return (
    <div className="bg-white p-4 rounded-lg w-full max-w-md space-y-2">
      <h2 className="text-xl font-bold mb-2">Personal information</h2>
      <p>
        <strong>Full Name:</strong> {personalInfo.fullName}
      </p>
      <p>
        <strong>Birthday:</strong> {personalInfo.birthday}
      </p>
      <p>
        <strong>Email:</strong> {personalInfo.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {personalInfo.phoneNumber}
      </p>
      <hr className="border-1" />
      <h2 className="text-xl font-bold mb-2">Highest educational level</h2>
      <p>
        <strong>Academic Center:</strong> {academicInfo.academicCenter}
      </p>
      <p>
        <strong>Degree:</strong> {academicInfo.degree}
      </p>
      <p>
        <strong>Date finished:</strong> {academicInfo.date}
      </p>
      <hr className="border-1" />
      <h2 className="text-xl font-bold mb-2">Last job </h2>
      <p>
        <strong>Company name:</strong> {workInfo.companyName}
      </p>
      <p>
        <strong>Job description:</strong> {workInfo.jobDescription}
      </p>
      <p>
        <strong>Start date:</strong> {workInfo.startDate}
      </p>
      <p>
        <strong>End date:</strong> {workInfo.endDate}
      </p>
    </div>
  );
}

export default Preview;
