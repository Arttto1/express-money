"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

import MainHeader from "@/components/main-header/main-header";
import HeroSlide from "@/components/hero/hero";
import "./globals.css";
import HomeEquity from "@/components/service-infos/home-equity";
import Construcao from "@/components/service-infos/construcao";
import Veiculo from "@/components/service-infos/veiculo";
import Parceiros from "@/components/parceiros/parceiros";

export default function SvDois() {
  const quemSomosRef = useRef(null);
  const contatoRef = useRef(null);
  const perguntasRef = useRef(null);
  const veiculoRef = useRef(null);
  const HomeEquityRef = useRef(null);

  return (
    <>
      <MainHeader ref={{ quemSomos: quemSomosRef, contato: contatoRef, perguntas: perguntasRef }}/>
      <div className="w-full bg-transparent lg:h-[100vh] h-[70vh]"></div>
      <HeroSlide ref={{ veiculo: veiculoRef, imovel: HomeEquityRef }} />
      <section id="about" className="mt-8 px-4">
        {/* Título */}
        <h1 className="text-2xl lg:text-4xl text-customGreen text-center font-bold mb-6 uppercase appear">
          Sobre Nós
        </h1>

        {/* Descrição */}
        <div ref={quemSomosRef} className="flex flex-col gap-6 max-w-[80vw] lg:max-w-[60vw] m-auto text-center">
          <p className="text-lg lg:text-xl leading-7 text-gray-700 appear">
            A{" "}
            <span className="font-bold">
              Express Money Intermediações em Negócios
            </span>{" "}
            é uma empresa especializada em oferecer{" "}
            <span className="">soluções financeiras</span> personalizadas, com
            foco em empréstimos e financiamentos.
          </p>
          <p className="text-lg lg:text-xl leading-7 text-gray-700 appear">
            Nos destacamos em opções como o Empréstimo com Garantia de Imóvel
            (Home Equity), financiamento imobiliário e de veículos, além de
            serviços de consultoria tributária.
          </p>
          <p className="text-lg lg:text-xl leading-7 text-gray-700 appear">
            Nossa missão é simplificar e agilizar processos financeiros, sempre
            buscando atender às necessidades específicas de cada cliente com
            excelência e comprometimento.
          </p>
        </div>

        {/* Ícones com informações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-[90vw] lg:max-w-[70vw] m-auto">
          <div className="flex flex-col items-center justify-center text-center bg-customGreen p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-white mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <p className="text-lg text-gray-900">
              Mais de 10 anos de experiência no mercado
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-customGreen p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-white mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <p className="text-lg text-gray-900">Vasta rede de parceiros</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-customGreen p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mb-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            <p className="text-lg text-gray-900">
              Milhares de contratos fechados
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-customGreen p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-white mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-lg text-gray-900">
              Atuação nacional e internacional
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 w-full">
        <h1 className="text-2xl lg:text-4xl text-customDarkBlue text-center font-bold mb-6 uppercase">
          Saiba mais sobre nossos serviços
        </h1>
        <div className="flex flex-col gap-8 items-center justify-center m-auto max-w-[90vw]">
          <HomeEquity ref={HomeEquityRef} />
          <Construcao />
          <Veiculo ref={veiculoRef} />
        </div>
      </section>
      <section  ref={contatoRef} id="contato" className="flex flex-col items-center m-auto mt-20 max-w-[80vw]">
        <h1 className="lg:text-4xl text-2xl font-bold text-customDarkBlue mb-8 uppercase">
          Está com alguma dúvida?
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Texto de contato */}
          <div className="flex  flex-col w-fit">
            <h2 className="text-3xl text-customDarkBlue uppercase font-bold mb-4 w-fit">
              Fale Conosco
            </h2>
            <p className="text-2xl text-black font-bold mb-4 w-fit">
              Temos uma equipe responsável por cuidar disso!
            </p>
            <p className="text-xl mb-4 w-fit">
              Chame-nos no WhatsApp para um atendimento mais rápido.
            </p>
            <p className="text-xl mb-4 w-fit">
              Ou envie-nos uma mensagem por email.
            </p>

            <div className="flex flex-col font-bold gap-3 w-fit">
              <Link
                href="https://wa.me/5511949806108"
                target="_blank"
                className="flex items-center gap-1 px-3 py-1 w-fit border-[2px] border-customGreen rounded-full bg-customGreen text-white fill-white hover:border-black hover:text-black hover:fill-black hover:scale-105 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-7"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span className="text-xl">11 94980-6108</span>
              </Link>
              <div className="flex items-center w-fit gap-1 border-[2px] px-3 py-1 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <span className="text-xl">express.cashme@proton.me</span>
              </div>
            </div>
          </div>
          <Image
            src={"/images/undraw_contact-us_kcoa.svg"}
            alt="sunset image for faq page"
            width={500}
            height={500}
          ></Image>
        </div>
      </section>
      <section><Parceiros/></section>

      <section
      ref={perguntasRef}
        id="faq"
        className="flex flex-col max-w-[90vw] lg:max-w-[70vw] mt-20 gap-8 m-auto"
      >
        {/* Título */}
        <h1 className="text-2xl lg:text-3xl font-bold text-center uppercase text-customDarkBlue">
          Perguntas Frequentes (FAQ)
        </h1>

        {/* Lista de Perguntas */}
        <div className="flex flex-col gap-6">
          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              É possível obter um empréstimo com garantia de imóvel, mesmo que
              ele esteja financiado?
            </h2>
            <p className="text-base text-gray-700">
              Sim, é possível. Você pode solicitar um Crédito com Garantia de
              Imóvel, o que permite acesso a recursos financeiros para utilizar
              como desejar.
            </p>
          </article>

          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Preciso pagar alguma taxa antecipada para a Express Money?
            </h2>
            <p className="text-base text-gray-700">
              Não. A Express Money não exige nenhum pagamento antecipado de seus
              clientes.
            </p>
          </article>

          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Se meu crédito não for aprovado, terei que pagar alguma taxa?
            </h2>
            <p className="text-base text-gray-700">
              Não. Caso o crédito não seja aprovado, você não será cobrado por
              nenhum tipo de taxa.
            </p>
          </article>

          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Qual é a taxa de juros aplicada aos empréstimos?
            </h2>
            <p className="text-base text-gray-700">
              As taxas de juros variam de acordo com o perfil do cliente. O
              valor exato será informado após a análise completa dos documentos.
              As taxas iniciais começam a partir de 0,75% ao mês.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
