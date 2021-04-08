import  { useState,useEffect } from 'react';
import { Label, Menu, Grid, Table, Button } from 'semantic-ui-react';


function Contacts() {

    const [currentContacts, setCurrentContacts] = useState([]);

   //setCurrentContacts([...currentContacts])

    useEffect (() => {
    fetch('http://localhost:14700/contact', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
            'Content-type': 'application/json'
        }
    }).then(res => res.json().then(Jres => setCurrentContacts(Jres)))
    //console.log('After the fetch Jrse is - ',Jres);
    }, [])

    

    console.log('the list of contacts from the function are - ', currentContacts);
    

    return (
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
        
        {currentContacts.map((c,i) =><Table.Row key={c.Contact_Id}>
        <Table.Cell>{c.Contact_Id}</Table.Cell>
        <Table.Cell>{c.First_Name}</Table.Cell>
        <Table.Cell>{c.Last_Name}</Table.Cell>
        <Table.Cell>{c.Title}</Table.Cell>
        <Table.Cell><Button basic inverted>
        Details
      </Button></Table.Cell>
      </Table.Row>)}
    
      
    </Table.Body>

    
  </Table>
  <button className="ui fluid button">Create Contact</button>
      </Grid.Column>
    );
}

export default Contacts;