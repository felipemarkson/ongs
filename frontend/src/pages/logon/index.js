import React, {useState} from 'react'
import { FiLogIn } from 'react-icons/fi'
import { useHistory } from "react-router-dom";

import './styles.css'

import api from '../services/api'
import LinkCadastro from "../components/linkCadastro";

import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Logon(props) {

    const [id, setId] = useState('')
    const history = useHistory();

    async function handleLogon(event) {
        event.preventDefault()

        try {
            const response = await api.post('sessions',{ id })
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')

        } catch (error) {
            alert('Falha no login, tene novamente mais tarde')
            
        }
        
    }


    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo do site"/>
                <form onSubmit = {handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        type="text" 
                        placeholder="Seu ID"
                        value = {id}
                        onChange = {event => setId(event.target.value)}
                    />
                    <button className = "button" type="submit">Entrar</button>
                    <LinkCadastro to= "/register" icon = {<FiLogIn size = {16} color="#e02041"/>}>
                        Não tenho cadastro
                    </LinkCadastro>
                </form>


            </section>

            <img src={herosImg} alt="Imagem sobre companherismo"/>
        </div>

    )
}

export default Logon