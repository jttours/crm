import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Settings from './components/Settings';
import Accounts from './components/Accounts';
import Contacts from './components/contacts';
import CreateContact from './components/CreateContact';

import Login from './components/login';
import Navigate from './components/Navigate';

function App() {
    return (
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
      </Switch>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default App;
