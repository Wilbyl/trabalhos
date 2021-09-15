class Base {
    constructor(nome, vida, dano) {
      this.Nome = nome;
      this.Dano = dano;
      this.Vida = vida;
    }
  
    atacar(oponente, dano) {
      oponente.Vida -= dano;
    }
  }
  
  class Jogador extends Base {
    constructor(nome, vida, dano, classe, ataques) {
      super(nome, vida, dano);
      this.Classe = classe;
      this.Ataques = ataques;
    }
  
    critico() {
      return Math.floor(Math.random() * (1000 - 0) + 0);
    }
  }
  
  class Oponente extends Base {
    constructor(nome, vida, dano) {
      super(nome, vida, dano);
    }
  }
  
  function linha(quantidade) {
    let Linha = "#";
    while (Linha.length < quantidade) {
      Linha += "#";
    }
    console.log(`${Linha}`.yellow);
  }
  
  function validarNome(nome) {
    while (nome.length < 4) {
      nome = prompt("Digite um nome para seu Personagem: ");
    }
    return nome;
  }
  
  function validarRespostaNumero(resposta) {
    while (resposta < 0 || resposta > 2 || resposta == " " || isNaN(resposta)) {
      resposta = parseInt(prompt("Escolha: "));
    }
    return resposta;
  }
  
  function validarRespostaTexto(resposta, texto) {
    while (resposta[0].toUpperCase() != "S" && resposta[0].toUpperCase() != "N") {
      resposta = prompt(texto);
    }
    return resposta;
  }
  
  function ataque(jogador, nomeGrupo, tamanhoGrupo, vida, dano, grupo) {
    linha(170);
    console.log(
      `Você encontra um pequeno grupo contendo ${tamanhoGrupo} ${nomeGrupo}.`
    );
    console.log(`Descrição dos ${nomeGrupo}: `);
    console.log(`${grupo.descricao}`.blue);
    console.log(`${grupo.sobre}`.blue);
    console.log("Existe chance de conseguir alguma coisa se você os derrotar");
  
    atacar = validarRespostaTexto("A", "Você deseja ataca-lós? [S/N] ");
  
    if (atacar[0].toUpperCase() == "S") {
      let grupo = new Oponente(nomeGrupo, vida, dano);
      while (jogador.Vida > 0 && grupo.Vida > 0) {
        jogador.atacar(grupo, jogador.Dano + jogador.critico());
        console.log(`O jogador causa ${jogador.Dano} dano.`.green);
        if (grupo.Vida > 0) {
          grupo.atacar(jogador, grupo.Dano);
          console.log(`${nomeGrupo} ${grupo.Dano} dano.`.red);
        }
        if (jogador.Vida < 0) {
          console.log("Você morreu!!".red);
          return true;
        }
        console.log(`Vida do jogador: ${jogador.Vida}.`.green);
      }
    }
    linha(170);
  }
  
  function itensPoder() {
    return Math.floor(Math.random() * (1000 - 0) + 0);
  }
  
  function itens(jogador, jogadorClasse, nomeGrupo) {
    if (atacar[0].toUpperCase() == "S") {
      console.log(
        `Depois de derrotar os ${nomeGrupo} você encontra no meio deles alguns equipamentos.`
      );
      if (jogador.Classe == "Arqueiro") {
        let arco = itensPoder();
        console.log(
          `Você acha um arco melhor que o seu atual aumentando seu dano em ${arco}`
        );
        pegar = validarRespostaTexto("a", "Você deseja pegar? [S/N] ");
        if (pegar[0].toUpperCase() == "S") {
          jogador.dano += arco;
        }
        let roupa = itensPoder();
        console.log(
          `Você também acha uma roupa que aumentaria sua vida em ${roupa} mais diminuirá sua velocida em 5%`
        );
        pegar = validarRespostaTexto("a", "Você deseja pegar? [S/N] ");
        if (pegar[0].toUpperCase() == "S") {
          jogador.vida += roupa;
        }
      } else if (jogadorClasse == "Guerreiro") {
        let espada = itensPoder();
        console.log(
          `Você acha uma espada mais afida que a sua que aumentará seu dano em ${espada}`
        );
        pegar = validarRespostaTexto("a", "Você deseja pegar? [S/N] ");
        if (pegar[0].toUpperCase() == "S") {
          jogador.dano += espada;
        }
        let armadura = itensPoder();
        console.log(
          `Você também encontra uma armadura mais dura e forte que a sua que irá aumenta sua vida em ${armadura} mas você ficará 15% mais lento`
        );
        pegar = validarRespostaTexto("a", "Você deseja pegar? [S/N] ");
        if (pegar[0].toUpperCase() == "S") {
          jogador.vida += armadura;
        }
      } else {
        let cajado = itensPoder();
        console.log(
          `Você acha uma cajado mais forte que o seu que aumentará seu dano em ${cajado}`
        );
        pegar = validarRespostaTexto("a", "Você deseja pegar? [S/N] ");
        if (pegar[0].toUpperCase() == "S") {
          jogador.dano += cajado;
        }
        let veste = itensPoder();
        console.log(
          `Você também encontra uma veste com mais mágia que a sua que irá aumenta sua vida em ${veste} mas você ficará com 15% a menos de defesa`
        );
        pegar = validarRespostaTexto("a", "Você deseja pegar? [S/N] ");
        if (pegar[0].toUpperCase() == "S") {
          jogador.vida += veste;
        }
      }
    }
  }
  
  function ganharVida(jogador, vida) {
    console.log(`Você consegue ${vida}`);
    jogador.Vida += vida;
  }
  
  var prompt = require("prompt-sync")();
  var colors = require("colors");
  const classes = [
    {
      nome: "Arqueiro",
      dano: 250,
      vida: 2200,
      descricao: "Defesa: Média, Dano: Médio, Velocidade: Muito Alta",
      ataques: {
        chuvaDeFlechas: {
          nome: "Chuva de Flechas",
          dano: 170,
          usar: true,
        },
        flechaExplosiva: {
          nome: "Flecha Explosiva",
          dano: 250,
          usar: true,
        },
      },
    }, // media defesa, medio dano, rapido // chuva de flechas, flecha explisiva
    {
      nome: "Guerreiro",
      dano: 200,
      vida: 2500,
      descricao: "Defesa: Muito Alta, Dano: Médio, Velocidade: Lenta",
      ataques: {
        corteSeparador: {
          nome: "Corte Separador",
          dano: 170,
          usar: true,
        },
        golpeHeroico: {
          nome: "Golpe Heroico",
          dano: 200,
          usar: true,
        },
      },
    }, // alta defesa, dano medio, lento // golpe heroico, corte separador, pancada potente
    {
      nome: "Mago",
      dano: 400,
      vida: 2000,
      descricao: "Defesa: Baixa, Dano: Muito alto, Velocidade: Média",
      ataques: {
        congelar: {
          nome: "Congelar",
          dano: 250,
          usar: true,
        },
        bolaDeFogo: {
          nome: "Bola de Fogo",
          dano: 400,
          usar: true,
        },
      },
    }, // alto dano, baixa defesa, medio // congelar, bola de fogo
  ];
  
  const herege = {
    sobre: "Defesa: Baixa, Dano: Baixo, Velocidade: Média",
    descricao:
      "Os Hereges foram corrompidos gravemente por efeitos colaterais mágicos, são estremamentes burros.",
  };
  const esqueleto = {
    sobre: "Defesa: Média, Dano: Médio, Velocidade: Baixa",
    descricao:
      "Os mortos de Albion raramente continuam mortos por muito tempo. São seres mais inteligentes que os hereges mas lentos.",
  };
  const protetores = {
    sobre: "Defesa: Alta, Dano: Alto, Velocidade: Média",
    descricao:
      "Nas profundezas das florestas vivem os mais antigos habitantes, os Protetores. São seres antigos e enormes, são capazes de causar enorme dano, mais não são rápidos. Eles odeam humanos, eles tentaram o matar de qualquer forma",
  };
  const discipulosMorgana = {
    sobre: "Defesa: Média, Dano: Muito Alto, Velocidade: Média",
    descricao:
      "Morgana, uma feiticeira outrora muito poderosa, enfraqueceu-se após uma batalha cataclísmica com Merlin no fim da Grande Guerra. Contudo, seus devotados discípulos ainda vagam pela terra, carregando seu estandarte em nome do mal, da devastação... e da vingança. São seres com alto ataque e alta inteligicia, mas não possuem boa defesa.",
  };
  const avalonianos = {
    sobre: "Defesa: Muito Alta, Dano: Muito Alto, Velocidade: Muito Alta",
    descricao:
      "Os Avalonianos eram uma facção orgulhosa e antiga, eles aprenderem o poder da terra através de tentativa e erro, infundindo suas ferramentas, bestas e até a si mesmos com mágica. são estremamente fortes, rápidos com altas defesas",
  };
  
  var atacar;
  let pegar;
  let resultado;
  let vida;
  let contador = 0;
  
  while (true) {
    linha(170);
    console.log("O nome do seu personagem deve ter pelo menos 4 letras.");
    let jogadorNome = validarNome("");
    console.log("Classes");
    linha(170)
  
    for (let j in classes) {
      console.log(`Opção [ ${contador} ]`)
      console.log(
        `Nome: ${classes[j].nome}\nVida: ${classes[j].vida}\nDano Máximo: ${classes[j].dano}\nAtaques:`
      );
      for (let i in classes[j].ataques) {
        console.log(`Nome Ataque: ${classes[j].ataques[i].nome}`);
        console.log(`Dano: ${classes[j].ataques[i].dano}`);
      }
      contador++
      linha(170)
    }
    let jogadorClasse = validarRespostaNumero(" ");
  
    let jogador = new Jogador(
      jogadorNome,
      classes[jogadorClasse].vida,
      classes[jogadorClasse].dano,
      classes[jogadorClasse].nome,
      classes[jogadorClasse].ataques
    );
  
    resultado = ataque(jogador, "Herege", 5, 600, 250, herege);
    if (resultado == true) {
      break;
    } else {
      itens(jogador, jogadorClasse, "herege");
    }
    vida = ganharVida();
    console.log(`Você ganha ${vida} de vida`.green);
    jogador.Vida += vida;
  
    resultado = ataque(jogador, "Esqueletos", 5, 900, 475, esqueleto);
    if (resultado == true) {
      break;
    } else {
      itens(jogador, jogadorClasse, "esqueleto");
    }
    vida = ganharVida();
    console.log(`Você ganha ${vida} de vida`);
    jogador.Vida += vida;
  
    resultado = ataque(jogador, "Protetores", 5, 1400, 600, protetores);
    if (resultado == true) {
      break;
    } else {
      itens(jogador, jogadorClasse, "Protetores");
    }
    vida = ganharVida();
    console.log(`Você ganha ${vida} de vida`);
    jogador.Vida += vida;
  
    resultado = ataque(
      jogador,
      "Díscipulos de morgana",
      5,
      1200,
      1500,
      discipulosMorgana
    );
    if (resultado == true) {
      break;
    } else {
      itens(jogador, jogadorClasse, "díscipulos de morgana");
    }
    vida = ganharVida();
    console.log(`Você gan ha ${vida} de vida`);
    jogador.Vida += vida;
  
    console.log("Você agora encontra o ser forte da sua jornada".magenta);
  
    resultado = ataque(
      jogador,
      "Avalonianos",
      1,
      4000,
      2500,
      avalonianos,
      classes
    );
    if (resultado == true) {
      break;
    }
    break;
  }
  
  if (resultado == true) {
    console.log("Que pena, você não conseguiu concluir sua jornada.");
  } else {
    console.log("Parabens você chegou ao fim da sua jornada!!!");
  }