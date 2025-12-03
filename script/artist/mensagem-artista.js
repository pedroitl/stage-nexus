

const conversasIniciais = [
  {
    id: 1,
    nome: "WS shows",
    foto: "../../assets/mensagem/wsShow.jpg",
    ultimaMensagem: "Ótimo! Vamos marcar um ensaio então",
    mensagens: [
      { id: 1, de: "outro", texto: "Oi! Vi que você se candidatou para oportunidade de cantor de forró" },
      { id: 2, de: "me", texto: "Sim! Tenho muito interesse em participar" },
      { id: 3, de: "outro", texto: "Você tem disponibilidade para fazer um teste?" },
      { id: 4, de: "me", texto: "Tenho sim! Pode ser essa semana?" },
      { id: 5, de: "outro", texto: "Ótimo! Vamos marcar um ensaio então" },
    ],
  },
  {
    id: 2,
    nome: "Kondzilla",
    foto: "../../assets/mensagem/kondZila.jpg",
    ultimaMensagem: "Obrigada pelo interesse! Vou enviar mais detalhes.",
    mensagens: [
      { id: 1, de: "outro", texto: "Obrigada pelo interesse! Vou enviar mais detalhes." },
    ],
  },
  {
    id: 3,
    nome: "MK music",
    foto:"../../assets/mensagem/MKmusic.png",
    ultimaMensagem: "Show! Confirmo presença para o evento",
    mensagens: [
      { id: 1, de: "outro", texto: "Show! Confirmo presença para o evento" },
    ],
  },
  {
    id: 4,
    nome: "Work Show",
    foto:"../../assets/mensagem/workShow.jpg",
    ultimaMensagem: "otimo! vamos marca a entrevista.",
    mensagens: [
      { id: 1, de: "outro", texto: "Otimo! vamos marca a entrevista." },
    ],

  },
  {
    id: 5,
    nome: "Univesal",
    foto:"../../assets/mensagem/universal.jpg",
    ultimaMensagem: "ok! mau vejo a hora.",
    mensagens: [
      { id: 1, de: "outro", texto: "ok! mau vejo a hora." },
    ],

  },
  {
    id: 6,
    nome: "GR6 explode",
    foto:"../../assets/mensagem/gr6.jpg",
    ultimaMensagem: "e isso ai, confiança que vai da certo.",
    mensagens: [
      { id: 1, de: "outro", texto: "e isso ai, confiança que vai da certo." },
    ],

  },
  {
    id: 7,
    nome: "Som Livre",
    foto:"../../assets/mensagem/Logo_of_Som_Livre_(2009).svg",
    ultimaMensagem: "Oi! Vamos marca a entrevista.",
    mensagens: [
      { id: 1, de: "outro", texto: "Oi! Vamos marca a entrevista." },
    ],

  },
];

function MensagemArtista() {
  const [conversas, setConversas] = React.useState(conversasIniciais);
  const [conversaSelecionadaId, setConversaSelecionadaId] = React.useState(conversasIniciais[0].id);

  const [textoMensagem,  setTextoMensagem] = React.useState("");

  const conversaSelecionada = conversas.find(
    (c) => c.id === conversaSelecionadaId
  );

  function EnviarMensagem(){
    const texto = textoMensagem.trim();
    if (!texto) return;

    const novaMensagem = {
    id: Date.now(),
    de: "me",
    texto: texto,
  };

  const novasConversas = conversas.map((conversa)=>{
    if(conversa.id === conversaSelecionadaId){
      return {
        ...conversa,
        mensagens: [...conversa.mensagens, novaMensagem],
        ultimaMensagem:texto,
      };
    }
    return conversa;
  });

  setConversas(novasConversas);
  setTextoMensagem("");

  }

  function Keydown(e){
    if(e.key === "Enter"){
      e.preventDefault();
      EnviarMensagem();
    }
  }

  return (
    <div className="chat-container">

      <div className="chat-sidebar">
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
                  <img src={conversa.foto} alt="" className="sidebar-item-img"/>
                <div className="sidebar-texts">
                  <div className="sidebar-item-name">{conversa.nome}</div>
                <div className="sidebar-item-preview">{conversa.ultimaMensagem}</div>
                  </div>
              </div>
              
            </button>
          ))}
        </div>
      </div>

      <div className="chat-area">

        <div className="chat-header">
          <div className="chat-header-name">{conversaSelecionada.nome}</div>
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
  <MensagemArtista />,
  document.getElementById("mensagem-artista")
);