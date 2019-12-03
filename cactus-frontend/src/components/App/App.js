import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Terms from '../pages-policy/Terms';
import PrivacyPolicy from '../pages-policy/Privacy-policy';
import CookiePolicy from '../pages-policy/Cookie-policy';
import Register from '../user/Register/Register';
import Login from '../user/Login/Login';
import Contacts from '../Contacts/Contacts';
import NotFound from '../NotFound';



class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/terms' component={Terms} />
          <Route path='/privacy' component={PrivacyPolicy} />
          <Route path='/cookies' component={CookiePolicy} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/contacts' component={Contacts} />
          <Route component={NotFound} />
          {/* <Route path='/menu' /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
