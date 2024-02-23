import React from "react";

function Table({ filteredData }) {
  return (
    <table className="table-auto text-center  border-2 w-full">
      <thead className="h-8 md:h-14">
        <tr className="text-md md:text-2xl text-gray-800 bg-gray-200">
          <th className="border-2 border-gray-200">No</th>
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
  );
}

export default Table;
