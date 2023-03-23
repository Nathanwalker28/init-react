import { useState } from "react";
const FruitForm = () => {
    const [newFruit, setNewFruit] = useState("dfdf");

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


    return(
        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder="ajouter un fruit..." value={newFruit} onChange={handleChange}/>
            <button>ajouter</button>
        </form> 
    );
}



export default FruitForm;