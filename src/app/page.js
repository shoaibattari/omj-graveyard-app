import React from "react";
import Hero from "./Components/Hero";

function Home() {
  return (
    <div>
      <h1 className="bg-green-500 text-white text-3xl md:text-5xl font-extrabold text-center divide-x p-6 h-20">
        OMJ Graveyard
      </h1>

      <Hero />
    </div>
  );
}

export default Home;
