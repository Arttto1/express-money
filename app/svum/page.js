import Image from "next/image";

import classes from "./page.module.css";
import "../../app/globals.css";
import MainPageNav from "@/components/page-nav/main-page-nav";
import Link from "next/link";

export default function SvUm() {
  return (
    <>
      <article className="absolute top-0 left-0 right-0">
        <div className="relative">
          <Image
            className="w-full max-h-[70vh] rounded-b-xl object-top object-cover"
            src="/images/landscape-hero-page1.webp"
            alt="Cliente feliz com a consultoria"
            width={1268.8}
            height={472.73}
            priority
          />

          <div className="bg-black rounded-b-xl absolute opacity-30 inset-0"></div>

          <div
            className={`${classes.slideHero} absolute inset-0 opacity-0 translate-y-[-10%]`}
          >
            <h1
              className={`text-white text-center font-bold md:text-2xl text-xl`}
            >
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

          <div className="absolute flex flex-col inset-0 top-[40%] left-[10vw]">
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
              Obtenha o crédito que você precisa com prazos flexíveis e
              condições vantajosas.
            </p>
            <p
              className={`${classes.slideTextTwo} translate-x-[-140%] text-lg text-white max-w-[35vw]`}
            >
              Transforme seu imóvel em um recurso para alcançar seus objetivos
              com taxas acessíveis e segurança.
            </p>
          </div>
          <Link
            href={"/"}
            className={`${classes.slideButton} translate-y-[200%] opacity-0 md:text-xl text-white font-bold absolute left-[10%] top-[80%] px-4 py-2 border-2 border-[#4DBD7C] rounded-full hover:text-[#4DBD7C] hover:bg-white hover:border-transparent hover:scale-110 transition-all duration-300`}
          >
            Simule já
          </Link>
        </div>

        <h2
          className={`slideNavText md:text-2xl text-center font-bold mb-4 mt-4`}
        >
          Serviços que ofeceremos
        </h2>
        <MainPageNav />

        <hr
          className={`w-[70vw] m-auto border-t-2 border-customDarkBlue mt-8 mb-6`}
        />
        <div className={`md:text-4xl text-center`}>
          <h2 className={`appear mb-4`}>
            Porque escolher a{" "}
            <span className={`text-customLightBlue underline font-extrabold`}>
              Express Money
            </span>
          </h2>
          <p className={`appear md:text-xl max-w-[50vw] m-auto`}>
            A Express Money é uma fintech dedicada a oferecer empréstimos com
            garantia de imóvel (Home Equity), com o objetivo de simplificar e
            agilizar cada etapa do processo. Priorizamos relações baseadas em
            transparência, sempre mantendo uma comunicação honesta com nossos
            clientes e parceiros.
          </p>
        </div>

        <Image
          className={`${classes.animateImage} m-auto w-[40rem] translate-x-[-5%]`}
          src="/images/vantagens-page1.svg"
          alt="Cliente feliz com a consultoria"
          width={700}
          height={500}
        />
      </article>
    </>
  );
}
