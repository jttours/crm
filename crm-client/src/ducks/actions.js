import * as actions from './actionTypes';

export const getContacts= () => {
    return dispatch => {fetch('http://localhost:14700/contact', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
        'Content-type': 'application/json'
    }
}).then(res => res.json().then(Jres => dispatch(contactsReceived(res.data))))};
};

export function contactsReceived(){
    return {
        type: actions.CONTACTS_RECEIVED
      }
};

export function contactByIdReceived (Contact_Id){
    return {
        type: actions.CONTACT_BY_ID,
        payload: {
          Contact_Id
        }
      }
};

export function contactAdded (){
    return {
        type: actions.CONTACT_ADDED,
        payload : {
        
            "Contact_Owner": 1,
            "First_Name": "Maoro",
            "Title": "CEO",
            "Last_Name": "Maoro",
            "Last_Login": "17/03/2021 21:22",
            "Phone": "02-1122334",
            "Mobile": "054-5556667",
            "Fax": "02-1231231",
            "Email": "some@mail.com",
            "Secondary_Email": "second@email.com",
            "Skype_ID": 123123,
            "Description": "Good customer",
            "Street": "Hakmei lublin",
            "City": "Jerusalem",
            "Zip_Code": 12312,
            "Country": "Israel"
        }
      }
};

export function contactDeleted (Contact_Id){
    return {
        type: actions.CONTACT_DELETED,
        payload: {
          Contact_Id
        }
      }
};

