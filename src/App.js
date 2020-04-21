import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import UserLayout from './layout/UserLayout';
import HomePage from './layout/HomePage';


function App() {
  return (
    <div >
      <Switch>
        <UserLayout>
          <Switch>
          <Route path="/" component={HomePage}/>
          </Switch>
        </UserLayout>
      </Switch>
    </div>
  );
}

export default App;
