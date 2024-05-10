import React from "react";
import Hero from "./Components/Hero";
import Slider from "./Components/Slider";

export const metadata = {
  title: "OMJ Graveyard",
  description: "Okhai Memon Jamat graveyards data searching for visitors gravyards",
};



function Home() {
  return (
    <div>
      <h1 className="bg-green-500 text-white text-3xl md:text-5xl font-extrabold text-center divide-x p-6 h-20">
        OMJ Graveyard
      </h1>

      <Hero />
      {/* <h1 className=" font-extrabold text-gray-700 text-lg md:text-5xl  text-center divide-x p-6 h-20">
       Thanks Full Of Okhai Memon Jamat For Appreciation
      </h1> */}
      {/* <Slider /> */}
    </div>
  );
}

export default Home;
