import React, {useState}  from "react";
import { useHistory } from "react-router-dom"
import { FiArrowLeft } from 'react-icons/fi'

import api from '../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'
import LinkCadastro from "../components/linkCadastro";

function NewIncident(params) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    const ongID = localStorage.getItem('ongId')

    async function handleNewIncident(event) {
        event.preventDefault()
        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongID
                }   
            })
            history.push('/profile')
            
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente mais tarde')
        }
        
    }


    return(
        <div className="new-incident-conteiner">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva resumidamente o caso para encontrar um herói.
                    </p>
                    <LinkCadastro to= "/profile" icon = {<FiArrowLeft size = {16} color="#e02041"/>}>
                        Voltar
                    </LinkCadastro>
                </section>
                <form>
                    <input 
                        placeholder= "Título do caso"
                        value = {title}
                        onChange = { event => setTitle(event.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value = {description}
                        onChange = { event => setDescription(event.target.value)}
                    />
                    <input 
                        placeholder = "Valor em reais"
                        value = {value}
                        onChange = { event => setValue(event.target.value)}
                    />
                    <button onClick= {handleNewIncident} className = "button" type = "submit"> Cadastrar</button>
                </form>
            </div>
        </div>
    )
    
}

export default NewIncident