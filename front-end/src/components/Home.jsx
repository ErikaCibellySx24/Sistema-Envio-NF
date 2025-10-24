import React from "react";
import { FaFileInvoice, FaHistory, FaChartLine, FaCog } from "react-icons/fa";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
        <nav className="navbar">
            {/* Logo */}
            <div className="nav-logo">MeuSistema</div>

            {/* Menu central (opcional) */}
            <div className="nav-menu">
                <a href="#envio">Envio NF</a>
                <a href="#historico">Histórico</a>
                <a href="#relatorios">Relatórios</a>
            </div>

            {/* Perfil */}
            <div className="nav-user">
                <span>Usuário</span>
                <img src="/perfil.jpg" alt="Perfil" />
            </div>
        </nav>
      {/* Hero Section */}
      <div className="hero">
        <div className="card-nf">
          <FaFileInvoice className="text-5xl text-blue-500 mb-4" />
          <h2>Envio de Nota Fiscal</h2>
          <button className="btn-nf">Enviar NF</button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <div className="quick-card">
          <FaHistory className="text-3xl mb-2" />
          <p>Histórico</p>
        </div>
        <div className="quick-card">
          <FaChartLine className="text-3xl mb-2" />
          <p>Relatórios</p>
        </div>
        <div className="quick-card">
          <FaCog className="text-3xl mb-2" />
          <p>Configurações</p>
        </div>
      </div>
    </div>
  );
}
