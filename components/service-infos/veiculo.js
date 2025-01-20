import Link from "next/link";
import React, { forwardRef } from "react";

const Veiculo = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2 className="text-customGreen text-2xl lg:text-3xl font-bold text-center mb-4">
        Financiamento de veículo
      </h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 lg:w-[28vw] items-center justify-center bg-customDarkBlue p-4 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ccd2db"
            viewBox="0 0 256 256"
            strokeWidth={1.5}
            stroke="none"
            className="size-12 text-customBackground"
          >
            <path d="M240 114h-29.51l-43.9-43.9a13.94 13.94 0 0 0-9.9-4.1H44.28a14 14 0 0 0-11.65 6.23L3 116.67A6 6 0 0 0 2 120v48a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h69.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14M42.62 78.89a2 2 0 0 1 1.66-.89h112.41a2 2 0 0 1 1.41.59L193.52 114H19.21ZM64 194a18 18 0 1 1 18-18a18 18 0 0 1-18 18m128 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m50-26a2 2 0 0 1-2 2h-18.6a30 30 0 0 0-58.8 0H93.4a30 30 0 0 0-58.8 0H16a2 2 0 0 1-2-2v-42h226a2 2 0 0 1 2 2Z" />
          </svg>

          <h3 className="text-customLightBlue lg:text-xl text-lg text-center font-bold">
            SIMULE SEU FINANCIAMENTO VEICULAR
          </h3>
          <div className="lg:text-xl text-lg text-center">
            <p>Clique no botão abaixo para acessar a plataforma de simulação <span className="lg:text-2xl text-xl text-customBackground">Dryve</span></p>
            <p>e preencha os dados.</p>
          </div>
            <Link className="bg-customLightBlue text-customBackground text-xl font-bold px-3 py-1 rounded-lg hover:scale-110 hover:bg-customLightBlueContrast duration-300" target="__blank" href={"https://credito.dryve.com.br/?code=P6Z48U"}>SIMULE AGORA</Link>
        </div>
      </div>
    </div>
  );
})

export default Veiculo;
