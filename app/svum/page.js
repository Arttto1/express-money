import Image from "next/image";

import classes from "./page.module.css";
import MainPageNav from "@/components/page-nav/main-page-nav";
import Link from "next/link";

export default function SvUm() {
  return (
    <>
      <article className="py-[4.9rem]">
        <div className="relative">
          <Image
            className="w-full h-full max-h-[50vh] rounded-b-xl object-center object-cover"
            src="/images/landscape-hero-page1.webp"
            alt="Cliente feliz com a consultoria"
            width={1920}
            height={1080}
            priority
          />
          <div className="bg-black rounded-b-xl absolute opacity-30 inset-0"></div>

          <div
            className={`${classes.slideHero} absolute inset-0 translate-y-[-5%]`}
          >
            <h1
              className={`text-white text-center font-bold md:text-4xl text-xl`}
            >
              Transformando suas finanças com{" "}
            </h1>
            <div className="flex justify-center">
              <div>
                <p
                  className={`${classes.typing} w-0 font-extrabold text-customLightBlue md:text-5xl text-2xl`}
                >
                  soluções inteligentes.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute flex flex-col inset-0 justify-center left-[10vw]">
            <h1
              className={`${classes.slideTitle} translate-x-[-100%] font-bold text-4xl text-[#4DBD7C]`}
            >
              Empréstimo com garantia de imóvel
            </h1>
            <hr
              className={`${classes.slideLine} translate-x-[-150%] w-[36.25rem] border-t-2 border-[#4DBD7C] my-4`}
            />
            <p
              className={`${classes.slideTextOne} translate-x-[-120%] text-xl text-white max-w-[50vw]`}
            >
              Obtenha o crédito que você precisa com prazos flexíveis e
              condições vantajosas.
            </p>
            <p
              className={`${classes.slideTextTwo} translate-x-[-120%] text-xl text-white max-w-[50vw]`}
            >
              Transforme seu imóvel em um recurso para alcançar seus objetivos
              com taxas acessíveis e segurança.
            </p>
          </div>
          <Link
            href={"/"}
            className={`${classes.slideButton} translate-y-[200%] opacity-0 md:text-2xl text-white font-bold absolute left-[10%] top-[80%] px-4 py-2 border-2 border-[#4DBD7C] rounded-full hover:text-[#4DBD7C] hover:bg-white hover:border-transparent hover:scale-110 transition-all duration-300`}
          >
            Simule já
          </Link>
        </div>

        <h2 className={`md:text-4xl text-center font-bold mb-4 mt-8`}>
          Serviços
        </h2>
        <MainPageNav />

        <div className={`md:text-4xl text-center my-8`}>
          <h2 className={`mb-4`}>
            Porque escolher a{" "}
            <span className={`text-customLightBlue underline font-extrabold`}>
              Express Money
            </span>
          </h2>
          <p className={`md:text-xl max-w-[50vw] m-auto`}>
            A Express Money é uma fintech dedicada a oferecer empréstimos com
            garantia de imóvel (Home Equity), com o objetivo de simplificar e
            agilizar cada etapa do processo. Priorizamos relações baseadas em
            transparência, sempre mantendo uma comunicação honesta com nossos
            clientes e parceiros.
          </p>
        </div>

        <Image
          className={`${classes.animateImage} opacity-0 m-auto`}
          src="/images/vantagens-page1.svg"
          alt="Cliente feliz com a consultoria"
          width={700}
          height={500}
        />
      </article>
    </>
  );
}
