import React from 'react';
import List from './list';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => (
    <div>
        <div className="container">
        <h1 className="center">To Do List</h1>
        <List />
        </div>
    </div>
);

export default App;
