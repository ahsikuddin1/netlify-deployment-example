import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Team from './Team';
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get('https://pacific-hamlet-09299.herokuapp.com/teams');
      setTeams(response.data);
      console.log('teams achieved')
    }
    apiCall();
    return () => console.log('team will unmount!');
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/team/Bits Please">Bits Please</Link>
        <Link to="/team/Smacké">Smacké</Link>
        <Link to="/team/Breaking Bad Habits">Breaking Bad Habits</Link>
        <Link to="/team/Team Bleu">Team Bleu</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <h3>Home!</h3>
          </Route>
          <Route path="/team/:banana">
            <Team teams={teams} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
