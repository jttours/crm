import { Label, Menu, Grid, Table, Button } from 'semantic-ui-react';

export default function SideBarMenu () {
  

  const handleItemClick = (e, { name }) => ({ activeItem: name })

    return (
        <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
      <Menu vertical>
        <Menu.Item
          name='inbox'
          onClick={handleItemClick}
        >
          <Label color='teal'>1</Label>
          Contacts
        </Menu.Item>

        <Menu.Item
          name='spam'
          onClick={handleItemClick}
        >
          <Label>51</Label>
          Accounts
        </Menu.Item>

        <Menu.Item
          name='updates'
          onClick={handleItemClick}
        >
          <Label>1</Label>
          Settings
        </Menu.Item>
      </Menu>
      </Grid.Column>
      <Grid.Column width={13}>
      <Table inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Contact_ID</Table.HeaderCell>
        <Table.HeaderCell>First_Name</Table.HeaderCell>
        <Table.HeaderCell>Last_Name</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Buttons</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
        <Table.Cell>None</Table.Cell>
        <Table.Cell><Button basic inverted>
        Details
      </Button></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>Requires call</Table.Cell>
        <Table.Cell>None</Table.Cell>
        <Table.Cell><Button basic inverted>
        Details
      </Button></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>None</Table.Cell>
        <Table.Cell>None</Table.Cell>
        <Table.Cell><Button basic inverted>
        Details
      </Button></Table.Cell>
      </Table.Row>
      
    </Table.Body>

    
  </Table>
  <button className="ui fluid button">Create Contact</button>
      </Grid.Column>
    </Grid.Row>

    
  </Grid>
      
    )
  }

