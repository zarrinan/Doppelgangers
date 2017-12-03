import React, { Component } from 'react';
import fire from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pics: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to pics in Firebase Database */
    let picsRef = fire.database().ref('pics').orderByKey().limitToLast(100);
    picsRef.on('child_added', snapshot => {
      /* Update React state when pic is added at Firebase Database */
      let pic = { text: snapshot.val(), id: snapshot.key };
      this.setState({ pics: [pic].concat(this.state.pics) });
    })
  }
  addPic(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the pic to Firebase */
    fire.database().ref('pics').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <form onSubmit={this.addPic.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          { /* Render the list of pics */
            this.state.pics.map( pic => <li key={pic.id}>{pic.text}</li> )
          }
        </ul>
      </form>
    );
  }
}

export default Protected;
