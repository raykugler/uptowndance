//three steps to using npm modules. 1.Install 2.Import 3.Use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';
import Dance_App from './components/DanceApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Main from './components/Main';
import Dance_Styles from './components/Dance_Styles';

const routes = (
  <BrowserRouter>
  <div>
    <Route path='/' component={Main} exact={true}/>
    <Route path='/dance_styles' component={Dance_Styles}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById('app'));





