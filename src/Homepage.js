import React, { UseState, useState } from 'react'
import axios from 'axios'

export default function Homepage() {
    const [usuario, setUsuario] =useState ('Carlos')
    function enviar(){
        axios({method: "POST", url: "", // colocar o endereço do back end se estiver no site do render colocar
        data: { usuario: usuario}
    })
    
    }

    return(
        <div>
            <p> {usuario} </p>
            <form>
                <input onChange={(e) => {setUsuario(e.target.value)}} ></input>
                <button onClick={() => enviar()} ></button>
               
               
            </form>
        </div>
    )
}
