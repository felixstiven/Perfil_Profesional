import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";


const imageData = [
    "../../public/images/hackathon.jpeg",
    "../../public/images/premio1.jpeg",
]


export default function HackathonImages() {
 const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

  return (
    <>
      <div className=" mt-12 p-8 ">
        <h1 className=" text-center text-4xl text-cyan mb-10 font-bold">HACKATHON CHALLENGER MASTER 2025</h1>
      </div>
       <div className="relative -mb-[100px] lg:w-[1100px] md:w-auto  m-auto flex items-center justify-center">
        <button
          aria-label="Anterior"
          className="absolute text-4xl  lg:left-[60px] md:left-[20px] max:left-1 top-1/2  w-10 h-10 rounded-full bg-darkOrange  shadow-md  hover:bg-orange text-white font-semibold"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          ‹
        </button>

        <Slider ref={sliderRef} {...settings} className=" w-full lg:w-[800px] md:w-[800px] h-[500px] md:p-[90px]  mx-auto">
          {imageData.map((image, index) => (
            <div key={index}>
              <img src={image} className="max:p-[50px]  " alt="" />
            </div>
          ))}
        </Slider>

        <button
          aria-label="Siguiente"
          className="absolute text-4xl lg:right-[60px] md:right-[20px] max:right-1  top-1/2  w-10 h-10 rounded-full bg-darkOrange text-white shadow-md hover:bg-orange font-semibold"
          onClick={() => sliderRef.current?.slickNext()}
        >
          ›
        </button>
      </div>
    </>
    
  );
}