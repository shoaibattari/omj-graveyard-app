"use client";
import { useState } from "react";
import data from "../database/hub2.json"; 

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main>
      <h1 className="bg-green-500 text-white text-3xl md:text-5xl font-extrabold text-center divide-x p-6  h-20">
        OMJ Graveyard List HubRiver2
      </h1>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      {filteredData.length === 0 ? (
        <p className="text-center text-gray-600">No matching records found.</p>
      ) : (
        <table className="table-auto text-center bg-white border-black border-2 w-full">
          <thead>
            <tr className="text-sm md:text-2xl">
              <th className="border-2 border-gray-600">No</th>
              <th className="border-2 border-gray-600">Graveyard</th>
              <th className="border-2 border-gray-600">Name</th>
              <th className="border-2 border-gray-600">KHUNDI</th>
              <th className="border-2 border-gray-600">DOD</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((d, index) => (
              <tr
                key={d.Name}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border border-dashed border-green-500 text-xs md:text-1xl font-bold text-gray-800`}
              >
                <td className="border-2 border-gray-600 text-1xl text-md:2xl w-8 md:w-auto">
                  {d.GraveNo}
                </td>
                <td className="border-2 border-gray-600 text-1xl text-md:2xl">
                  {d.Graveyard}
                </td>
                <td className="border-2 border-gray-600 text-1xl text-md:2xl">
                  {d.Name}
                </td>
                <td className="border-2 border-gray-600 text-1xl text-md:2xl">
                  {d.KHUNDI}
                </td>
                <td className="border-2 border-gray-600 text-1xl text-md:2xl w-16 md:w-auto">
                  {d.DOD}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
