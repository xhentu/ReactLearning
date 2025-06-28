// this is a lesson from react.dev/learn

import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

// Profile.jsx
// import { getImageUrl } from './utils.js';

// export default function Profile({ name, imageId, profession, awards, discovery }) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(imageId)}
//         alt={name}
//         width={70}
//         height={70}
//       />
//       <ul>
//         <li><b>Profession: </b>{profession}</li>
//         <li><b>Awards: {awards.length}</b> ({awards.join(', ')})</li>
//         <li><b>Discovered: </b>{discovery}</li>
//       </ul>
//     </section>
//   );
// }

// Gallery.jsx
// import Profile from './Profile.js';

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         name="Maria Skłodowska-Curie"
//         imageId="szV5sdG"
//         profession="physicist and chemist"
//         awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
//         discovery="polonium (chemical element)"
//       />
//       <Profile
//         name="Katsuko Saruhashi"
//         imageId="YfeOqp2"
//         profession="geochemist"
//         awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
//         discovery="a method for measuring carbon dioxide in seawater"
//       />
//     </div>
//   );
// }

// utils.js
// export function getImageUrl(imageId) {
//   return `https://i.imgur.com/${imageId}.jpg`;
// }

