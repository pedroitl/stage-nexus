const conversasIniciais = [
  {
    id: 1,
    nome: "Seu Jorge",
    foto: "../../assets/produtor-oportunidade/seuJorge.jpg",
    ultimaMensagem: "Perfeito, te envio os detalhes do show por aqui.",
    mensagens: [
      { id: 1, de: "me", texto: "Olá, tudo bem? Gostei bastante do seu perfil e do seu repertório de MPB." },
      { id: 2, de: "outro", texto: "Oi! Tudo ótimo, obrigado. Fico feliz pelo retorno." },
      { id: 3, de: "me", texto: "Estamos organizando alguns eventos em São Paulo e acho que você se encaixa bem." },
      { id: 4, de: "outro", texto: "Tenho interesse sim, só me avisar datas e horários que vejo minha agenda." },
      { id: 5, de: "me", texto: "Perfeito. Você tem disponibilidade para um show no próximo mês?" },
      { id: 6, de: "outro", texto: "Tenho sim, principalmente aos finais de semana." },
      { id: 7, de: "me", texto: "Perfeito, te envio os detalhes do show por aqui." },
    ],
  },
  {
    id: 2,
    nome: "Júlia Vocalist",
    foto: "../../assets/produtor-oportunidade/mulherAvatar2.webp",
    ultimaMensagem: "Perfeito, vou analisar com carinho e te respondo.",
    mensagens: [
      { id: 1, de: "outro", texto: "Oi! Eu vi que você trabalha com artistas gospel e gostaria de uma oportunidade." },
      { id: 2, de: "me", texto: "Oi, Júlia! Vi seu perfil e gostei bastante da sua voz." },
      { id: 3, de: "outro", texto: "Muito obrigada! Tenho material gravado em estúdio e alguns vídeos ao vivo." },
      { id: 4, de: "me", texto: "Você consegue me enviar esses materiais aqui pelo chat?" },
      { id: 5, de: "outro", texto: "Consigo sim, vou separar e te mandar ainda hoje." },
      { id: 6, de: "me", texto: "Ótimo, assim consigo entender melhor seu estilo e suas composições." },
      { id: 7, de: "outro", texto: "Acabei de te enviar alguns links e vídeos." },
      { id: 8, de: "me", texto: "Perfeito, vou analisar com carinho e te respondo." },
    ],
  },
  {
    id: 3,
    nome: "Madonna",
    foto: "../../assets/produtor-oportunidade/mulherAvatar1.jpg",
    ultimaMensagem: "Fechado, assim que tiver a data te aviso.",
    mensagens: [
      { id: 1, de: "me", texto: "Olá! Seu material de pop chamou bastante atenção aqui na produtora." },
      { id: 2, de: "outro", texto: "Sério? Que bom saber disso, obrigada pelo retorno!" },
      { id: 3, de: "me", texto: "Estamos estudando novos projetos com foco em grandes eventos e festivais." },
      { id: 4, de: "outro", texto: "Nossa, queria muito mais so que atualmente estou ocupada." },
      { id: 5, de: "me", texto: "Ok, então quando tiver com tempo me retorna." },
      { id: 6, de: "outro", texto: "Certo, pode ficar tranquilo." },
    ],
  },
  {
    id: 4,
    nome: "Wesley Safadão",
    foto: "../../assets/produtor-oportunidade/wesleyAvatar.jpg",
    ultimaMensagem: "Perfeito, vamos alinhando tudo por aqui.",
    mensagens: [
      { id: 1, de: "outro", texto: "Fala! Vi que você está produzindo alguns projetos de forró e sertanejo." },
      { id: 2, de: "outro", texto: "Se surgir algo que tenha a ver comigo, gostaria muito de participar." },
      { id: 3, de: "me", texto: "Oi! Seu nome já é bem forte na cena, com certeza podemos pensar em algo." },
      { id: 4, de: "me", texto: "Estamos estruturando uma nova turnê e especiais ao vivo." },
      { id: 5, de: "outro", texto: "Show demais! Se precisar de mim pra qualquer gravação ou participação, tô dentro." },
      { id: 6, de: "me", texto: "Ótimo, isso ajuda bastante. Vou te incluir nas opções para esses projetos." },
      { id: 7, de: "outro", texto: "Perfeito, é só me avisar que a gente organiza a agenda." },
      { id: 8, de: "me", texto: "Perfeito, vamos alinhando tudo por aqui." },
    ],
  },
];

