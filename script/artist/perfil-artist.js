let abaSelecionada = "publicacoes";
let modalEditarPerfil = false;
let modalAddTrabalho = false;
let novoTrabalho = {};
// dados editáveis do usuário
let perfilDados = {
    nome: "Maria Artista",
    arroba: "@mariaartista",
    dataNascimento: "25/10/2000",
    categoria: "Artista",
    bio: "Cantora e compositora apaixonada por música",
    sobreTexto: "Maria é cantora, compositora e performer. Atua há mais de 8 anos.",
    habilidades: [],
    premios: []
};

function renderizarPerfil() {
    ReactDOM.render(
        <div className="container-perfil">

            <div className="perfil-capa"></div>
            
            <div className="perfil-info">
                    <button className="btn-editar" onClick={() => { modalEditarPerfil = true; renderizarPerfil(); }}>
                    <i className="bi bi-pencil-square"></i> Editar Perfil
                </button>
                
                <div className="perfil-foto"><i className="bi bi-person"></i></div>

                <div className="perfil-dados">
                    <h2>{perfilDados.nome}</h2>
                    <span className="perfil-arroba">{perfilDados.arroba}</span>
                    <span className="perfil-categoria">{perfilDados.categoria}</span>
                    <p className="perfil-bio">{perfilDados.bio}</p>

                    <div className="perfil-estatisticas">
                        <span><strong>1250</strong> seguidores</span>
                        <span><strong>340</strong> seguindo</span>
                        <span><strong>45</strong> trabalhos</span>
                    </div>
                </div>

                
            </div>
            
            {/* Abas de navegação */}
            <div className="perfil-abas">
                <button className={`aba ${abaSelecionada === "publicacoes" ? "ativa" : ""}`}
                    onClick={() => { abaSelecionada = "publicacoes"; renderizarPerfil(); }}>
                    Publicações
                </button>

                <button className={`aba ${abaSelecionada === "trabalhos" ? "ativa" : ""}`}
                    onClick={() => { abaSelecionada = "trabalhos"; renderizarPerfil(); }}>
                    Trabalhos
                </button>

                <button className={`aba ${abaSelecionada === "sobre" ? "ativa" : ""}`}
                    onClick={() => { abaSelecionada = "sobre"; renderizarPerfil(); }}>
                    Sobre
                </button>
            </div>

            {/* Aba publicações */}
            {abaSelecionada === "publicacoes" && (
                <div className="publicacoes-feed">

                    {/* POST 1 */}
                    <div className="post-card">
                        
                        <div className="post-conteudo">
                            <div className="post-topo">
                                <div className="post-user-icon"><i className="bi bi-person-circle"></i></div>
                                <div>
                                    <strong>Maria Artista</strong>
                                    <span className="post-tempo">2d</span>
                                </div>
                            </div>

                            <p className="post-legenda">
                                Acabei de sair de um show incrível! A energia do público estava demais 🎤🔥  
                                <span className="hashtags">#ShowAoVivo #Música</span>
                            </p>
                        </div>

                        <div className="post-imagem">
                            <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg" />
                        </div>

                        <div className="post-conteudo">
                            <div className="post-info">
                                <span>243 curtidas</span>
                                <span>18 comentários</span>
                                <span>5 compartilhamentos</span>
                            </div>

                            <div className="post-acoes">
                                <button><i className="bi bi-heart"></i> Curtir</button>
                                <button><i className="bi bi-chat"></i> Comentar</button>
                                <button><i className="bi bi-share"></i> Compartilhar</button>
                            </div>
                        </div>

                    </div>


                    {/* POST 2 */}
                    <div className="post-card">

                        <div className="post-conteudo">
                            <div className="post-topo">
                                <div className="post-user-icon"><i className="bi bi-person-circle"></i></div>
                                <div>
                                    <strong>Maria Artista</strong>
                                    <span className="post-tempo">2 semanas</span>
                                </div>
                            </div>

                            <p className="post-legenda">
                                Minha primeira aula de sax  
                                <span className="hashtags"> #Sax #Jazz</span>
                            </p>
                        </div>

                        <div className="post-imagem">
                            <img src="https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg" />
                        </div>

                        <div className="post-conteudo">
                            <div className="post-info">
                                <span>367 curtidas</span>
                                <span>10 comentários</span>
                                <span>2 compartilhamentos</span>
                            </div>

                            <div className="post-acoes">
                                <button><i className="bi bi-heart"></i> Curtir</button>
                                <button><i className="bi bi-chat"></i> Comentar</button>
                                <button><i className="bi bi-share"></i> Compartilhar</button>
                            </div>
                        </div>

                    </div>


                    {/* POST 3 */}
                    <div className="post-card">

                        <div className="post-conteudo">
                            <div className="post-topo">
                                <div className="post-user-icon"><i className="bi bi-person-circle"></i></div>
                                <div>
                                    <strong>Maria Artista</strong>
                                    <span className="post-tempo">1 mês</span>
                                </div>
                            </div>

                            <p className="post-legenda">
                                Vem aí música nova  
                                <span className="hashtags"> #Lançamento</span>
                            </p>
                        </div>

                        <div className="post-imagem">
                            <img src="https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg" />
                        </div>

                        <div className="post-conteudo">
                            <div className="post-info">
                                <span>1050 curtidas</span>
                                <span>50 comentários</span>
                                <span>15 compartilhamentos</span>
                            </div>

                            <div className="post-acoes">
                                <button><i className="bi bi-heart"></i> Curtir</button>
                                <button><i className="bi bi-chat"></i> Comentar</button>
                                <button><i className="bi bi-share"></i> Compartilhar</button>
                            </div>
                        </div>

                    </div>

                </div>
            )}
            {/* Aba Trabalhos */}
            {abaSelecionada === "trabalhos" && (
                <div className="perfil-trabalhos">
                    <h3>Trabalhos Recentes</h3>

                    <div className="trabalho-card">
                        
                        <div className="trabalho-img-wrapper">
                            <img
                                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
                                alt="Show"
                                className="trabalho-img"
                            />
                        </div>

                        <div className="trabalho-header">
                            <div className="trabalho-titulo-area">
                                <h4>Festival de Verão 2024</h4>
                                <div className="trabalho-tags">
                                    <span className="trabalho-categoria">Show</span>
                                    <span className="trabalho-data">Janeiro 2024</span>
                                </div>
                            </div>

                            <div className="trabalho-stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                        </div>

                        <p className="trabalho-descricao">
                            Performance como baterista principal em festival com 3 dias de duração
                        </p>

                        <div className="trabalho-cliente">
                            <i class="bi bi-building"></i>
                            <span>Cliente: Produtora XYZ</span>
                        </div>

                    </div>
                    <div className="trabalho-card">
                        
                        <div className="trabalho-img-wrapper">
                            <img
                                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
                                alt="Show"
                                className="trabalho-img"
                            />
                        </div>

                        <div className="trabalho-header">
                            <div className="trabalho-titulo-area">
                                <h4>Festival de Verão 2024</h4>
                                <div className="trabalho-tags">
                                    <span className="trabalho-categoria">Show</span>
                                    <span className="trabalho-data">Janeiro 2024</span>
                                </div>
                            </div>

                            <div className="trabalho-stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                        </div>

                        <p className="trabalho-descricao">
                            Performance como baterista principal em festival com 3 dias de duração
                        </p>

                        <div className="trabalho-cliente">
                            <i class="bi bi-building"></i>
                            <span>Cliente: Produtora XYZ</span>
                        </div>

                    </div>
                    <div className="trabalho-card">
                        
                        <div className="trabalho-img-wrapper">
                            <img
                                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
                                alt="Show"
                                className="trabalho-img"
                            />
                        </div>

                        <div className="trabalho-header">
                            <div className="trabalho-titulo-area">
                                <h4>Festival de Verão 2024</h4>
                                <div className="trabalho-tags">
                                    <span className="trabalho-categoria">Show</span>
                                    <span className="trabalho-data">Janeiro 2024</span>
                                </div>
                            </div>

                            <div className="trabalho-stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                        </div>

                        <p className="trabalho-descricao">
                            Performance como baterista principal em festival com 3 dias de duração
                        </p>

                        <div className="trabalho-cliente">
                            <i class="bi bi-building"></i>
                            <span>Cliente: Produtora XYZ</span>
                        </div>

                    </div>

                </div>
            )}


            {/* Aba sobre */}
            {abaSelecionada === "sobre" && (
    <div className="perfil-sobre">

        <h4 className="sobre-titulo"><i class="bi bi-fast-forward"></i> Vida Profissional</h4>
        <p className="sobre-texto">{perfilDados.sobreTexto}</p>

        <h4 className="sobre-titulo"><i class="bi bi-star"></i> Habilidades</h4>
        <div className="habilidades-lista">
            {perfilDados.habilidades.length > 0 ? (
                perfilDados.habilidades.map((h, i) => (
                    <span key={i} className="habilidade-chip">{h}</span>
                ))
            ) : (
                <p className="sobre-texto">Nenhuma habilidade adicionada.</p>
            )}
        </div>
        <h4 className="sobre-titulo"><i class="bi bi-award"></i> Prêmios e Reconhecimentos</h4>
        
        <div className="premios-lista">
            {perfilDados.premios.length > 0 ? (
                perfilDados.premios.map((p, i) => (
                    <div key={i} className="premio-card">
                        <i class="bi bi-trophy"></i>
                        <span>{p}</span>
                    </div>
                ))
            ) : (
                <p className="sobre-texto">Nenhum prêmio adicionado.</p>
            )}
        </div>

    </div>
)}


            {/* Modal editar perfil */}
            {modalEditarPerfil && (
                <div className="modal-overlay" onClick={() => { modalEditarPerfil = false; renderizarPerfil(); }}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <h2>Editar Perfil</h2>
                        {/* Editar a area do perfil */}
                        <fieldset>
                            <legend>Perfil</legend>

                            <label>Nome</label>
                            <input type="text" defaultValue={perfilDados.nome} onChange={(e) => perfilDados.nome = e.target.value}/>

                            <label>Arroba</label>
                            <input type="text" defaultValue={perfilDados.arroba} onChange={(e) => perfilDados.arroba = e.target.value}/>

                            <label>Categoria</label>
                            <select defaultValue={perfilDados.categoria} onChange={(e) => perfilDados.categoria = e.target.value}>
                                <option value="Artista">Artista</option>
                                <option value="Músico">Músico</option>
                                <option value="Cantor(a)">Cantor(a)</option>
                                <option value="Compositor(a)">Compositor(a)</option>
                                <option value="Produtor(a)">Produtor(a)</option>
                                <option value="DJ">DJ</option>
                                <option value="Ator/Atriz">Ator / Atriz</option>
                            </select>

                            <label>Bio</label>
                            <textarea defaultValue={perfilDados.bio} onChange={(e) => perfilDados.bio = e.target.value}></textarea>
                        
                        </fieldset>
                        {/* Editar a area de sobre do perfil */}
                        <fieldset>
                            <legend>Sobre</legend>

                            <label>Descreva Sobre Você:</label>
                            <textarea
                                defaultValue={perfilDados.sobreTexto}
                                onChange={(e) => perfilDados.sobreTexto = e.target.value}
                            ></textarea>

                            <div className="grupo-bloco">
                                <label>Habilidades</label>

                                {perfilDados.habilidades.map((hab, index) => (
                                    <div key={index} className="item-lista">
                                        <input type="text" defaultValue={hab} onChange={(e) => perfilDados.habilidades[index] = e.target.value}/>
                                        <button type="button" className="btn-remover-item" onClick={() => {
                                                perfilDados.habilidades.splice(index, 1);
                                                renderizarPerfil();}}>X</button>
                                    </div>
                                ))}

                                <button type="button" className="btn-adicionar-item" onClick={() => {
                                        perfilDados.habilidades.push("");
                                        renderizarPerfil();}}>+ Adicionar habilidade</button>
                            </div>
                            <div className="grupo-bloco">
                                <label>Prêmios</label>

                                {perfilDados.premios.map((premio, index) => (
                                    <div key={index} className="item-lista">
                                        <input type="text" defaultValue={premio} onChange={(e) => perfilDados.premios[index] = e.target.value}/>
                                        <button type="button" className="btn-remover-item" onClick={() => {
                                                perfilDados.premios.splice(index, 1);
                                                renderizarPerfil();}}>X</button>
                                    </div>
                                ))}

                                <button type="button" className="btn-adicionar-item" onClick={() => {
                                        perfilDados.premios.push("");
                                        renderizarPerfil();}}>+ Adicionar prêmio</button>
                            </div>
                        </fieldset>

                        <div className="modal-btns">
                            <button className="btn-cancelar" onClick={() => { modalEditarPerfil = false; renderizarPerfil(); }}>
                                Cancelar
                            </button>

                            <button className="btn-salvar" onClick={() => { modalEditarPerfil = false; renderizarPerfil(); }}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {modalAddTrabalho && (
                <div className="modal-overlay" onClick={() => { modalAddTrabalho = false; renderizarPerfil(); }}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <h2>Adicionar Trabalho</h2>

                        <fieldset>
                            <legend>Informações do Trabalho</legend>

                            <label>Título</label>
                            <input type="text" onChange={(e) => novoTrabalho.titulo = e.target.value}/>

                            <label>Categoria</label>
                            <select onChange={(e) => novoTrabalho.categoria = e.target.value}>
                                <option value="">Selecione</option>
                                <option value="Show">Show</option>
                                <option value="Gravação">Gravação</option>
                                <option value="Turnê">Turnê</option>
                                <option value="Evento">Evento</option>
                                <option value="Outros">Outros</option>
                            </select>

                            <label>Data</label>
                            <input type="month" onChange={(e) => novoTrabalho.data = e.target.value}/>

                            <label>Imagem</label>
                            <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        novoTrabalho.imagem = reader.result; };reader.readAsDataURL(file);}}/>

                            <label>Descrição</label>
                            <textarea 
                                onChange={(e) => novoTrabalho.descricao = e.target.value}
                            ></textarea>
                        </fieldset>

                        <div className="modal-btns">
                            <button className="btn-cancelar" onClick={() => { modalAddTrabalho = false; renderizarPerfil(); }}>Cancelar</button>

                            <button 
                                className="btn-salvar" onClick={() => {trabalhos.push(novoTrabalho);novoTrabalho = {};
                                modalAddTrabalho = false;renderizarPerfil();}}>Salvar</button>
                        </div>
                    </div>
                </div>
            )}

        </div>,
        document.getElementById("perfil-html")
    );
}

renderizarPerfil();
