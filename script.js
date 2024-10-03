const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é Edith, uma jovem cientista ambiental de 25 anos que trabalha em um centro de pesquisa climática em Washington. Durante uma análise de dados, você descobre um padrão alarmante: as temperaturas estão subindo mais rápido do que o previsto, e uma grande seca está se aproximando. Você decide compartilhar suas descobertas com Addan, um colega de trabalho que sempre foi cético em relação às mudanças climáticas Addan olha para os dados e diz: 'Edith, isso pode ser apenas uma anomalia, você está se preocupado atoa', e então você decide tomar uma alguma decisão.",
        alternativas: [
            {
                texto: " Você decide continuar investigando e reunir mais evidências antes de fazer um anúncio público.",
                afirmacao: ". "
            },
            {
                texto: "Você decide alertar a comunidade imediatamente, acreditando que é melhor prevenir do que remediar.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Se você escolheu continuar investigando,você descobre que a seca é apenas o começo de uma série de eventos climáticos extremos. Você decide tentar encontrar um jeito de tentar mudar hábitos ruins para ajudar o planeta. Se você escolheu alertar a comunidade, a noticia causa pânico e algumas pessoas começam a estocar agua e alimentos. A prefeitura decide organizar uma reunião para discutir o que pode ser feito, alguns protestos estão sendo organizado, o medo pode estar sendo espalhado.",
        alternativas: [
            {
                texto: "Você decide focar em sua pesquisa e deixar que as autoridades lidem com a situação.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Você decide liderar um grupo de trabalho para desenvolver um plano de ação contra a seca.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Se você escolheu focar na pesquisa, você descobre uma tecnologia inovadora que pode ajudar a mitigar os efeitos da seca, mas precisa convencer as autoridades a adotá-la quando tenta as autoridades não levam você a sério, te deixando frustrada. Se você escolheu liderar o grupo de trabalho, vocês começam a implementar medidas como a construção de reservatórios de água e campanhas de conscientização sobre o uso sustentável dos recursos.",
        alternativas: [
            {
                texto: ")Você decide usar a tecnologia em segredo para bem próprio, sua empatia tende a se transformar em egoismo",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Você decide apresentar a tecnologia inovadora em uma conferência para ganhar apoio",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Se você escolheu usar a tecnologia em segredo, você descobre que ela funciona, mas perde o interesse que tinha antes na sua pesquisa para focas em outros assuntos pessoais. Se você escolheu apresentar a tecnologia, você consegue apoio e financiamento para implementá-la, mas enfrenta desafios técnicos resistência de alguns setores da comunidade.",
        alternativas: [
            {
                texto: "Você decide formar parcerias com ONGs e empresas para implementar a tecnologia.",
                afirmacao: "."
            },
            {
                texto: "Você decide buscar financlamento através de crowdfunding e doações individuais.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Independente das escolhas, Edith aprende muito sobre a importância da ação coletiva e da inovação na luta contra as mudanças climáticas. Ela percebe que suas escolhas não apenas afetam sua carreira, mas também o futuro de sua comunidade e do planeta. ",
        alternativas: [
            {
                texto: "Edith decide continuar trabalhando em solucões climáticas se torna uma lider na area de sustentabilidade, e consegue assim fazer que mais pessoas se juntem a causa.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Edith decide abandonar o projeto, pois não acredita que conseguirá transformar a saúde do planeta.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();