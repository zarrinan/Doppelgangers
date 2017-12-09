import React, { Component } from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom';

class Protected extends Component {
  constructor(props) {
    super(props);
    this.state = { pics: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to pics in Firebase Database */
    let picsRef = firebase.database().ref('pics').orderByKey().limitToLast(100);
    picsRef.on('child_added', snapshot => {
      /* Update React state when pic is added at Firebase Database */
      let pic = { text: snapshot.val(), id: snapshot.key };
      this.setState({ pics: [pic].concat(this.state.pics) });
    })
  }
  addPic(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the pic to Firebase */
    firebase.database().ref('pics').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <div>
      <form className="search" onSubmit={this.addPic.bind(this)}>
      Enter your image URL here to see if you have a Doppelgänger!<br/>
        <input className="long" type="text" ref={ el => this.inputEl = el } placeholder="Enter your URL"/><br/>

        <input className="submit" type="submit"/>
        <ul className="picList">
          { /* Render the list of pics */
            this.state.pics.map( pic => <li key={pic.id}><img src={pic.text}/><img src={pic.text}/><p> You found a match! </p></li> )
          }
        </ul>
      </form>
      </div>
    );
  }
}

export default Protected;


