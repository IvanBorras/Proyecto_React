import '../../scss/index.css'

function Recipe({data}) {

    const listIngredients = data.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)


  return (
   <article>
        <h3>{data.name}</h3>
        <img className="imgRecipes"  src={data.image} alt=""></img>
        <h4>{`${data.type[0]} ${data.type[1]}`}</h4>
        <h4>{data.taste}</h4>
        <p className='precipe'>{data.description}</p>
        <ul>{listIngredients}</ul>
   </article>
  )
}

export default Recipe;


