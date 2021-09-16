import React from 'react';
import './style.css';
import pb from './images/pb.png';
import eletronica from './images/eletronica.png';
import torno from './images/torno.png';
import Info from '../Info';

function HomePage() {
    return(
        <><Info /><div className="home-page">
            <div class="card">
                <img src={pb} class="card-img-top" width="120px" height="250px" alt="Power BI" />
                <div class="card-body">
                    <h5 class="card-title">POWER BI</h5>
                    <p class="card-text">Duração: 20 Horas </p>
                    <p class="card-text">Preço: Gratuito</p>
                    <a href="https://suicobrasileira.sp.senai.br/curso/92661/115/power-bi" target="_blank" rel="noreferrer" class="btn btn-primary">Visite a página oficial</a>
                </div>
            </div>
            <div class="card">
                <img src={eletronica} class="card-img-top" width="120px" height="250px" alt="Processador" />
                <div class="card-body">
                    <h5 class="card-title">AUXILIAR DE ELETRÔNICA</h5>
                    <p class="card-text">Duração: 80 Horas</p>
                    <p class="card-text">Preço: Gratuito</p>
                    <a href="https://suicobrasileira.sp.senai.br/curso/54929/115/auxiliar-de-eletronica" target="_blank" rel="noreferrer" class="btn btn-primary">Visite a página oficial</a>
                </div>
            </div>
            <div class="card">
                <img src={torno} class="card-img-top" width="120px" height="250px" alt="Torno" />
                <div class="card-body">
                    <h5 class="card-title">TORNEIRO MECÂNICO</h5>
                    <p class="card-text">Duração: 180 Horas</p>
                    <p class="card-text">Preço: Gratuito</p>
                    <a href="https://suicobrasileira.sp.senai.br/curso/87978/115/torneiro-mecanico" target="_blank" rel="noreferrer" class="btn btn-primary">Visite a página oficial</a>
                </div>
            </div>
        </div></>
    );
}

export default HomePage;