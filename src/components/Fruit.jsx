const Fruit = ({fruitInfo, onDeleteFruit}) => {
    return(
        <li key={fruitInfo.id} >
            {fruitInfo.name} 
            <button onClick={() => onDeleteFruit(fruitInfo.id)}>supprimer</button>
        </li>
    );
}

export default Fruit;