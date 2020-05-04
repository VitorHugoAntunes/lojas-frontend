import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/americanas-logo2.png'

export default function Register2() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault() 
        history.push('/')
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt=""/>

                    <h1>Cadastro</h1>
                    <p>Faça o registro da sua loja para que ela fique visível virtualmente para seus clientes.</p>

                    <Link className="back-link2" to="/register">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar 
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da loja"
                        value={name}
                        onChange={ e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="CNPJ"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="CEP"
                        value={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={ e => setCity(e.target.value)}
                    />
                        <input 
                        placeholder="UF"
                        style={{ width: 80 }}
                        value={uf}
                        onChange={ e => setUf(e.target.value)}
                    />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}