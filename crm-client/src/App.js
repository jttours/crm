import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from '../src/ducks/store';
import { Grid } from 'semantic-ui-react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from './components/login';
import Navigate from './components/Navigate';
import ViewContact from './components/ViewContact';
import Settings from './components/Settings';
import Accounts from './components/Accounts';
import Contacts from './components/contacts';
import CreateContact from './components/CreateContact';





function App() {
    return (
      <Provider store = {store}>
        <Grid celled>
        <Login />
           <Grid.Row>
           <Grid.Column width={2}>
                <Navigate /> 
           </Grid.Column>
            <Grid.Column width={14}>
            <Switch>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/accounts">
          <Accounts />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/createContact">
          <CreateContact />
        </Route>
        <Route path="/viewContact">
          <ViewContact />
        </Route>
      </Switch>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Provider>
    );
}

export default App;
