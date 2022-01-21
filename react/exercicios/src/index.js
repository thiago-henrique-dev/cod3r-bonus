import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './components/Primeiro'
//import BomDia from './components/BomDIa.jsx'
//import Saudacao from './components/Saudacao'
//import Multi from './components/Multiplos'

import Pai from './components/Pai'
import Filho from './components/Filho'

//const elemento = <h1>React</h1>

ReactDOM.render( 
        <div>
            <Pai nome="Paulo" sobrenome="Silva" />
            <Filho nome="Pedro"/>
          {/*  <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/> */}
        </div>
    
    , 
        document.getElementById('root'))

