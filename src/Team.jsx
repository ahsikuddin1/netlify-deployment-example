import React from 'react';
import { useParams } from 'react-router-dom';

import teams from './teams.json';

export default function Team() {
  const params = useParams();
  console.log(params.name)

  const team = teams.find((team) => params.name === team.name);
  console.log(team);

  return (
    <div>
      <h3>They are known as... {team.name}</h3>
      <h4>Current Score: {team.score}</h4>
      <ul>
        {
          team.members.map((item, index) => (<li key={index}>{item}</li>))
        }
      </ul>
    </div>
  )
}
