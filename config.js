/* ============================================================
   CONFIGURAÇÃO DO SITE DA TURMA
   Edite SÓ as duas primeiras linhas (entre as aspas) com os
   dados do seu projeto Supabase. Passo 6 do passo-a-passo.html.
   ============================================================ */
const SB_URL = "https://beoekvujovewfbeucwha.supabase.co";   // exemplo: https://abcdefgh.supabase.co
const SB_KEY = "sb_publishable__5r_MCcEm-q3yk2agxDqzQ_G-qA3-Em";    // chave "anon" ou "publishable" (NUNCA a "secret" / "service_role")

// Usuário do administrador: na página admin.html você digita só "admin".
// Por trás, o Supabase usa este e-mail (o mesmo do passo 12 do passo-a-passo.html).
// A SENHA nunca fica neste arquivo: ela só existe no Supabase.
const ADMIN_EMAIL = "admin@turma-ete.com";

// Dia 1 do cronograma, no formato ano-mês-dia.
const DATA_INICIO = "2026-10-13";

// Textos padrão dos dias: [Matemática, Português]. Você pode mudar qualquer dia
// pela página admin.html, sem mexer aqui.
const DIAS_PADRAO = [
  ["Quatro operações e problemas", "Ideias principais e secundárias"],
  ["Frações (1): simplificar, somar e subtrair", "Gêneros e sequências discursivas"],
  ["Frações (2): multiplicar e dividir", "Sinonímia, antonímia e ambiguidade"],
  ["Números decimais", "Homonímia, paronímia, polissemia e polifonia"],
  ["Potenciação", "Conotação e figuras de linguagem"],
  ["Raiz quadrada e expressões com números reais", "Linguagem do texto literário"],
  ["Reforço da semana 1", ""],
  ["Sistemas de medidas", "Treino de interpretação (1)"],
  ["Razão e proporção", "Coesão e coerência"],
  ["Regra de três simples", "Paráfrase, paródia e alusão"],
  ["Porcentagem (1)", "Intertextualidade e hipertextualidade"],
  ["Porcentagem (2)", "Classes gramaticais (1)"],
  ["Regra de três composta", "Classes gramaticais (2)"],
  ["Reforço da semana 2", ""],
  ["Divisão proporcional", "Termos da oração (1)"],
  ["Médias", "Termos da oração (2)"],
  ["Equações do 1º grau", "Coordenação e subordinação (1)"],
  ["Sistemas lineares", "Coordenação e subordinação (2)"],
  ["Polinômios", "Pontuação"],
  ["Produtos notáveis", "Treino de interpretação (2)"],
  ["Reforço da semana 3", ""],
  ["Fatoração", "Concordância"],
  ["Radiciação", "Regência"],
  ["Ângulos", "Estrutura e formação das palavras"],
  ["Polígonos", "Norma padrão e variedades da língua"],
  ["Triângulos e Lei angular de Tales", "Treino de interpretação (3)"],
  ["Semelhança de triângulos e cevianas", "Treino de interpretação (4)"],
  ["Simulado final", ""],
  ["Véspera: revisão leve", ""]
];