function MensagemProdutor() {
  const [conversas, setConversas] = React.useState(conversasIniciais);
  const [conversaSelecionadaId, setConversaSelecionadaId] = React.useState(conversasIniciais[0].id);

  const [textoMensagem, setTextoMensagem] = React.useState("");

  const conversaSelecionada = conversas.find(
    (c) => c.id === conversaSelecionadaId
  );

  function EnviarMensagem() {
    const texto = textoMensagem.trim();
    if (!texto) return;

    const novaMensagem = {
      id: Date.now(),
      de: "me",
      texto: texto,
    };

    const novasConversas = conversas.map((conversa) => {
      if (conversa.id === conversaSelecionadaId) {
        return {
          ...conversa,
          mensagens: [...conversa.mensagens, novaMensagem],
          ultimaMensagem: texto,
        };
      }
      return conversa;
    });

    setConversas(novasConversas);
    setTextoMensagem("");

  }

  function Keydown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      EnviarMensagem();
    }
  }

  if (!conversaSelecionada) {
    return (
      <div className="chat-container">
        <div className="chat-sidebar">
          <h3 className="sidebar-title">Conversas</h3>

          <div className="sidebar-list">
            {conversas.map((conversa) => (
              <button
                key={conversa.id}
                className="sidebar-item"
                onClick={() => {
                  setConversaSelecionadaId(conversa.id);
                  if (window.innerWidth < 768) {
                    document.querySelector(".chat-sidebar").classList.add("hide-mobile");
                  }
                }}
              >
                <div className="sidebar-item-content">
                  <img src={conversa.foto} className="sidebar-item-img" />
                  <div className="sidebar-texts">
                    <div className="sidebar-item-name">{conversa.nome}</div>
                    <div className="sidebar-item-preview">{conversa.ultimaMensagem}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {!conversaSelecionada && (
          <div className="selecionar-msg">Selecione uma conversa</div>
        )}
      </div>
    );
  }


  return (
    <div className="chat-container">

      <div className={"chat-sidebar " + (window.innerWidth < 768 && conversaSelecionadaId !== null ? "hide-mobile" : "")}>
        <h3 className="sidebar-title">Conversas</h3>

        <div className="sidebar-list">
          {conversas.map((conversa) => (
            <button
              key={conversa.id}
              className={
                "sidebar-item " +
                (conversa.id === conversaSelecionadaId ? "sidebar-item-active" : "")
              }
              onClick={() => setConversaSelecionadaId(conversa.id)}
            >
              <div className="sidebar-item-content">
                <img src={conversa.foto} alt="" className="sidebar-item-img" />
                <div className="sidebar-texts">
                  <div className="sidebar-item-name">{conversa.nome}</div>
                  <div className="sidebar-item-preview">{conversa.ultimaMensagem}</div>
                </div>
              </div>

            </button>
          ))}
        </div>
      </div>

      <div className={`chat-area ${!conversaSelecionada ? "empty" : ""}`}>
        <div className="chat-header">
          {conversaSelecionadaId !== null && (
            <button
              className="btn-voltar"
              onClick={() => {
                setConversaSelecionadaId(null);
                document.querySelector(".chat-sidebar").classList.remove("hide-mobile");
              }}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
          )}

          <div className="chat-header-name">
            {conversaSelecionada.nome}
          </div>
        </div>

        <div className="chat-messages">
          {conversaSelecionada.mensagens.map((msg) => (
            <div
              key={msg.id}
              className={
                "msg " + (msg.de === "me" ? "msg-me" : "msg-other")
              }
            >
              <span className="msg-text">{msg.texto}</span>
            </div>
          ))}
        </div>

        <div className="chat-input-area">

          <i className="bi bi-image chat-icon"></i>
          <i className="bi bi-emoji-smile chat-icon"></i>

          <input
            type="text"
            placeholder="Digite uma mensagem..."
            className="chat-input"
            value={textoMensagem}
            onChange={(e) => setTextoMensagem(e.target.value)}
            onKeyDown={Keydown}
          />

          <i className="bi bi-mic chat-icon"></i>
          <button className="chat-send-btn" onClick={EnviarMensagem}>
            <i className="bi bi-send-fill"></i>
          </button>
        </div>

      </div>
    </div>
  );
}

ReactDOM.render(
  <MensagemProdutor />,
  document.getElementById("mensagem-produtor")
);