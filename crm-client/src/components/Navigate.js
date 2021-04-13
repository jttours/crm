import { Label, Menu, Grid } from 'semantic-ui-react';
// import Settings from './Settings';
// import Accounts from './Accounts';
// import Contacts from './contacts';



function Navigate() {

    const handleItemClick = (e, { name }) => ({ activeItem: name })


    return (
        
            <Grid.Column width={3}>
      <Menu vertical>
        <Menu.Item
          name='contacts' href="contacts"
          onClick={handleItemClick}
        >
          <Label color='teal'>1</Label>
          Contacts
        </Menu.Item>

        <Menu.Item
          name='accounts' href="accounts"
          onClick={handleItemClick}
        >
          <Label>51</Label>
          Accounts
        </Menu.Item>

        <Menu.Item
          name='settings' href="settings"
          onClick={handleItemClick}
        >
          <Label>1</Label>
          Settings
        </Menu.Item>
      </Menu>
      {/* <Switch>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/accounts">
          <Accounts />
        </Route>
        <Route path="/settingss">
          <Settings />
        </Route>
      </Switch> */}
      </Grid.Column>
       
    )
}

export default Navigate;
