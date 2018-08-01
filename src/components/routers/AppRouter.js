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

const Routes = (
  <BrowserRouter>
  <div>
    <Route path='/' component={Main} exact={true}/>
    <Route path='/dance_styles' component={Dance_Styles}/>
    <Route path='/salsa' component={Salsa}/>
    <Route path='/tango' component={Tango}/>
    <Route path='/hiphop' component={HipHop}/>
    <Route path='/wedding' component={Wedding}/>
    <Route path='/modern' component={Modern}/>
    <Route path='/swing' component={Swing}/>
    <Route path='/belly' component={Belly}/>
    </div>
  </BrowserRouter>
);

export default Routes;