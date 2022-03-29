import React from 'react'
import { useParams } from 'react-router-dom';

// export default function OneChar() {
//     return (
//         <div>
//             <p>JJJJ</p> 
//         </div>
//     )
// }

const OneChar = ({data}) => {
    const {id} = useParams()
    let char = data[id]
    return (
        <div>
            <img
              className="image"
              src={char.image}
              style={{ width: "50%", height: "50%" }}
            />
            <h1>{char.name}</h1>
            <h2>Species: {char.species} </h2>
                <div>
                    <p className="addInfo">Status: {char.status}</p>
                    <p className="addInfo">
                    Number of episodes: {char.episode.length}
                    </p>
                    <p className="addInfo">Gender: {char.gender}</p>
                    <p className="addInfo">Location: {char.location.name}</p>
                </div>
        </div>
    )
}

export default OneChar;