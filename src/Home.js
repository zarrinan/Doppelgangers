import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className="home">
        <image>
          <h1 className="title">Doppelgänger<div className="reverse">Doppelgängers</div></h1>
        </image>
        <img className="mainimg" src= "https://cdn.cliqueinc.com/posts/img/uploads/current/images/0/73/817/main.original.640x0c.jpg" />
        <div className="definition">According to age-old German folklore, all living creatures have a spirit double who is invisible but identical to the living individual. In 1796, German writer Johann Paul Richter coined the word Doppelgänger (from doppel-, meaning "double," and -gänger, meaning "goer") to refer to such specters.</div>
        <div id="enter"><Link to="/dashboard">Click here to find your Doppelgänger</Link></div>
        </div>

      </div>
    )
  }
}
