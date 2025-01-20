import React, { forwardRef } from "react";

const HomeEquity = forwardRef((props, ref) => {
  return (<div ref={ref}>
    <h2 className="text-customGreen lg:text-3xl font-bold text-center mb-4">
      Empréstimo com garantia de imóvel
    </h2>
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2 lg:w-[40vw] items-center justify-center bg-customDarkBlue p-4 rounded-lg shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 text-customBackground"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <h3 className="text-customLightBlue text-xl font-bold">
          VALORES MAIORES{" "}
        </h3>
        <div className="lg:text-xl text-center">
          <p>
            Consiga até{" "}
            <span className="text-customBackground text-2xl">50%</span> do
            valor do seu imóvel.
          </p>
          <p>
            Crédito de{" "}
            <span className="text-customBackground text-2xl">
              R$100 mil{" "}
            </span>{" "}
            a{" "}
            <span className="text-customBackground text-2xl">
              R$10 milhões
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-4 m-auto w-fit text-xl text-center">
        <div className="flex flex-col gap-2 lg:w-[25vw] items-center justify-center bg-customDarkBlue p-4 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-customBackground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="text-customLightBlue text-xl font-bold">
            PRAZOS MAIS LONGOS
          </h3>

          <p className="text-xl">
            Até{" "}
            <span className="text-customBackground text-2xl">
              240 meses
            </span>{" "}
            para pagar.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:w-[25vw] items-center justify-center bg-customDarkBlue p-4 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-customBackground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
            />
          </svg>

          <h3 className="text-customLightBlue text-xl font-bold">
            TAXAS VANTAJOSAS
          </h3>
          <p>
            A partir de{" "}
            <span className="text-customBackground text-2xl">1.09%</span>{" "}
            ao mês.
          </p>
        </div>
      </div>
    </div>
  </div>)
})

export default HomeEquity