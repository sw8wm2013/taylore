import { render } from 'react-dom';
import React from 'react';

import './App.scss';
import Headphones from './assets/Headphones';


const App = () => 
     (
        <div className="title-container">
            <h1>Taylore</h1>
            <Headphones/>
        </div>
    )
;

render(<App></App>, document.getElementById('root'));
