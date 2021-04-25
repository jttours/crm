import { Grid } from 'semantic-ui-react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Navigate from './components/Navigate';
import ViewContact from './components/ViewContact';
import Settings from './components/Settings';
import Accounts from './components/Accounts';
import Contacts from './components/contacts';
import CreateContact from './components/CreateContact';



function MainPage() {
    return (
        <Grid celled>
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
    )
}

export default MainPage
