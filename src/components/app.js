import React from 'react';
import { Route } from 'react-router-dom';
import List from './list';
import AddItem from './add_item';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => (
    <div className="container">
        <Route exact path="/" component={List} />
        <Route path="/add_item" component={AddItem} />
    </div>
);

export default App;
