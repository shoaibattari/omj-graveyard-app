"use client";
import React, { useState, useEffect } from "react";
import Loader from "../Components/Loading"; // Assuming the Loader component is in the same directory
import data from "../database/hub2.json";
import Table from "../Components/Table";


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
        <p className="text-center md:text-7xl font-extrabold text-gray-600 uppercase h-svh">No matching records found.</p>
      ) : (
        <Table filteredData={filteredData} />
        
      )}
    </main>
  );
};

export default Home;
