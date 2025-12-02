ReactDOM.render(
    <div className="menu-suspenso">
        <div className="logo-busca">
            <div className="logo">
                <a href="/pages/artist/feed-artist.html"><img src="/assets/logotipo-branco.png" alt=""></img></a>
            </div>
            <div className="busca">
                <input placeholder="Buscar perfis..."></input>
                <a href="../../pages/artist/busca-artist.html"><i class="bi bi-search"></i></a>
            </div>
            <button id="btn-menu" className="hamburguer">
                <i className="bi bi-list"></i>
            </button>
        </div>
        <div className="barra-logout">
            <div className="barra-tarefas">
                <a href="/pages/artist/feed-artist.html" className="feed"><i class="bi bi-house"></i></a>
                <a href="/pages/artist/oportunidade-artist.html" className="oportunidade"><i class="bi bi-briefcase"></i></a>
                <a href="/pages/artist/notificacoes-artist.html" className="notificacao"><i class="bi bi-bell"></i></a>
                <a href="/pages/artist/mensagens-artist.html" className="mensagem"><i class="bi bi-chat"></i></a>
                <a href="/pages/artist/perfil-artist.html" className="perfil"><i class="bi bi-person"></i></a>
            </div>
            <div className="logout">
                <a href="/pages/login.html"><i class="bi bi-box-arrow-right"></i></a>
            </div>
        </div>
        <div id="menu-mobile" className="menu-mobile escondido">
            <a href="/pages/artist/feed-artist.html">Home</a>
            <a href="/pages/artist/oportunidade-artist.html">Oportunidades</a>
            <a href="/pages/artist/notificacoes-artist.html">Notificações</a>
            <a href="/pages/artist/mensagens-artist.html">Mensagens</a>
            <a href="/pages/artist/perfil-artist.html">Perfil</a>
            <a href="../../index.html">Logout</a>
        </div>
    </div>,
    document.getElementById("menu-suspenso")
)