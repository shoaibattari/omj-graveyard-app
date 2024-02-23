"use client";

import Image from "next/image";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image1 from "../Components/images/map.jpg";
import Image2 from "../Components/images/15 shaban.jpg";
import Image3 from "../Components/images/fatwa.jpg";


export default class ImagesCaurosel extends Component {
  render() {
    let data = [
      {
        img: Image1,
        title: "bus timing",
        text: " graveyard transport",
      },
      {
        img: Image2,
        title: "contact graveyard",
        text: " graveyard contact ",
      },
      {
        img: Image3,
        title: "map",
        text: "graveyard map",
      },
    ];
    const settings = {
      dots: true,
      dotsClass: "slick-dots line-indicator",
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],

      customPaging: (i) => <div className="-mt-2 text-xs opacity-0">{i}</div>,
    };
    return (
      <div className=" w-full">
        <Slider {...settings} className="w-full">
          {data.map((val, index) => {
            return (
              <div
                className="px-3 xl-lg:px-1 group mb-2 md:mb-5  relative overflow-hidden outline-none"
                key={index}
              >
                <div className="relative bg-slate-900 rounded-lg   overflow-hidden">
                  <Image
                    src={val.img}
                    className="w-full h-[300px]  md:h-[600px]  object-fill"
                    alt={val.title}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
