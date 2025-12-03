ReactDOM.render(
  <div id="container-react">
    <button type="button" className="btn-voltar-home" onClick={() => window.location.href = "../index.html"}>
        <i className="bi bi-arrow-left"></i>
    </button>
    <div className="identidade">
      
      <img src="../assets/logotipo-sem-fundo.png" alt="logo" />
      <h1>Stage Nexus</h1>
      <div className="outros-logins">
        <button className="btn-social">Google</button>
        <button className="btn-social">Gmail</button>
      </div>
    </div>

    <div className="right">
      <form className="formulario-login">
        <label htmlFor="user">Usuário:</label>
        <input id="user" type="email" placeholder="Usuário" />

        <label htmlFor="password">Senha:</label>
        <input id="password" type="password" placeholder="Senha" />
        <select id="categoria">
          <option value="none">Selecione</option>
          <option value="artista">Artista</option>
          <option value="produtor">Produtor</option>
        </select>

        <button type="submit" id="login" className="btn-login">Login</button>
        <button type="button" id="cadastro" className="btn-login">Cadastre-se</button>
      </form>
    </div>
  </div>,
  document.getElementById("container")
);

const senhaInput = document.querySelector("#password");
const usuarioInput = document.querySelector("#user");
const selectCategoria = document.querySelector("#categoria");
const loginButton = document.querySelector("#login");
const cadastroButton = document.querySelector("#cadastro");
const formulario = document.querySelector(".formulario-login");


formulario.addEventListener("submit", function (e) {
  e.preventDefault();
});
loginButton.onclick = function () {
  if (usuarioInput.value.trim() === "") {
    alert("Por favor, preencha o seu nome");
    return;
  }
  if (senhaInput.value.trim() === "") {
    alert("Por favor, preencha com sua senha!");
    return;
  }
  const categoria = selectCategoria.value;
  if (categoria === "artista") {
    window.location.href = "artist/feed-artist.html";
  } else if (categoria === "produtor") {
    window.location.href = "producer/feed-producer.html";
  } else {
    alert("Por favor, selecione uma categoria!");
  }

}

cadastroButton.onclick = function () {
  window.location.href = "cadastro.html";
}

