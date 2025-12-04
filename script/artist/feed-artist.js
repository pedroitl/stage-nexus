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
                <a href="../../index.html"><i class="bi bi-box-arrow-right"></i></a>
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

function FeedArtist() {
    const [posts, setPost] = React.useState([
        {
            id: 1,
            autor: "Luna Alves",
            img: "../../assets/posts/post-allofme.jpg",
            avatar: "../../assets/feed/perfil-feed-1.jpeg",
            desc: "Novo cover gravado ontem! 🎶✨  “All of Me” — versão ao vivo no piano.",
            tags: ["Piano", "Cover", "Vocal"]
        },
        {
            id: 2,
            autor: "Diego Martins",
            img: "../../assets/posts/post-indie.jpeg",
            avatar: "../../assets/feed/perfil-feed-2.jpeg",
            desc: "Mixagem finalizada! 🔥🔥  Mais um trabalho indie pronto pra ir pro mundo.",
            tags: ["Mixagem", "Indie", "Produção"]
        },
        {
            id: 3,
            autor: "Ana Ribeiro",
            img: "../../assets/posts/post-ensaio.jpg",
            avatar: "../../assets/feed/perfil-feed-3.jpeg",
            desc: "Ensaiando para o festival de verão ☀️🎤  Energia lá em cima hoje!",
            tags: ["Festival", "Ensaios"]
        },
        {
            id: 4,
            autor: "Bruno Guitar",
            img: "../../assets/posts/post-guitarra.webp",
            avatar: "../../assets/feed/perfil-feed-4.jpeg",
            desc: "Nova guitarra, novos riffs 😎🎸  Preparando projetos incríveis.",
            tags: ["Guitarra", "Rock", "Riffs"]
        },
        {
            id: 5,
            autor: "Clara Beats",
            img: "../../assets/posts/post-trap.webp",
            avatar: "../../assets/feed/perfil-feed-5.jpeg",
            desc: "Beat novo lançado! 💜🔥  Trap + Lo-fi = amor demais.",
            tags: ["Trap", "Lo-fi", "Beatmaker"]
        }

    ]);

    const [novoPost, setNovoPost] = React.useState("");
    const [usuarioLogado, setUsuarioLogado] = React.useState({
        nome: "Maria Artista",
        avatar: "../../assets/feed/user-artist.jpg"
    });

    function enviarPost() {
        if (!novoPost.trim()) return;

        const novo = {
            id: Date.now(),
            autor: usuarioLogado.nome,
            avatar: usuarioLogado.avatar,
            img: "",
            desc: novoPost,
            tags: []
        };

        setPost([novo, ...posts]);
        setNovoPost("");
    }

    return (
        <div className="feed-container">
            <div className="criar-post">
                <div className="criar-post-topo">
                    <img src={usuarioLogado.avatar} className="post-avatar" />
                    <input
                        type="text"
                        placeholder="O que você está pensando?"
                        value={novoPost}
                        onChange={(e) => setNovoPost(e.target.value)}
                        className="input-post"
                    />
                </div>
                <div className="criar-post-acoes">
                    <button className="btn-acao" onClick={enviarPost}>
                        <i className="bi bi-send-fill"></i> Postar
                    </button>
                    <button className="btn-acao"><i className="bi bi-image"></i> Foto</button>
                    <button className="btn-acao"><i className="bi bi-music-note-beamed"></i> Áudio</button>
                </div>
            </div>

            {posts.map((p) => (
                <div className="post-card" key={p.id}>
                    <div className="post-header">
                        <div className="post-info">
                            <img src={p.avatar || usuarioLogado.avatar} className="post-avatar" />
                            <span>{p.autor}</span>
                        </div>
                    </div>
                    {p.img && <img src={p.img} className="post-img" />}
                    <p className="post-desc">{p.desc}</p>
                    <div className="tags">
                        {p.tags.map((tag, i) => <span className="tag" key={i}>{tag}</span>)}
                    </div>
                    <div className="post-acoes">
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-share"></i>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Render no DOM
ReactDOM.render(<FeedArtist />, document.getElementById("posts"));