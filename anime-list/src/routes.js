import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Animes from './pages/Animes';
import Anime from './pages/Anime';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Animes} />
            <Route path="/anime/:id" component={Anime} />
        </Switch>
    </BrowserRouter>
);

export default Routes;