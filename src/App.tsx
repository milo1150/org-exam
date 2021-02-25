import React from 'react';
import Applicant from './containers/marathon/Applicant';
import Joke from './containers/Joke/Joke';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Applicant} />
        <Route exact={true} path="/joke" component={Joke} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
