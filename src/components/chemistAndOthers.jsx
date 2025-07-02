
// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const listItems = chemists.map(person =>
//     <li>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// we are changing it into two separate list, using filter() and map()

export default function List() {
    const chemists = people.filter(person => person.profession === 'chemist');
    const others = people.filter(person => person.profession !== 'chemist');
    const listItems = chemists.map(person =>
      <li>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    );
    const otherItems = others.map(person =>
      <li>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    );
    return (
      <>
        <h2>Chemists</h2>
        <ul>{listItems}</ul>
        <h2>Others</h2>
        <ul>{otherItems}</ul>
      </>
    );
}

// export const recipes = [{
//   id: 'greek-salad',
//   name: 'Greek Salad',
//   ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
// }, {
//   id: 'hawaiian-pizza',
//   name: 'Hawaiian Pizza',
//   ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
// }, {
//   id: 'hummus',
//   name: 'Hummus',
//   ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
// }];

import { people } from './data.js';

export default function RecipesList() {
    return (
        <ul>
            {recipes.map(recipe => (
                <li key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <p>Ingredients:</p>
                    <ul>
                        {recipe.ingredients.map(ingredient => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}