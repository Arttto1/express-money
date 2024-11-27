import xss from "xss"
import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const body = await req.json()

    const sanitizedData = {
      nome: xss(body.nome),
      sobrenome: xss(body.sobrenome),
      email: xss(body.email),
      telefone: xss(body.telefone),
      mensagem: xss(body.mensagem),
    };

    console.log("Dados recebidos:", sanitizedData);

    const transporter = nodemailer.createTransport({
      service: "gmail", // Se você usar o Gmail ou outro serviço de e-mail
      auth: {
        user: "robotnivel@gmail.com", // E-mail de origem (ex: "seuemail@gmail.com")
        pass: "yuso latk rgpn ktum"
      },
    });

    await transporter.sendMail({
      from: "robotnivel@gmail.com",
      to: "robotnivel@gmail.com",
      subject: `Mensagem de ${sanitizedData.nome} ${sanitizedData.sobrenome}`, // Assunto do e-mail
      text: `
        Nome: ${sanitizedData.nome} ${sanitizedData.sobrenome}
        E-mail: ${sanitizedData.email}
        Telefone: ${sanitizedData.telefone}
        Mensagem: ${sanitizedData.mensagem}
      `, // Corpo do e-mail (mensagem do formulário)
    });

    return new Response(
      JSON.stringify({ success: true, message: "Formulário enviado com sucesso!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);

    // Retorne um objeto Response com status 500 em caso de erro
    return new Response(
      JSON.stringify({ error: "Ocorreu um erro ao processar o formulário." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}