ReactDOM.render(
    <div>
        <div className="logo">
            <img></img>
        </div>
        <div className="busca">
            <input placeholder="busca"></input>
            <button><i class="bi bi-search"></i></button>
        </div>
        <div className="logout">
                <button><i class="bi bi-bell"></i></button>
                <button></button>
                <button><i class="bi bi-box-arrow-right"></i></button>
        </div>
        
    </div>,
    document.getElementById("menu-suspenso")
);
ReactDOM.render(
    <h1>Olá, eu sou o React. Estou renderizando na div secundário</h1>,
    document.getElementById("secundario")
);