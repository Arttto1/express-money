import Image from "next/image";

export default function SvUm() {
  return (
    <>
      <article className="max-w-[80vw] mx-auto mt-4 bg-[#f8fbff] border-2 border-customLightBlue shadow-[6px_10px_20px_rgba(20,66,117,0.7)] mb-10 rounded-md p-4">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-lg text-center mb-4">
            Empréstimo com garantia de imóvel
          </h1>
          <div id="prazos" className="flex items-center mb-4 justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div>
                <h2 className="font-bold text-xl">Prazos mais longos</h2>
                <p>
                  Até{" "}
                  <span className="text-customLightBlue underline decoration-2">
                    240 meses
                  </span>{" "}
                  para pagar.
                </p>
                <p>
                  Crédito de <span className="font-bold">R$100 mil</span> a{" "}
                  <span className="font-bold">R$10 milhões</span>.
                </p>
              </div>
            </div>
          <p className="text-lg">
            Obtenha o crédito que você precisa com garantia de imóvel,
            oferecendo prazos flexíveis, condições vantajosas e um processo
            rápido. Transforme seu imóvel em um recurso para alcançar seus
            objetivos com taxas acessíveis e segurança.
          </p>
        </div>
        <div className="">
          <div
            id="vantagens"
            className=" border-2 border-customLightBlue rounded-2xl"
          >

            <div id="valores-maiores" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              <div>
                <h2 className="font-bold">Valores Maiores</h2>
                <p>
                  Consiga até{" "}
                  <span className="text-customLightBlue underline decoration-2">
                    50%
                  </span>{" "}
                  do valor do seu imóvel.
                </p>
              </div>
            </div>
            <div id="melhores-taxas" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                />
              </svg>
              <div>
                <h2 className="font-bold">Taxas Vantajosas</h2>
                <p>
                  A partir de{" "}
                  <span className="text-customLightBlue underline decoration-2">
                    1,09%
                  </span>{" "}
                  ao mês.
                </p>
              </div>
            </div>
          </div>
          {/* <div id="image" className="">
            <Image
              className="w-[200rem]"
              src="/images/undraw-pageone.svg"
              alt="Cliente feliz com a consultoria"
              width={1280}
              height={720}
            />
          </div> */}
        </div>
      </article>
      <h1>aa</h1>
    </>
  );
}
