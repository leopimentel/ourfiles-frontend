import {BrowserRouter, Route, Switch} from 'react-router-dom'

import React from 'react'
import Main from './pages/Main'
import Box from './pages/Box'

/* Switch apenas uma rota por vez */

const Routes = () => (
    // como as rotas vao se comportar
    <BrowserRouter>        
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Routes;