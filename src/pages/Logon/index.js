import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/americanas-logo.png'
import heroesImg from '../../assets/screen.png'

export default function Logon() {
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        history.push('/profile')
    }

    return (
        <div className="logon-container">
            <img className="img1" src={logoImg} alt="Be The Hero"/>
            <div className="container-logo">
            <section className="form">

                <form onSubmit={handleLogin}>
                    <h1>Para ver os pedidos dos seus clientes ou
                        verificar seu estoque, <u>logue em sua conta</u>.</h1>

                    <input 
                        type="email"
                        className="form-input"
                        placeholder="Seu e-mail"
                    />
                    <input 
                        type="password"
                        placeholder="Sua senha"
                        value={id}
                        onChange={ e => setId(e.target.value)}
                    />
                    <div className="input-group1">
                        <Link className="back-link1" to="/register">
                            <FiLogIn size={16} color="#fff" />
                            Não tenho cadastro 
                        </Link>

                        <button className="button1" type="submit">Entrar</button>
                    </div>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
            </div>
        </div>
        
    )
}