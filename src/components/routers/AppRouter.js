import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';
import Dance_App from './components/DanceApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Main from './components/Main';
import Dance_Styles from './components/Dance_Styles';
import HipHop from '../HipHop';
import Salsa from '../Salsa';
import Wedding from '../Wedding';
import Modern from '../Modern';
import Swing from '../Swing';
import Belly from '../Belly';
import Instructors from '../Instructors';


const Routes = (
  <BrowserRouter>
  <div>
    <Route path='/' component={Main} exact={true}/>
    <Route path='/dance_styles' component={Dance_Styles}/>
    <Routh path='/teachers' component={Instructors}/>
    </div>
  </BrowserRouter>
);

export default Routes;