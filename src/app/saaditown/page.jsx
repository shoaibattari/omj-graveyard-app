"use client";
import React, { useState, useEffect } from "react";
import Loader from "../Components/Loading"; // Assuming the Loader component is in the same directory
import data from "../database/saaditown.json";

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
    <main className="md:mx-8 mx-1">
      <h1 className="bg-green-500 text-white text-3xl md:text-5xl font-extrabold text-center divide-x p-6 h-20">
        OMJ Graveyard List Saadi Town
      </h1>

      <div className="mb-4 md:flex  md:justify-center  m-2 ">
        <input
          type="text"
          placeholder="Enter Full Name"
          value={searchTermName}
          onChange={handleSearchNameChange}
          className="p-4 border border-gray-300 rounded-md mr-2 w-full text-2xl   "
        />
        <input
          type="text"
          placeholder="Enter Khundi Name"
          value={searchTermKhundi}
          onChange={handleSearchKhundiChange}
          className="mt-2 md:mt-0 p-4 border border-gray-300 rounded-md mr-2 w-full md:w-auto text-2xl  "
        />
      </div>

      {loading ? (
        <Loader />
      ) : filteredData.length === 0 ? (
        <p className="text-center md:text-7xl font-extrabold text-gray-600 uppercase">
          No matching records found.
        </p>
      ) : (
        <table className="table-auto text-center  border-2 w-full">
          <thead className="h-8 md:h-14">
            <tr className="text-md md:text-2xl text-gray-800 bg-gray-200">
              <th className="border-2 border-gray-200">No </th>
              {/* <th className="border-2 border-gray-200">Graveyard</th> */}
              <th className="border-2 border-gray-200">Name</th>
              <th className="border-2 border-gray-200">KHUNDI</th>
              <th className="border-2 border-gray-200">DOD</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((d, index) => (
              <tr
                key={d.Name}
                className={`${
                  index % 2 === 0
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-700"
                } border border-dashed border-green-500 text-md md:text-2xl font-bold text-gray-800  `}
              >
                <td className="border-2 border-gray-200  text-md:2xl w-18 md:w-auto px-1 h-20  md:px-6 md:py-4">
                  {d.GraveNo}
                </td>
                {/* <td className="border-2 border-gray-200 text-1xl text-md:2xl">
                  {d.Graveyard}
                </td> */}
                <td className="border-2 border-gray-200 text-1xl text-md:2xl">
                  {d.Name}
                </td>
                <td className="border-2 border-gray-200 text-1xl text-md:2xl">
                  {d.KHUNDI}
                </td>
                <td className="border-2 border-gray-200  text-xs md:text-2xl w-16 md:w-auto">
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
