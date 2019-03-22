import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Animes from './pages/Animes';
import Anime from './pages/Anime';
import TodoList from './pages/TodoList';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Animes} />
            <Route path="/anime/:id" component={Anime} />
            <Route path="/todolist" component={TodoList} />
        </Switch>
    </BrowserRouter>
);

export default Routes;