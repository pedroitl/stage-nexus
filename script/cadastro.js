ReactDOM.render(
  <Cadastro />,
  document.getElementById("container-cadastro")
);

function Cadastro() {
  const [tipoUser, setTipoUser] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [nascimento, setNascimento] = React.useState("");
  const [idade, setIdade] = React.useState(null);
  const [nomeResp, setNomeResp] = React.useState("");
  const [emailResp, setEmailResp] = React.useState("");

  function calcularIdade(data) {
    const hoje = new Date();
    const nasc = new Date(data);
    let idade = hoje.getFullYear() - nasc.getFullYear();
    const m = hoje.getMonth() - nasc.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
      idade--;
    }
    return idade;
  }

  function handleNascimento(e) {
    setNascimento(e.target.value);
    if (e.target.value) {
      setIdade(calcularIdade(e.target.value));
    }
  }

  function validar(e) {
    e.preventDefault();

    if (!tipoUser) return alert("Selecione o tipo de usuário.");

    if (senha.length < 8)
      return alert("A senha deve ter no mínimo 8 caracteres.");

    if (!idade) return alert("Preencha a data de nascimento.");

    if (tipoUser === "produtor" && idade < 18)
      return alert("Produtores devem ter +18 anos.");

    if (tipoUser === "artista") {
      if (idade < 16)
        return alert("Artistas só podem criar conta a partir dos 16 anos.");

      if (idade < 18) {
        if (!nomeResp || !emailResp)
          return alert("Preencha os dados do responsável.");
      }
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  }

  return (
    <div id="container-react">

      {/* LADO ESQUERDO */}
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

      {/* LADO DIREITO — FORMULÁRIO */}
      <div className="right">
        <label>Tipo de usuário</label>

        <div className="tipo-user" style={{ display: "flex", gap: "1rem" }}>
          <button onClick={() => setTipoUser("artista")}>Artista</button>
          <button onClick={() => setTipoUser("produtor")}>Produtor</button>
        </div>

        <form className="formulario-cadastro" onSubmit={validar}>
            <label>E-mail</label>
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <label>Usuário</label>  
          <input type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>
            <label>Senha</label>
          <input type="password" placeholder="mín. 8 caracteres" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
            <label>Data de nascimento</label>
          <input type="date" value={nascimento} onChange={handleNascimento} required/>

          {tipoUser === "artista" && idade >= 16 && idade < 18 && (
            <div className="responsavel">
              <h4 style={{ color: "#4C1E77" }}>Dados do responsável</h4>

              <input type="text" value={nomeResp} onChange={(e) => setNomeResp(e.target.value)} required/>

              <input type="email" placeholder="E-mail do responsável" value={emailResp} onChange={(e) => setEmailResp(e.target.value)}
                required/>
            </div>
          )}

          <button type="submit">Cadastrar</button>
        </form>
      </div>

    </div>
  );
}
