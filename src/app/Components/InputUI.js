import React from "react";

function InputUI(searchTermName,searchTermKhundi) {
  return (
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
  );
}

export default InputUI;
