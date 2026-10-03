// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './css/style.css'

import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Carrossel from './components/carrossel.jsx'
import Login from './components/login.jsx'
import BotaoCadastro from './components/botao-cadastro.jsx'
import FaleConosco from './components/fale-conosco.jsx'
import Dashboard from './components/dashboard.jsx'
import Reserva from './components/reserva.jsx'

function App() {

  return (
    <div className="meuApp">
      <Navbar />
      <div className="conteudoApp">
        <Routes>
          <Route path="/" element={<Carrossel />} />
          <Route path="/conheca" element={<Carrossel />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/login" element={<Login />} />
          <Route path="/experimente" element={<BotaoCadastro />} />
          <Route path="/minhaarea" element={<Dashboard />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>
      </div>
      <div className="footerApp"> 
        <Footer />
      </div>
    </div>
  )
}

export default App;