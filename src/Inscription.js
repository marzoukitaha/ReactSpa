import React, { Component } from "react";



class Inscription extends Component {
render() {
    return (
        <form>
            <div>
  <label>
    Nom :
    <input type="text" name="name" />
  </label>
  </div>
  <div>
  <label>
    Prenom :
    <input type="text" name="prenom" />
  </label>
  </div>
  <div>

  <label>
    Email :
    <input type="text" name="Email" />
  </label>
  
  <input type="submit" value="Envoyer" />
  </div>
<div>
<label for="pet-select">Choose a pet:</label>

<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>
</div>
</form>
      );
    };
}

export default Inscription;