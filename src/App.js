import React, { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

const App = () => {
  //state (etat, donnees)
  // let[count, setCount] = useState(1);

  const [fruits, setFruits] = useState([
    {id: 1, name: "Banane"},
    {id: 2, name: "Pêche"},
    {id: 3, name: "Pomme"}
  ]);

  const cars = [<li>Tesla</li>, <li>Bmw</li>, <li>Audi</li> ];

  const [newFruit, setNewFruit] = useState("dfdf");
  
  //comportements
  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  const handleDelete = (id) => {
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id);
    setFruits(fruitsCopyUpdated);
  }

  // const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fruitsCopy = fruits.slice();

    const id = new Date().getTime();
    const name = newFruit;

    fruitsCopy.push({id, name});

    setFruits(fruitsCopy);

    setNewFruit("");
    // collecte de données methodes 
    //console.log(inputRef.current.value);
  }

  const handleChange = (event) => {
    setNewFruit(event.target.value);
  }
  
  //affichage (render)
  return(
    <div>
      {/* <h1>{count}</h1>
      <button onClick={handleClick}>Incrémente</button> */}

      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) =>  
          // <li key={fruit.id} >{fruit.name} <button onClick={() => handleDelete(fruit.id)}>supprimer</button></li>
          <Fruit  fruitInfo={fruit} onDeleteFruit={handleDelete}/>
        )}
      </ul> 

      {/* Gestion de formulaire */}
      {/* 1. création du formulaire */}
      {/* <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder="ajouter un fruit..." value={newFruit} onChange={handleChange}/>
        <button>ajouter</button>
      </form> */}
      <FruitForm />
      {/* 2. soumission du formulaire */}

      {/* 3. collecte de données du formulaire */}
    </div>
  )
}

export default App;
