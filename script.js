ReactDOM.render(
    <div className="menu-suspenso">
        <div className="logo">
            <a href=""><img src="/assets/logotipo-branco.png" alt=""></img></a>
        </div>
        <div className="busca">
            <input placeholder="busca"></input>
            <a href=""><i class="bi bi-search"></i></a>
        </div>
        <div className="barra-tarefas">
            <a href=""><i class="bi bi-house"></i></a>
            <a href=""><i class="bi bi-briefcase"></i></a>
            <a href=""><i class="bi bi-bell"></i></a>
            <a href=""><i class="bi bi-chat"></i></a>
            <a href=""><i class="bi bi-person"></i></a>
        </div>
        <div className="logout">
            <a href=""><i class="bi bi-box-arrow-right"></i></a>
        </div>
    </div>,
    document.getElementById("menu-suspenso")
);

