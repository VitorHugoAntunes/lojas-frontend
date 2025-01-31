import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/americanas-logo2.png'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()
            history.push('/register2')
        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt=""/>

                    <h1>Cadastro</h1>
                    <p>Primeiro precisamos dos dados do dono da loja para o nosso cadastro.</p>

                    <Link className="back-link2" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar 
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome do dono"
                        value={name}
                        onChange={ e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Telefone/Celular"
                        value={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value)}
                    />

                    <button className="button" type="submit">Próximo</button>
                </form>
            </div>
        </div>
    )
}