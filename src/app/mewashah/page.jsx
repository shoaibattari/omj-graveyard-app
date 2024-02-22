
"use client";
import React, { useState, useEffect } from "react";
import Loader from "../Components/Loading"; // Assuming the Loader component is in the same directory
import data from "../database/hub2.json";

const Home = () => {
  const [searchTermName, setSearchTermName] = useState("");
  const [searchTermKhundi, setSearchTermKhundi] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Simulating data fetching delay
    const fetchData = () => {
      setTimeout(() => {
        setFilteredData(
          data.filter(
            (item) =>
              item.Name.toLowerCase().includes(searchTermName.toLowerCase()) &&
              item.KHUNDI.toLowerCase().includes(searchTermKhundi.toLowerCase())
          )
        );
        setLoading(false);
      }, 800); // Adjust the delay as needed
    };

    fetchData();
  }, [searchTermName, searchTermKhundi]);

  const handleSearchNameChange = (e) => {
    setSearchTermName(e.target.value);
    setLoading(true); // Set loading to true when starting a new search
  };

  const handleSearchKhundiChange = (e) => {
    setSearchTermKhundi(e.target.value);
    setLoading(true); // Set loading to true when starting a new search
  };

  return (
    <main>
      <h1 className="bg-green-500 text-white text-3xl md:text-5xl font-extrabold text-center divide-x p-6 h-20">
        OMJ Graveyard List Saadi Town
      </h1>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTermName}
          onChange={handleSearchNameChange}
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <input
          type="text"
          placeholder="Search by Khundi"
          value={searchTermKhundi}
          onChange={handleSearchKhundiChange}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      {loading ? (
        <Loader />
      ) : filteredData.length === 0 ? (
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
};

export default Home;
