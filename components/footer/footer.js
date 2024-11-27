import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rounded-t-lg mt-8 pb-8 w-full bg-customDarkBlue">
      <div className="flex flex-col max-w-[80vw] m-auto px-4 sm:px-8 md:px-16">
        <div className="flex flex-col sm:flex-row items-start justify-between font-bold text-2xl">
          <Image
            src="/logo/express-money.png"
            alt="Express Money Logo"
            width={300}
            height={100}
            priority
            className="w-96 mx-auto sm:mx-0"
          />
          <div className="flex flex-col sm:flex-row items-start pt-4 gap-8 sm:gap-12 footer-text overflow-visible">
            <div className="text-lg text-gray-800 leading-5 mb-8 sm:mb-0">
              <h1 className="mb-2 uppercase font-bold text-customBackground">
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
            <div className="text-lg text-gray-800 leading-5">
              <h1 className="mb-2 uppercase font-bold text-customBackground">
                Empresa
              </h1>
              <ul>
                <li>
                  <Link href={"/"}>Quem Somos</Link>
                </li>
                <li>
                  <Link href={"/"}>Perguntas Frequentes</Link>
                </li>
                <li>
                  <Link href={"/"}>Política de Privacidade</Link>
                </li>
                <li>
                  <Link href={"/"}>Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-2 mt-2 border-customLightBlue" />
        <div className="leading-[0.85rem] text-xs text-gray-900">
          <p>
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
          <h2 className="text-base text-customLightBlue">
            © 2024 Express Money. Todos os direitos reservados.
          </h2>
        </div>
      </div>
    </footer>
  );
}
