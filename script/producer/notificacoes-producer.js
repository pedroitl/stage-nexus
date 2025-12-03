

const notificacoes = [
    { id: 1, lida: false, tipo: "bi-heart", texto: <p><strong>Maria Souza</strong> curtiu seu post: <em>"Novo cover postado!"</em></p>, tempo: "2h atrás" },
    { id: 2, lida: true,  tipo: "bi-chat",  texto: <p><strong>João Victor</strong> comentou: <em>"Mano, que voz incrível! 🔥"</em></p>, tempo: "4h atrás" },
    { id: 3, lida: false, tipo: "bi-briefcase", texto: <p>Nova oportunidade compatível com seu perfil: <strong>"Vocalista para banda pop"</strong></p>, tempo: "Ontem" },
    { id: 4, lida: true,  tipo: "bi-patch-check", texto: <p>Sua inscrição para a oportunidade <strong>"Show acústico no Bar Eclipse"</strong> foi <strong>ACEITA</strong>!</p>, tempo: "Ontem" }
];

function Notificacoes() {
    const [filtro, setFiltro] = React.useState("todas");

    const filtradas = notificacoes.filter(n =>
        filtro === "todas" ? true : !n.lida
    );

    return (
        <div>
            <h3>Notificações</h3>
            <div className="filtro-notificacao">
                <button onClick={() => setFiltro("todas")}
                    className={filtro === "todas" ? "ativo" : ""}>Todas
                </button>

                <button onClick={() => setFiltro("nao-lidas")}
                    className={filtro === "nao-lidas" ? "ativo" : ""}>Não lidas
                </button>
            </div>

            <div className="lista-notificacoes">
                {filtradas.map(n => (
                    <div key={n.id} className={`pop-up-notificacao ${!n.lida ? "nao-lida" : ""}`}>

                        <div className="icone"><i className={`bi ${n.tipo}`}></i></div>

                        <div className="conteudo"> {n.texto} <span className="tempo">{n.tempo}</span> </div>
                    </div>))
                }
            </div>
        </div>
    );
}

ReactDOM.render(
    <div className="sidebar-notificacoes">
        <Notificacoes />
    </div>,
    document.getElementById("notificacoes-producer")
);