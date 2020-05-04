import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiUser, FiX } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/americanas-logo.png'
import iconPhoto from '../../assets/insert_photo-6.png'
import Food from '../../assets/local_dining-24px.png'
import Drink from '../../assets/local_bar-24px.png'
import Hygiene from '../../assets/hygienic.png'
import productImage from '../../assets/insert_photo-24px.png'

export default function AddCategory() {

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
    function handleAddCategory(e) {
        e.preventDefault()
        history.push('/addCategory')
    }

    return (
        <div className="profile-container4">
            <header>
                <img src={logoImg} alt="Be The Hero"/>

                <button className="button2" onClick={handleLogout}>
                    <FiUser size={48}  color="#e02041" />
                </button>
            </header>
            <div className="divHeader">
                <div className="divHeader1">
                <a href="/" onClick={handleAddCategory}><span>Adicionar categoria</span></a>
                    <h1>Adicionar produto</h1>
                </div>
                <div className="divHeader2">
                    <a href="/" onClick={handleProfile}><span className="spanPedido">Pedidos</span></a>
                    <a href="/" onClick={handleEstoque}><span>Estoque</span></a>
                </div>
                
            </div>

            <hr className="hr"></hr>
            <br></br><br></br>

            <div className="divUl">
            <ul>
                    <li>
                        <strong>Comidas</strong>

                        <div>
                            <img src={Food} alt="Food"/>
                        </div>

                        <strong className="strongUl">17 produtos disponíveis</strong>
                      

                        <strong><u>Ver tudo</u></strong>
                        
                    </li>

                    <li>
                        <strong>Comidas</strong>

                        <div>
                            <img src={Drink} alt="Drink"/>
                        </div>

                        <strong className="strongUl">17 produtos disponíveis</strong>
                      

                        <strong><u>Ver tudo</u></strong>
                        
                    </li>

                    <li>
                        <strong>Comidas</strong>

                        <div>
                            <img src={Hygiene} alt="Hygiene"/>
                        </div>

                        <strong className="strongUl">17 produtos disponíveis</strong>
                      

                        <strong><u>Ver tudo</u></strong>
                        
                    </li>

                    <li>
                        <strong>Comidas</strong>

                        <div>
                            <img src={Food} alt="Food"/>
                        </div>

                        <strong className="strongUl">17 produtos disponíveis</strong>
                      

                        <strong><u>Ver tudo</u></strong>
                        
                    </li>

                    <li>
                        <strong>Comidas</strong>

                        <div>
                            <img src={Drink} alt="Drink"/>
                        </div>

                        <strong className="strongUl">17 produtos disponíveis</strong>
                      

                        <strong><u>Ver tudo</u></strong>
                        
                    </li>

                    <li>
                        <strong>Comidas</strong>

                        <div>
                            <img src={Hygiene} alt="Hygiene"/>
                        </div>

                        <strong className="strongUl">17 produtos disponíveis</strong>
                      

                        <strong><u>Ver tudo</u></strong>
                        
                    </li>

                    <li>
                        <strong>Comidas</strong>

                        <div>
                            <img src={Food} alt="Food"/>
                        </div>

                        <strong className="strongUl">17 produtos disponíveis</strong>
                      

                        <strong><u>Ver tudo</u></strong>
                        
                    </li>

                    <li>
                        <strong>Comidas</strong>

                        <div>
                            <img src={Drink} alt="Drink"/>
                        </div>

                        <strong className="strongUl">17 produtos disponíveis</strong>
                      

                        <strong><u>Ver tudo</u></strong>
                        
                    </li>

                    <li>
                        <strong>Comidas</strong>

                        <div>
                            <img src={Hygiene} alt="Hygiene"/>
                        </div>

                        <strong className="strongUl">17 produtos disponíveis</strong>
                      

                        <strong><u>Ver tudo</u></strong>
                        
                    </li>

                    
            </ul>
            </div>

                <section className="box-delivery1">
                    <strong className="title">Adicione uma categoria</strong>
                    <span className="span1">Aqui você pode adicionar uma categoria com nome, descrição e imagem para anexar produtos a ela depois.</span>
                    <div className="box">
                        <input 
                        type="text" 
                        className="inputCategory"
                        placeholder="Adicione um nome"
                        autofocus
                        ></input>

                        <textarea 
                        type="text" 
                        className="textarea1"
                        placeholder="Adicione uma descrição"
                        ></textarea>

                        <button className="buttonBox">Adicionar</button>
                        <div className="image">
                            <img src={productImage} alt="productImage"/>
                        </div>
                        
                        
                    </div>
                    

                       
                        <a href="/" onClick={handleEstoque}><FiX
                            className="iconX"
                            size={40}  
                            color="#000" 
                        />
                        </a>
                   
                </section>            
            <section className="cover"></section>
        </div>
    )
}
