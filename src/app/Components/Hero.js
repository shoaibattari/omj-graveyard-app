import React from "react";
import HUB1 from "../database/hub1.json";
import HUB2 from "../database/hub2.json";
import Saadi from "../database/saaditown.json";
import mewa from "../database/mewashah.json";
import NumberIncrementer from "../Components/Number";

import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="bg-gray-50 py-16 pt-32 md:h-svh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-700 sm:text-5xl">
              OMJ GRAVEYARD SEARCH APP
            </h2>

            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              OMJ Graveyard Data Search: Uniting Hearts through Fatiha Prayers.
            </p>
            <p className="mt-3 text-3xl text-gray-500 sm:mt-4 md:animate-bounce font-bold">
              Select Graveyard And Search <span className="text-3xl"> ↓ </span>
            </p>
          </div>
        </div>

        <div className="mt-10 pb-1">
          <div>
            <div className=" inset-0 h-1/2 bg-gray-50" />
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4  ">
                  <Link href={"/hubriver1 "} target="_blank">
                    <div className="flex flex-col border-b  border-gray-100 p-6 text-center sm:border-0 sm:border-r bg-gray-700 text-white hover:scale-125 hover:bg-gray-800">
                      <dt className=" order-2 mt-2 text-lg leading-6 font-medium ">
                        HUB RIVER 1
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold ">
                        <NumberIncrementer stopNumber={HUB1.length} />
                      </dd>
                    </div>
                  </Link>
                  <Link href={"/hubriver2"} target="_blank">
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r bg-white text-gray-700 hover:scale-125 hover:bg-gray-200">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium ">
                        HUB RIVER 2
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold ">
                        <NumberIncrementer stopNumber={HUB2.length} />
                      </dd>
                    </div>
                  </Link>
                  <Link href={"/saaditown"} target="_blank">
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l bg-gray-700 text-white hover:scale-125 hover:bg-gray-800">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium ">
                        Saadi Town
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold ">
                        <NumberIncrementer stopNumber={Saadi.length} />{" "}
                      </dd>
                    </div>
                  </Link>
                  <Link href={"/mewashah"} target="_blank">
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l bg-white text-gray-700 hover:scale-125 hover:bg-gray-200">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium ">
                        MevaShah
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold ">
                        <NumberIncrementer stopNumber={mewa.length} />
                      </dd>
                    </div>
                  </Link>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
