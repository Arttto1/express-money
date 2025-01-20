export default function Construcao() {
  return (
    <div>
      <h2 className="text-customGreen lg:text-3xl font-bold text-center mb-4">
        Empréstimo para construção
      </h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 lg:w-[28vw] items-center justify-center bg-customDarkBlue p-4 rounded-lg shadow-md">
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
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <h3 className="text-customLightBlue text-xl font-bold">
            TERRENO COMO GARANTIA
          </h3>
          <div className="lg:text-xl text-center">
            <p>Utilize o seu terreno como garantia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
