const fs = require('fs');
const { isNull } = require('util');

const express = require('express');
let contactsDb = require('./../db/db').contacts;
const Contact = require('./../models/contact');


const router = express.Router();


router.get('/:id', function (req, res) {
    const id = +req.params.id;
    console.log('the id from the get by id is - ',id);
    fs.readFile('./db/contacts.json', (err, data) => {
        if (err){
            console.log('the error is - ',err);
            return
        } else {
            contactsDb = JSON.parse(data);
            console.log('the contacts before any filtering are - ', contactsDb);
        console.log ("contact owner - ", req.body.Contact_Owner);
    const contacts = contactsDb.filter(c => c.Contact_Owner === req.body.Contact_Owner);
    console.log('the contacSSSSSSSSS - ',contacts);
    const contact = contacts.filter(con => con.Contact_Id === id);
    console.log('the contact is - ',contact);
    if (contact.length >0) {
        return res.send(contact);
    } else {
        return res.send("Contact does not exist or belongs to another user");
    }    
}
});
});



router.get('/', function (req, res) {
    console.log('request params get only',req.params);
    fs.readFile('./db/contacts.json', (err, data) => {
        if (err){
            console.log('the error is - ',err);
            return
        } else {
            contactsDb = JSON.parse(data);
    const contacts = contactsDb.filter(c => c.Contact_Owner === req.body.Contact_Owner);
    return res.send(contactsDb);
}
});
});

router.post('/', function (req, res) {
    try {
        const newContact = new Contact({
            Contact_Id: Math.floor(Math.random() * 1000000),
            Contact_Owner: req.User_Id,
            ...req.body
        });

        fs.access('./db/contacts.json', fs.F_OK, (err) => {
            if (err) {
                console.log('the error is - ', err);
                console.log('The file does not exist');
                contactsDb.push(newContact);
                var jsonContent = JSON.stringify(contactsDb);
    
                fs.writeFile("./db/contacts.json", jsonContent, function(err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
    
                    console.log("JSON file has been saved.");
                    console.log("this is in the access section", contactsDb);
                });
            } else {
                fs.readFile('./db/contacts.json', function readFileCallback(err, data) {
                        if (err) {
                            console.log('the error is - ', err);
                            console.log('The file does not exist');
                            contactsDb.push(newContact);
                            var jsonContent = JSON.stringify(contactsDb);
                
                            fs.writeFile("./db/contacts.json", jsonContent, function(err) {
                                if (err) {
                                    console.log("An error occured while writing JSON Object to File.");
                                    return console.log(err);
                                }
                
                                console.log("JSON file has been saved.");
                                console.log("this is in the access section", contactsDb);
                            });
                        } 
                    let contactsDb = JSON.parse(data);
                    if (contactsDb.find(c => c.Contact_Id === req.body.Contact_Id)) {
                        return console.log('contact already exists'); /*callback('contact already exist')*/ ;
                    } else {
                        contactsDb.push(newContact);
                        var jsonContent = JSON.stringify(contactsDb);
    
    
                        fs.writeFile("./db/contacts.json", jsonContent, function(err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
    
                            console.log("JSON file has been saved.");
                        });
                    }
                });
    
    
                console.log("yes file exists");
            }
    
    
        });
        res.status(201).send(newContact);
    }
    catch (ex) {
        res.status(400).send(ex.message);
    }
})


router.put('/:id', function (req, res) {
    const id = +req.params.id;

    fs.readFile('./db/contacts.json', (err, data) => {
        if (err){
            console.log('the error is - ',err);
            return
        } else {
            contactsDb = JSON.parse(data);
        //console.log ("contact owner - ", req.body.Contact_Owner);
            const contacts = contactsDb.filter(c => c.Contact_Owner === req.body.Contact_Owner);
    
            if (contacts.find(con => con.Contact_Id === id)) {
                const contact = contacts.find(con => con.Contact_Id === id);
                const newContact = new Contact({
                Contact_Id: id,
                Contact_Owner: req.User_Id,
                ...req.body
                });
                contactsDb.splice(contactsDb.indexOf(contact), 1, newContact);
                var jsonContent = JSON.stringify(contactsDb);
                fs.writeFile("./db/contacts.json", jsonContent, function(err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                    console.log("JSON file has been updated.");
                });
                res.status(201).send(newContact);

            } else {
                return res.send("Contact does not exist or belongs to another user");
        }   
        }
    
    });
});

router.delete('/:id', function (req, res) {
    const id = +req.params.id;

    fs.readFile('./db/contacts.json', function readFileCallback(err, data) {
        contactsDb = JSON.parse(data);
        //console.log('contactsDb is - ',contactsDb);
        const contacts = contactsDb.filter(c => c.Contact_Owner === req.body.Contact_Owner);
        //console.log("CONTACTS - ",contacts);

        
        if (contacts.find(con => con.Contact_Id === id)) {
            const contact = contacts.find(con => con.Contact_Id === id);
            console.log("the contact to delete is - ",contact);
            contactsDb.splice(contactsDb.indexOf(contact), 1);
            var jsonContent = JSON.stringify(contactsDb);
            
            
            fs.writeFile('./db/contacts.json', jsonContent, function(err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }
    
                console.log("JSON file has been deleted.");
                res.status(201).send("contact deleted");
                
            });
        } else {
            return res.send("Contact does not exist or belongs to another user");
            }      
    });
});





module.exports = router;