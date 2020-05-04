import React from 'react'
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profiles'
import NewIncident from './pages/NewIncident'
import Estoque from './pages/Estoque'
import CardPedido from './pages/CardPedido'
import AddCategory from './pages/AddCategory'
import Register2 from './pages/Register2'

export default function Routes() {
    return (      
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/register2" component={Register2} />

                <Route path="/profile" component={Profile} />
                <Route path="/cardPedido" component={CardPedido} />
                <Route path="/addCategory" component={AddCategory} />
                <Route path="/estoque" component={Estoque} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}