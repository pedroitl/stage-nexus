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
                <i class="bi bi-list"></i>
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
);

const btnMenu = document.querySelector("#btn-menu");
const menuMobile = document.querySelector("#menu-mobile");

btnMenu.addEventListener("click", () => {
    menuMobile.classList.toggle("escondido");
});

async function renderPosts() {
    ReactDOM.render(
        <div className="postagens">
            <div className="post-card">
                <div className="post-header">
                    <div className="post-info">
                        <i className="bi bi-person-circle"></i>
                        <span>Luna Alves</span>
                    </div>
                </div>

                <img src="../../assets/posts/post-allofme.jpg" className="post-img" />

                <p className="post-desc">
                    Novo cover gravado ontem! 🎶✨  
                    “All of Me” — versão ao vivo no piano.
                </p>

                <div className="tags">
                    <span className="tag">Piano</span>
                    <span className="tag">Cover</span>
                    <span className="tag">Vocal</span>
                </div>

                <div className="post-acoes">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-chat"></i>
                    <i className="bi bi-share"></i>
                </div>
            </div>

            <div className="post-card">
                <div className="post-header">
                    <div className="post-info">
                        <i className="bi bi-person-circle"></i>
                        <span>Diego Martins</span>
                    </div>
                </div>

                <img src="../../assets/posts/post-indie.jpeg" className="post-img" />

                <p className="post-desc">
                    Mixagem finalizada! 🔥🔥  
                    Mais um trabalho indie pronto pra ir pro mundo.
                </p>

                <div className="tags">
                    <span className="tag">Mixagem</span>
                    <span className="tag">Indie</span>
                    <span className="tag">Produção</span>
                </div>

                <div className="post-acoes">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-chat"></i>
                    <i className="bi bi-share"></i>
                </div>
            </div>

            <div className="post-card">
                <div className="post-header">
                    <div className="post-info">
                        <i className="bi bi-person-circle"></i>
                        <span>Ana Ribeiro</span>
                    </div>
                </div>

                <img src="../../assets/posts/post-ensaio.jpg" className="post-img" />

                <p className="post-desc">
                    Ensaiando para o festival de verão ☀️🎤  
                    Energia lá em cima hoje!
                </p>

                <div className="tags">
                    <span className="tag">Festival</span>
                    <span className="tag">Ensaios</span>
                </div>

                <div className="post-acoes">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-chat"></i>
                    <i className="bi bi-share"></i>
                </div>
            </div>

            <div className="post-card">
                <div className="post-header">
                    <div className="post-info">
                        <i className="bi bi-person-circle"></i>
                        <span>Bruno Guitar</span>
                    </div>
                </div>

                <img src="../../assets/posts/post-guitarra.webp" className="post-img" />

                <p className="post-desc">
                    Nova guitarra, novos riffs 😎🎸  
                    Preparando projetos incríveis.
                </p>

                <div className="tags">
                    <span className="tag">Guitarra</span>
                    <span className="tag">Rock</span>
                    <span className="tag">Riffs</span>
                </div>

                <div className="post-acoes">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-chat"></i>
                    <i className="bi bi-share"></i>
                </div>
            </div>

            <div className="post-card">
                <div className="post-header">
                    <div className="post-info">
                        <i className="bi bi-person-circle"></i>
                        <span>Clara Beats</span>
                    </div>
                </div>

                <img src="../../assets/posts/post-trap.webp" className="post-img" />

                <p className="post-desc">
                    Beat novo lançado! 💜🔥  
                    Trap + Lo-fi = amor demais.
                </p>

                <div className="tags">
                    <span className="tag">Trap</span>
                    <span className="tag">Lo-fi</span>
                    <span className="tag">Beatmaker</span>
                </div>

                <div className="post-acoes">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-chat"></i>
                    <i className="bi bi-share"></i>
                </div>
            </div>
        </div>,
        document.getElementById("posts")
    );


}

renderPosts();
