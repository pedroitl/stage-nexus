ReactDOM.render(
    <div className="menu-suspenso-producer">
        <div className="logo-busca">
            <div className="logo">
                <a href="/pages/producer/feed-producer.html"><img src="/assets/logotipo-branco.png" alt=""></img></a>
            </div>
            <div className="busca">
                <input placeholder="Buscar perfis..."></input>
                <a href="../../pages/producer/busca-producer.html"><i class="bi bi-search"></i></a>
            </div>
            <button id="btn-menu" className="hamburguer">
                <i className="bi bi-list"></i>
            </button>
        </div>
        <div className="barra-logout">
            <div className="barra-tarefas">
                <a href="/pages/producer/feed-producer.html" className="feed"><i class="bi bi-house"></i></a>
                <a href="/pages/producer/oportunidade-producer.html" className="oportunidade"><i class="bi bi-briefcase"></i></a>
                <a href="/pages/producer/notificacoes-producer.html" className="notificacao"><i class="bi bi-bell"></i></a>
                <a href="/pages/producer/mensagens-producer.html" className="mensagem"><i class="bi bi-chat"></i></a>
                <a href="/pages/producer/perfil-producer.html" className="perfil"><i class="bi bi-person"></i></a>
            </div>
            <div className="logout">
                <a href="../../index.html"><i class="bi bi-box-arrow-right"></i></a>
            </div>
        </div>
        <div id="menu-mobile" className="menu-mobile escondido">
            <a href="/pages/producer/feed-producer.html">Home</a>
            <a href="/pages/producer/oportunidade-producer.html">Oportunidades</a>
            <a href="/pages/producer/notificacoes-producer.html">Notificações</a>
            <a href="/pages/producer/mensagens-producer.html">Mensagens</a>
            <a href="/pages/producer/perfil-producer.html">Perfil</a>
            <a href="../../index.html">Logout</a>
        </div>
    </div>,
    document.getElementById("menu-suspenso-producer")
)