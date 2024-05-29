
function Recipe({data}) {

    const listIngredients = data.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)


  return (
   <article>
        <h3>{data.name}</h3>
        <img src={data.image} alt=""></img>
        <h4>{`${data.type[0]} ${data.type[1]}`}</h4>
        <h4>{data.taste}</h4>
        <p>{data.description}</p>
        <ul>{listIngredients}</ul>
   </article>
  )
}

export default Recipe

//h3 - nombre receta
//img - imagen receta
//h4 - tipo receta
//h4 - sabor de receta
//p - descripcion receta
//p - ingredientes ul

