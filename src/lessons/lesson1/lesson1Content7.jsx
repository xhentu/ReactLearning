import RecipeList from "../../components/RecipeList";
import '../../static/css/mainButton.css';

export default function Lesson1Content7() {

    return (
        <>
            <h2 className="orange-text underline">Rendering Lists</h2>
            <p>We use an array and map(), filter() and forEach() {`array methods `}to loop that array. Classic, right?</p>
            <p className="red-text">One thing to note especially is we manipulate the array, but dont touch the original array. But assign them 
                to a new variable. This is because we dont want to mutate the original array. And keep the original array intact. 
                And since we are using map, filter and forEach array methods, we are not mutating the original array. Right?
            </p>
            <p>Whatever! lets move on.</p>
            <RecipeList />
            <p>As we know, this list is rendered by the code below.</p>
            <pre>
                <code>
                    {`
export default function RecipeList() {

    const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}`}
                </code>
            </pre>
            <hr />
        </>
    )
}