"use client";

import React, { useState } from "react";

export default function ProfilePage() {
  const [student, setStudent] = useState();
  const [studentData, setStudentData] = useState([]);

  return (
    <div>
      {/* Input + Add Button */}
      <div className="bg-green-200 p-2">
        <input
          placeholder="name"
          onChange={(event) => {
            setStudent(event.target.value);
          }}
        />

        <button
          className="bg-red-200 p-2 m-2"
          onClick={async (event) => {
            const result = await fetch("http://localhost:3000/api/students", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name: student }),
            });

            // convert to json
            const data = await result.json();
            console.log(data);
          }}
        >
          Add
        </button>
      </div>

      {/* Get Students Button */}
      <button
        className="bg-yellow-300 p-2 m-2"
        onClick={async (event) => {
          // Call backend
          const result = await fetch("http://localhost:3000/api/students")
            .then((data) => data.json());

          setStudentData(result["data"]);
        }}
      >
        Get Students Data
      </button>

      {/* Display Students */}
      <div className="flex flex-col">
        {studentData.map((student) => {
          return <div>{student.name}</div>;
        })}
      </div>
    </div>
  );
}
