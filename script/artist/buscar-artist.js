ReactDOM.render (
    <div className="pagina-busca">
        <h2 className="titulo-busca">Resultados da Busca</h2>
        <div className="resultados-lista">
            <p className="contador-resultados">5 resultados encontrados</p>
            <div className="resultado-card">
                <img src="../../assets/busca/perfil-busca-1.jpg" className="foto-perfil"></img>
                <div className="info">
                    <h3>João Gomes</h3>
                    <p>Cantor</p>
                </div>
                <button className="btn-ver">Ver Perfil</button>
            </div>
            <div className="resultado-card">
                <img src="../../assets/busca/perfil-busca-2.webp" className="foto-perfil"></img>
                <div className="info">
                    <h3>Rick Bonadio</h3>
                    <p>Produtor Musical</p>
                </div>
                <button className="btn-ver">Ver Perfil</button>
            </div>
            <div className="resultado-card">
                <img src="../../assets/busca/perfil-busca-3.jpg" className="foto-perfil"></img>
                <div className="info">
                    <h3>Dennis DJ</h3>
                    <p>Cantor / Beatmaker</p>
                </div>
                <button className="btn-ver">Ver Perfil</button>
            </div>
            <div className="resultado-card">
                <img src="../../assets/busca/perfil-busca-4.jpeg" className="foto-perfil"></img>
                <div className="info">
                    <h3>Dr. Luke</h3>
                    <p>Empresário / Produtor Musical</p>
                </div>
                <button className="btn-ver">Ver Perfil</button>
            </div>
            <div className="resultado-card">
                <img src="../../assets/busca/perfil-busca-5.jpg" className="foto-perfil"></img>
                <div className="info">
                    <h3>Zendaya</h3>
                    <p>Atriz</p>
                </div>
                <button className="btn-ver">Ver Perfil</button>
            </div>
            <button className="btn-ver-mais">Carregar mais</button>
        </div>
    </div>,
    document.getElementById("busca-artist")
);