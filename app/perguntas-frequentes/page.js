import Link from "next/link";
import Image from "next/image";


export default function FAQPage() {
  return (
    <>
      <header className="relative w-full h-[50vh]">
      <Image
            className="w-full h-full rounded-b-xl object-cover object-center  "
            src={"/images/faq-image1.webp"}
            alt="sunset image for faq page"
            width={1268.8}
            height={472.73}
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start gap-4 px-8 lg:px-16 bg-black/30">
          <h1>Perguntas Frequentes</h1>
          <p>Quer que alguma dúvida específica seja respondida? <br />
          Entre em contato!
          </p>
          <Link href={"/"}>Página de Contato</Link>
          </div>
      </header>
      <section
        id="faq"
        className="flex flex-col max-w-[90vw] lg:max-w-[70vw] mt-8 gap-8 m-auto"
      >
        {/* Título */}
        <h1 className="text-2xl lg:text-3xl font-bold text-center uppercase text-customDarkBlue">
          Perguntas Frequentes (FAQ)
        </h1>

        {/* Lista de Perguntas */}
        <div className="flex flex-col gap-6">
          {/* Pergunta com texto simples */}
          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Qual o prazo de pagamento dos empréstimos?
            </h2>
            <p className="text-base text-gray-100">
              Os prazos de pagamento dependem do perfil de cada cliente. Nosso
              prazo máximo é de 240 meses, porém, está condicionado ao perfil de
              crédito do cliente.
            </p>
          </article>

          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Posso quitar o empréstimo quando quiser?
            </h2>
            <p className="text-base text-gray-100">
              Sim. O empréstimo pode ser quitado a qualquer momento.
            </p>
          </article>

          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Preciso pagar alguma taxa antecipada para a Express Money?
            </h2>
            <p className="text-base text-gray-100">
              Não. A Express Money não exige nenhum pagamento antecipado de seus
              clientes.
            </p>
          </article>

          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Se meu crédito não for aprovado, terei que pagar alguma taxa?
            </h2>
            <p className="text-base text-gray-100">
              Não. Caso o crédito não seja aprovado, você não será cobrado por
              nenhum tipo de taxa.
            </p>
          </article>

          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Qual é a taxa de juros aplicada aos empréstimos?
            </h2>
            <p className="text-base text-gray-100">
              As taxas de juros variam de acordo com o perfil do cliente. O
              valor exato será informado após a análise completa dos documentos.
              As taxas iniciais começam a partir de 0,75% ao mês.
            </p>
          </article>

          {/* Pergunta com lista (evitando aninhamento inválido) */}
          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              O que é analisado para que eu consiga crédito com garantia?
            </h2>
            <p className="text-base text-gray-100">
              Para ter acesso a esse tipo de crédito, é exigida a comprovação de
              renda, além dos seguintes itens:
            </p>
            <ul className="list-disc list-inside mt-2 text-base text-gray-100">
              <li>
                <span className="font-bold">Perfil financeiro:</span> Avaliação
                se o cliente terá condições de arcar com os custos sem se
                prejudicar.
              </li>
              <li>
                <span className="font-bold">SCORE no Serasa:</span> Saúde
                financeira, endividamento e comprometimento de renda a longo
                prazo.
              </li>
            </ul>
          </article>

          {/* Pergunta maior */}
          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Posso pegar empréstimo com o mesmo valor do imóvel?
            </h2>
            <p className="text-base text-gray-100">
              Não, mas vamos explicar. Veja só:
              <br />
              O Home Equity (financiamento com imóvel em garantia) é uma
              modalidade de crédito na qual o imóvel é apenas um meio para se
              ter acesso a uma taxa de juros reduzida e prazo estendido, diante
              das demais linhas de crédito oferecidas no mercado.
              <br />
              Por isso, o valor máximo para empréstimo pode chegar a 60% do
              valor do seu bem.
            </p>
          </article>

          {/* Última pergunta com mais explicações */}
          <article className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-customDarkBlue mb-2">
              Que tipo de registro é feito no imóvel?
            </h2>
            <p className="text-base text-gray-100">
              Aqui no Brasil, atuamos apenas com alienação fiduciária, operação
              na qual o imóvel fica alienado junto à instituição financeira.
              Durante o prazo contratado de financiamento, o percentual máximo
              permitido é de até 60% do valor avaliado do imóvel.
            </p>
          </article>
        </div>

        {/* Link para mais informações */}
        <Link
          href="/"
          className="font-bold text-lg w-fit m-auto rounded-full border-[3px] border-customGreen px-6 py-3 text-customGreen hover:bg-customGreen hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300"
        >
          Voltar à Página Inicial
        </Link>
      </section>
    </>
  );
}
