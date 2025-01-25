import Image from "next/image";

export default function Parceiros() {
  return (
    <div className="mt-20">
      <h1 className="lg:text-4xl text-2xl text-center font-bold text-customDarkBlue uppercase">
        NOSSOS PARCEIROS
      </h1>
      <div className="flex justify-center gap-8 lg:max-w-[80vw] max-w-[90vw] mx-auto">
        <div className="my-auto">
          <div className="grid justify-center items-center grid-cols-3 gap-6">
            <Image
              src={"/parceiros/daycoval.png"}
              alt="daycoval bank logo for partners section"
              width={250}
              height={100}
            ></Image>
            <Image
              src={"/parceiros/casanet.png"}
              alt="casanet bank logo for partners section"
              width={250}
              height={100}
            ></Image>
            <Image
              src={"/parceiros/santander.svg"}
              alt="santander logo for partners section"
              width={250}
              height={100}
            ></Image>
            <Image
              src={"/parceiros/inter.svg"}
              alt="inter logo for partners section"
              width={100}
              height={100}
              className="m-auto lg:w-[100px] w-[50px] "
            ></Image>
            <Image
              src={"/parceiros/rodobens.png"}
              alt="rodobens logo for partners section"
              width={250}
              height={100}
              layout="intrinsic"
            ></Image>
            <Image
              src={"/parceiros/itau.svg"}
              alt="itau logo for partners section"
              width={100}
              height={100}
              className="m-auto lg:w-[100px] w-[50px] "
            ></Image>
            <Image
              src={"/parceiros/c6.png"}
              alt="c6 logo for partners section"
              width={150}
              height={30}
              layout="intrinsic"
              className="m-auto lg:w-[150px] w-[75px] "
            ></Image>
            <Image
              src={"/parceiros/galeria-bank.png"}
              alt="galeria bank logo for partners section"
              width={150}
              height={100}
              className="m-auto lg:w-[150px] w-[75px] "
            ></Image>
            <Image
              src={"/parceiros/cashme.svg"}
              alt="cashme logo for partners section"
              width={150}
              height={100}
              className="m-auto lg:w-[150px] w-[75px]"
            ></Image>
          </div>
        </div>

        <Image
          src={"/parceiros/parceiros.svg"}
          alt="partners image for partners section"
          width={300}
          height={300}
          layout="intrinsic"
          className="hidden lg:block"
        ></Image>
      </div>
    </div>
  );
}
