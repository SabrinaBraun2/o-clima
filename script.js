const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é Edith, uma Jovem cientista ambiental de 25 anos que trabalha em um centro de pesquisa climática em Washington. Durante uma análise de dados, você descobre um padrão alarmante: as temperaturas estão subindo mais rápido do que o previsto, e uma grande seca está se aproximando. Você decide compartilhar suas descobertas com Addan, um colega de trabalho que sempre foi cético em relação às mudanças climáticas Addan olha para os dados e diz: 'Edith, isso pode ser apenas uma anomalia, você está se preocupado atoa, relaxa', e então você decide tomar uma alguma decisão.",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Se você escolheu continuar investigando,você descobre que a seca é apenas o começo de uma série de eventos climáticos extremos. Você decide tentar encontrar um jeito de tentar mudar hábitos ruins para ajudar o planeta. Se você escolheu alertar a comunidade, a noticia causa pânico e algumas pessoas começam a estocar agua e alimentos. A prefeitura decide organizar uma reunião para discutir o que pode ser feito, alguns protestos estão sendo organizado, o medo pode estar sendo espalhado.",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Se você escolheu focar na pesquisa, você descobre uma tecnologia inovadora que pode ajudar a mitigar os efeitos da seca, mas precisa convencer as autoridades a adotá-la quando tenta as autoridades não levam você a sério, te deixando frustrada. Se você escolheu liderar o grupo de trabalho, vocês começam a implementar medidas como a construção de reservatórios de água e campanhas de conscientização sobre o uso sustentável dos recursos.",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Se você escolheu usar a tecnologia em segredo, você descobre que ela funciona, mas perde o interesse que tinha antes na sua pesquisa para focas em outros assuntos pessoais. Se você escolheu apresentar a tecnologia, você consegue apoio e financiamento para implementá-la, mas enfrenta desafios técnicos resistência de alguns setores da comunidade.",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Independente das escolhas, Edith aprende muito sobre a importância da ação coletiva e da inovação na luta contra as mudanças climáticas. Ela percebe que suas escolhas não apenas afetam sua carreira, mas também o futuro de sua comunidade e do planeta.",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();


function mostraPergunta() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaAlternativas);
    }
 }

mostraPergunta();

}

mostraPergunta()