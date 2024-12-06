import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
    },
  }
);

const database = async (data) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("Erro ao obter o usuário autenticado:", userError?.message);
    return;
  }

  const userId = user.id;
  const { description, propriedade, title, type } = data;
  const status_ticket = 1;

  try {
    const { data: response, error } = await supabase
      .from("Tickets")
      .insert([
        {
          assunto: title,
          descricao: description,
          status_ticket,
          propriedade: 1,
          user_id: userId,
          type_ticket: type,
        },
      ]);

    if (error) {
      console.error("Erro ao inserir no banco de dados:", error.message);
    } else {
      console.log("Inserção bem-sucedida:", response);
    }
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error.message);
  }
};


const getTickets = async () => {
  const { data: response, error } = await supabase.from("Tickets").select("*");
  return response;
};


export { database, getTickets };
