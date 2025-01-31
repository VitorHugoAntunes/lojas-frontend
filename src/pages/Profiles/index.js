import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiUser, FiX } from 'react-icons/fi'

import api from '../../services/api'

import './css/styles.css'

import logoImg from '../../assets/americanas-logo.png'
import iconPhoto from '../../assets/insert_photo-6.png'

export default function CardPedido() {

    const [incidents, setIncidents] = useState([])

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    async function handleDeleteIncident(id) {
        try {

            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            })
            
            setIncidents(incidents.filter(incident => incident.id !== id))
        } 
        
        catch (err) {
            alert ("Erro ao deletar caso, tente novamente.")
        }
    }

    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }

    function handleEstoque(e) {
        e.preventDefault()
        history.push('/estoque')
    }

    function handleProfile(e) {
        e.preventDefault()
        history.push('/profile')
    }

    function handleCardPedido(e) {
        e.preventDefault()
        history.push('/cardPedido')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>

                <button className="button2" onClick={handleLogout}>
                    <FiUser size={48}  color="#e02041" />
                </button>
            </header>
            <div className="divHeader">
                <div className="divHeader1">
                    <h1><u>Novos pedidos</u></h1>
                    <h1>Histórico de pedidos</h1>
                </div>
                <div className="divHeader2">
                    <a href="/" onClick={handleProfile}><span>Pedidos</span></a>
                    <a href="/" onClick={handleEstoque}><span className="spanEstoque">Estoque</span></a>
                </div>
                
            </div>

            <hr className="hr"></hr>
            <br></br><br></br>

            <ul>
                    <li className="pedidos">
                        <strong>Pedido 1</strong>

                        <p>Pedido pago - cartão de crédito</p>
                        <div className="div1">
                        <strong >5 produtos</strong>

                        <strong><u><a href="/" className="linkPedido" onClick={handleCardPedido}>Ver informações do pedido</a></u></strong>
                        </div>

                        <span>14:21</span>
                    </li>

                    <li className="pedidos">
                        <strong>Pedido 1</strong>

                        <p>Pedido pago - cartão de crédito</p>
                        <div className="div1">
                        <strong >5 produtos</strong>

                        <strong><u><a href="/" className="linkPedido" onClick={handleCardPedido}>Ver informações do pedido</a></u></strong>
                        </div>

                        <span>14:21</span>
                    </li>

                    <li className="pedidos">
                        <strong>Pedido 1</strong>

                        <p>Pedido pago - cartão de crédito</p>
                        <div className="div1">
                        <strong >5 produtos</strong>

                        <strong><u><a href="/" className="linkPedido" onClick={handleCardPedido}>Ver informações do pedido</a></u></strong>
                        </div>

                        <span>14:21</span>
                    </li>

                    <li className="pedidos">
                        <strong>Pedido 1</strong>

                        <p>Pedido pago - cartão de crédito</p>
                        <div className="div1">
                        <strong >5 produtos</strong>

                        <strong><u><a href="/" className="linkPedido" onClick={handleCardPedido}>Ver informações do pedido</a></u></strong>
                        </div>

                        <span>14:21</span>
                    </li>

                    <li className="pedidos">
                        <strong>Pedido 1</strong>

                        <p>Pedido pago - cartão de crédito</p>
                        <div className="div1">
                        <strong >5 produtos</strong>

                        <strong><u><a href="/" className="linkPedido" onClick={handleCardPedido}>Ver informações do pedido</a></u></strong>
                        </div>

                        <span>14:21</span>
                    </li>

                    <li className="pedidos">
                        <strong>Pedido 1</strong>

                        <p>Pedido pago - cartão de crédito</p>
                        <div className="div1">
                        <strong >5 produtos</strong>

                        <strong><u><a href="/" className="linkPedido" onClick={handleCardPedido}>Ver informações do pedido</a></u></strong>
                        </div>

                        <span>14:21</span>
                    </li>

                    <li className="pedidos">
                        <strong>Pedido 1</strong>

                        <p>Pedido pago - cartão de crédito</p>
                        <div className="div1">
                        <strong >5 produtos</strong>

                        <strong><u><a href="/" className="linkPedido" onClick={handleCardPedido}>Ver informações do pedido</a></u></strong>
                        </div>

                        <span>14:21</span>
                    </li>

                    <li className="pedidos">
                        <strong>Pedido 1</strong>

                        <p>Pedido pago - cartão de crédito</p>
                        <div className="div1">
                        <strong >5 produtos</strong>

                        <strong><u><a href="/" className="linkPedido" onClick={handleCardPedido}>Ver informações do pedido</a></u></strong>
                        </div>

                        <span>14:21</span>
                    </li>

                    
            </ul>

                          
            <section className="cover"></section>
        </div>
    )
}
