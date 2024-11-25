import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-customDarkBlue">
      <div className="flex flex-col max-w-[80vw] m-auto">
        <div className="flex items-center font-bold text-2xl">
          <Image
            src="/logo/express-money.png"
            alt="Express Money Logo"
            width={300}
            height={100}
            priority
            className="w-96"
          />
          <div>
            <h1 className="uppercase font-bold text-customBackground">
              Produtos
            </h1>

            <ul>
              <li>
                <Link href={"/"}>Empréstimo com Garantia de Imóvel</Link>
              </li>
              <li>
                <Link href={"/"}>Financiamento de Veículos</Link>
              </li>
              <li>
                <Link href={"/"}>Financiamento Imobiliário</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase font-bold text-customBackground">
              empresa
            </h1>
            <ul>
              <li>
                <Link href={"/"}>Quem Somos</Link>
              </li>
              <li>
                <Link href={"/"}>Perguntas Frequentes</Link>
              </li>
              <li>
                <Link href={"/"}>Contato</Link>
              </li>
              <li>
                <Link href={"/"}>Política de Privacidade</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lead-5">
          <p className="text-sm">
            A Express Money não é uma instituição financeira e não realiza
            concessão direta de empréstimos.
          </p>
          <p>
            A Express Money Intermediações em Negócios LTDA, inscrita no CNPJ
            08.417.424/0001-68, atua atualmente como correspondente bancário, em
            conformidade com as normas estabelecidas pelo Banco Central do
            Brasil (BACEN), nos termos da Resolução nº 3.954, de 24 de fevereiro
            de 2011. Estamos devidamente registrados como correspondentes de
            instituições financeiras autorizadas pelo BACEN a operar no mercado
            de crédito imobiliário.
          </p>
          <p>
            Não exigimos qualquer tipo de pagamento ou depósito antecipado para
            a análise ou aprovação de empréstimos.
          </p>
        </div>
      </div>
    </footer>
  );
}
