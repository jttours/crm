import * as actions from './actionTypes';

// let contacts;
const contacts = [
    // {
    //     "Contact_Owner": 2,
    //     "Contact_Id": 2,
    //     "First_Name": "Contact 2",
    //     "Last_Name": "Last contact 2"
    // },
    // {
    //     "Contact_Owner": 1,
    //     "Contact_Id": 3,
    //     "First_Name": "Elton",
    //     "Title": "CEO",
    //     "Last_Name": "John",
    //     "Last_Login": "17/03/2021 21:22",
    //     "Phone": "02-1122334",
    //     "Mobile": "054-5556667",
    //     "Fax": "02-1231231",
    //     "Email": "some@mail.com",
    //     "Secondary_Email": "second@email.com",
    //     "Skype_ID": 123123,
    //     "Description": "Good customer",
    //     "Street": "Hakmei lublin",
    //     "City": "Jerusalem",
    //     "Zip_Code": 12312,
    //     "Country": "Israel"
    // },
    // {
    //     "Contact_Owner": 1,
    //     "Contact_Id": 920478,
    //     "First_Name": "Elton",
    //     "Title": "CEO",
    //     "Last_Name": "John",
    //     "Last_Login": "17/03/2021 21:22",
    //     "Phone": "02-1122334",
    //     "Mobile": "054-5556667",
    //     "Fax": "02-1231231",
    //     "Email": "some@mail.com",
    //     "Secondary_Email": "second@email.com",
    //     "Skype_ID": 123123,
    //     "Description": "Good customer",
    //     "Street": "Hakmei lublin",
    //     "City": "Jerusalem",
    //     "Zip_Code": 12312,
    //     "Country": "Israel"
    // },
    // {
    //     "Contact_Owner": 1,
    //     "Contact_Id": 313695,
    //     "First_Name": "Omar",
    //     "Title": "CEO",
    //     "Last_Name": "John",
    //     "Last_Login": "17/03/2021 21:22",
    //     "Phone": "02-1122334",
    //     "Mobile": "054-5556667",
    //     "Fax": "02-1231231",
    //     "Email": "some@mail.com",
    //     "Secondary_Email": "second@email.com",
    //     "Skype_ID": 123123,
    //     "Description": "Good customer",
    //     "Street": "Hakmei lublin",
    //     "City": "Jerusalem",
    //     "Zip_Code": 12312,
    //     "Country": "Israel"
    // },
    // {
    //     "Contact_Owner": 1,
    //     "Contact_Id": 496403,
    //     "First_Name": "Omar",
    //     "Title": "CEO",
    //     "Last_Name": "John",
    //     "Last_Login": "17/03/2021 21:22",
    //     "Phone": "02-1122334",
    //     "Mobile": "054-5556667",
    //     "Fax": "02-1231231",
    //     "Email": "some@mail.com",
    //     "Secondary_Email": "second@email.com",
    //     "Skype_ID": 123123,
    //     "Description": "Good customer",
    //     "Street": "Hakmei lublin",
    //     "City": "Jerusalem",
    //     "Zip_Code": 12312,
    //     "Country": "Israel"
    // }
];

// const contacts= () => {fetch('http://localhost:14700/contact', {
//     method: 'GET',
//     headers: {
//         'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
//         'Content-type': 'application/json'
//     }
// }).then(res => res.json().then(Jres => contacts = Jres)).then(()=> console.log('contacts - ', contacts));}

//console.log('initialState1 is - ',contacts);
//console.log('After the fetch Jrse is - ',Jres);


let lastId = 1000;

export default function reducer (state = contacts, action){
    switch (action.type) {
        case actions.CONTACTS_RECEIVED:
            return {
                ...state,
                contacts: action.payload
            };
        case actions.CONTACT_BY_ID:
            return state.filter(contact => contact.Contact_Id === action.payload.Contact_Id);
        case actions.CONTACT_ADDED:
            return [
                ...state, 
                {
                    Contact_Id: ++lastId,
                    ...action.payload.data
                }
            ];
        case actions.CONTACT_UPDATED:
        case actions.CONTACT_DELETED:
            return state.filter(contact => contact.Contact_Id !== action.payload.Contact_Id);
        default:
            return state;               
    }
}