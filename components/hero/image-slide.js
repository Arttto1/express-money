"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "../../app/globals.css";
import classes from "./image-slide.module.css";

export default function ImageSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % 4);
      setIsAnimating(false);
    }, 500); // Deve coincidir com a duração da transição no CSS
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + 4) % 4);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const duration = currentIndex === 0 || currentIndex === 3 ? 5000 : 10000;

    const interval = setInterval(nextSlide, duration);
    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <div className="relative overflow-hidden">
      <div
        className={`w-full flex ${!isAnimating && (currentIndex === 1 || currentIndex === 2 || currentIndex === 3) ? "transition-transform duration-1000 ease-in-out" : ""}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        <Image
          className="w-full max-h-[70vh] rounded-b-xl object-cover flex-shrink-0"
          src={content[0].image}
          alt={content[0].alt}
          width={1268.8}
          height={472.73}
          priority
        />
        <Image
          className=" object-center rounded-b-xl max-h-[70vh] w-full object-cover flex-shrink-0"
          src={content[1].image}
          alt={content[1].alt}
          width={1268.8}
          height={472.73}
        />
        <Image
          className=" object-bottom rounded-b-xl max-h-[70vh] w-full object-cover flex-shrink-0"
          src={content[2].image}
          alt={content[2].alt}
          width={1268.8}
          height={472.73}
          priority
        />
        <Image
          className="rounded-b-xl max-h-[70vh] w-full object-cover flex-shrink-0"
          src={content[0].image}
          alt={content[0].alt}
          width={1268.8}
          height={472.73}
          priority
        />
      </div>
      <div className="bg-black rounded-b-xl absolute opacity-40 inset-0"></div>
      <button className="left-0 top-[50%] absolute" onClick={prevSlide}>
        aaaa
      </button>
      <div
        className={`${classes.slideHero} absolute inset-0 opacity-0 translate-y-[-10%]`}
      >
        <h1 className={`text-white text-center font-bold md:text-2xl text-xl`}>
          Transformando suas finanças com{" "}
        </h1>
        <div className="flex justify-center">
          <div>
            <p
              className={`${classes.typing} w-0 font-extrabold text-customLightBlue md:text-3xl text-2xl`}
            >
              soluções inteligentes.
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute flex flex-col inset-0 top-[40%] left-[10vw]"
        key={currentIndex}
      >
        <h1
          className={`${classes.slideTitle} translate-x-[-100%] font-bold text-2xl text-[#4DBD7C]`}
        >
          Empréstimo com garantia de imóvel
        </h1>
        <hr
          className={`${classes.slideLine} translate-x-[-150%] w-[24.3rem] border-t-2 border-[#4DBD7C] my-2`}
        />
        <p
          className={`${classes.slideTextOne} translate-x-[-140%] text-lg text-white max-w-[35vw]`}
        >
          Obtenha o crédito que você precisa com prazos flexíveis e condições
          vantajosas.
        </p>
        <p
          className={`${classes.slideTextTwo} translate-x-[-140%] text-lg text-white max-w-[35vw]`}
        >
          Transforme seu imóvel em um recurso para alcançar seus objetivos com
          taxas acessíveis e segurança.
        </p>
      </div>
      <Link
        href={"/"}
        className={`${classes.slideButton} translate-y-[200%] opacity-0 md:text-xl text-white font-bold absolute left-[10%] top-[80%] px-4 py-2 border-2 border-[#4DBD7C] rounded-full hover:text-[#4DBD7C] hover:bg-white hover:border-transparent hover:scale-110 transition-all duration-300`}
      >
        Simule já
      </Link>
    </div>
  );
}
