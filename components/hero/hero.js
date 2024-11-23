"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "../../app/globals.css";
import classes from "./image-slide.module.css";

export default function ImageSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isText, setIsText] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
    setIsText(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
      setIsText(false);
    }, 500);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  useEffect(() => {
    const intervalIndex = setInterval(nextSlide, 10000);

    return () => clearInterval(intervalIndex);
  }, [isAnimating]);

  const content = [
    {
      image: "/images/landscape-hero-page1.webp",
      alt: "landscape for home equity page",
      title: "Empréstimo com garantia de imóvel",
      text1:
        "Obtenha o crédito que você precisa com prazos flexíveis e condições vantajosas.",
      text2:
        "Transforme seu imóvel em um recurso para alcançar seus objetivos com taxas acessíveis e segurança.",
    },
    {
      image: "/images/dubai-hero-page2.webp",
      alt: "dubai image for real state financing page",
      text1:
        "Realize a compra do seu imóvel, seja residencial ou comercial, com condições vantajosas e segurança.",
      text2:
        "Dê início à nova fase da sua vida com um financiamento acessível e simplificado.",
    },
    {
      image: "/images/car-hero-page3.webp",
      alt: "car image for vehicle financing page",
      text1:
        "Adquira o carro dos seus sonhos com um financiamento que se adapta às suas necessidades.",
      text2:
        "Desfrute de uma experiência com opções flexíveis para que você acelere seu caminho para a liberdade e mobilidade.",
    },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0">
        <div className="relative overflow-hidden ">
          <Image
            className="w-full h-[100vh] rounded-b-xl object-cover object-bottom flex-shrink-0"
            src={content[currentIndex].image}
            alt={content[0].alt}
            width={1268.8}
            height={472.73}
            priority
          />

          <div
            className={`bg-black rounded-b-xl absolute opacity-40 inset-0 ${isAnimating ? "backdropTransition" : ""}`}
          ></div>
          <div className={`${classes.slideHero} absolute inset-0 opacity-0 `}>
            <h1
              className={`text-white text-center font-bold md:text-3xl text-xl`}
            >
              Transformando suas finanças com{" "}
            </h1>
            <div className="flex justify-center">
              <div>
                <p
                  className={`${classes.typing} w-0 font-extrabold text-customLightBlue md:text-4xl text-2xl`}
                >
                  soluções inteligentes.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`absolute flex flex-col inset-0 top-[50%] left-[10vw] w-[30.4rem] ${isText ? "textAnimation" : ""}`}
            key={currentIndex}
          >
            <h1
              className={`${classes.slideTitle} translate-x-[-62%] font-bold text-3xl text-[#4DBD7C]`}
            >
              Empréstimo com garantia de imóvel
            </h1>
            <hr
              className={`${classes.slideLine} translate-x-[-150%] w-[30.4rem] border-t-2 border-[#4DBD7C] my-2`}
            />
            <p
              className={`${classes.slideTextOne} translate-x-[-130%] text-xl mb-2 text-white w-[100%]`}
            >
              {content[currentIndex].text1}
            </p>
            <p
              className={`${classes.slideTextTwo} translate-x-[-130%] text-xl text-white w-[100%]`}
            >
              {content[currentIndex].text2}
            </p>
            <Link
              href={"/"}
              className={`${classes.slideButton} translate-y-[200%] opacity-0 md:text-xl text-white font-bold absolute top-[75%] px-3 py-1 border-2 border-[#4DBD7C] rounded-full hover:text-[#4DBD7C] hover:bg-white hover:border-transparent hover:scale-110 transition-all duration-300`}
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
