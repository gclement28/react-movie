import React, {Component} from 'react';
import axios from 'axios';

const url = 'https://post-a-form.herokuapp.com/api/movies/';

class FormMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namefilm: '',
      url: '',
      poster: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    axios.post(url, this.state)
    .then(res => res.data)
    .then(res => {
      alert(`Film ajouté avec l'ID ${res.id} !`);
    })
    .catch(e => {
      console.error(e);
      alert(`Erreur lors de l'ajout du film : ${e.message}`);
    });
  }


  render() {
    return (
      <div className="FormMovie">
      <h1>Saisie d'un employé</h1>
    
      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className="form-data">
            <label htmlFor="namefilm">Nom du film</label>
            <input
              type="text"
              id="namefilm"
              name="namefilm"
              onChange={this.onChange}
              value={this.state.namefilm}
            />
          </div>
    
          <div className="form-data">
            <label htmlFor="poster">Poster</label>
            <input
              type="text"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
            />
          </div>
    
          <div className="form-data">
            <label htmlFor="textarea">Commentaire</label>
            <input
              type="textarea"
              id="textarea"
              name="textarea"
              onChange={this.onChange}
              value={this.state.textarea}
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Envoyer" />
          </div>
        </fieldset>
      </form>
    </div>
    )
  }
}

export default FormMovies;

