import React, {useState}  from "react";
import { FiArrowLeft } from 'react-icons/fi'

import {useHistory} from 'react-router-dom'

import LinkCadastro from "../components/linkCadastro";

import api from '../services/api'


import './styles.css'
import logoImg from '../../assets/logo.svg'

function Register(params) {

    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [wpp, setWpp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')


    async function handleRegister(event) {
        event.preventDefault();

        const data = {
                name,
                email,
                city,
                uf,
                wpp
        }

        try {          
            const response = await api.post('ongs', data)
            alert(`Seu ID de Acesso: ${response.data.id}`)
            history.push('/')
        } catch (error) {
            alert("Erro no cadastro, tente novamente mais tarde")            
        }
        
    }

    return(
        <div className="register-conteiner">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas
                        a encontrarem os casos de sua ong
                    </p>
                    <LinkCadastro to= "/" icon = {<FiArrowLeft size = {16} color="#e02041"/>}>
                        Já possuo cadastro
                    </LinkCadastro>
                </section>
                <form onSubmit = {handleRegister}>
                    <input 
                        placeholder = "Nome da ONG"
                        value = {name}
                        onChange = {event => setName(event.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder = "E-mail"
                        value = {email}
                        onChange = {event => setEmail(event.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder = "Whatsapp com DDD" 
                        maxLength="11"
                        value = {wpp}
                        onChange = {event => setWpp(event.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder = "Cidade"
                            value = {city}
                            onChange = {event => setCity(event.target.value)}
                        />
                        <input 
                            placeholder = "UF" 
                            maxLength="2"
                            value = {uf}
                            onChange = {event => setUf(event.target.value)}
                        />
                    </div>
                    <button className = "button" type = "submit"> Cadastrar</button>
                </form>
            </div>
        </div>
    )
    
}

export default Register