ReactDOM.render(
    <div className="menu-suspenso">
        <div className="logo-busca">
            <div className="logo">
                <a href="/pages/artist/feed-artist.html"><img src="/assets/logotipo-branco.png" alt=""></img></a>
            </div>
            <div className="busca">
                <input placeholder="Buscar perfis..."></input>
                <a href=""><i class="bi bi-search"></i></a>
            </div>
        </div>
        <div className="barra-logout">
            <div className="barra-tarefas">
                <a href="/pages/artist/feed-artist.html"><i class="bi bi-house"></i></a>
                <a href="/pages/artist/oportunidade-artist.html"><i class="bi bi-briefcase"></i></a>
                <a href="/pages/artist/notificacoes-artist.html"><i class="bi bi-bell"></i></a>
                <a href="/pages/artist/mensagens-artist.html"><i class="bi bi-chat"></i></a>
                <a href="/pages/artist/perfil-artist.html"><i class="bi bi-person"></i></a>
            </div>
            <div className="logout">
                <a href="/pages/login.html"><i class="bi bi-box-arrow-right"></i></a>
            </div>
        </div>
            
    </div>,
    document.getElementById("menu-suspenso")
);