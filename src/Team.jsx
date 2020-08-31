import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Team(props) {
  const params = useParams();

  useEffect(() => {
    console.log('heyo sandy what is GOOD my man')
  }, [])

  // doesn't do anything, just a .find() example
  const secondTeam = props.teams.find((team, index) => index === 1);
  console.log(secondTeam);
  const team = props.teams.find((team) => params.banana === team.name);

  return (
    <div>
      {team
        ? (
          <>
            <h3>They are known as... {team.name}</h3>
            <h4>Current Score: {team.score}</h4>
            <ul>
              {
                team.members.map((item, index) => (<li key={index}>{item}</li>))
              }
            </ul>
          </>
        )
        : <h3>No team found!</h3>
      }

    </div>
  )
}
