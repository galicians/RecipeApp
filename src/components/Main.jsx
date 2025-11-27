import { useState } from "react";

export default function Main() {

    const ingredients = ['Apple','Rice','Yogurt']
    const [stateIngredients, setStateIngredients] = useState(ingredients);
    const listIngredients = stateIngredients.map( ingredient => <li key={ingredient}>{ingredient}</li>)


    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setStateIngredients( prevStateIngredients => [...prevStateIngredients,newIngredient])
    }



    return (
        <>
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
        <input 
            className=""
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
        ></input>
        <button className="ingredient-input">"Add ingredient</button>
        </form>
        <div className="ingredients-list-container">
        <ul>
            {listIngredients}
        </ul>
        </div>
        </main>
        </>
    )
}