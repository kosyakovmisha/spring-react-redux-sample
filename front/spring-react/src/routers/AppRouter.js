import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddFilm from '../components/AddFilm';
import EditFilm from '../components/EditFilm';
//import NotFound from '../components/NotFound';


const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/add" component={AddFilm} />
                <Route path="/film/:id" component={EditFilm} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;