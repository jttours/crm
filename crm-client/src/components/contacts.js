//import  { useState } from 'react';
import { Grid, Table, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
//import { getContacts, contactsReceived } from '../ducks/actions';


function Contacts(props) {
    //const [contactId,setContactId]= useState();

    let history = useHistory();

    function goToCreateContact() {
      history.push('/createContact');
    };

    function goToViewContact() {
      history.push('/viewContact');
      // setContactId = e.target.value;
      // console.log('the id is -',setContactId);
    };
    

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
        {console.log('props are - ', props)}
        {props.contactsList.map((c) =><Table.Row key={c.Contact_Id}>
        <Table.Cell>{c.Contact_Id}</Table.Cell>
        <Table.Cell>{c.First_Name}</Table.Cell>
        <Table.Cell>{c.Last_Name}</Table.Cell>
        <Table.Cell>{c.Title}</Table.Cell>
        <Table.Cell><Button basic inverted value= {c.Contact_Id} onClick={goToViewContact}>
        Details
      </Button></Table.Cell>
      </Table.Row>)}
    
      
    </Table.Body>

    
  </Table>
  <button className="ui fluid button" onClick={goToCreateContact}>Create Contact</button>
      </Grid.Column>
    );
}

const mapStateToProps = state => 
  ({
  contactsList: state 
})

// const mapDispatchToProps = dispatch => {
//   return {
//     receiveContacts: contacts => {
//       dispatch(getContacts());
//     }
//   };
// };

export default connect(mapStateToProps)(Contacts);