import {  Form, Dropdown, Button } from 'semantic-ui-react';


const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
];



function CreateContact() {
    return (
        <Form>
    <Form.Group unstackable widths={2}>
      <Form.Input placeholder='First name' />
      <Form.Input placeholder='Fax' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input placeholder='Last name' />
      <Form.Input placeholder='Email' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input placeholder='Title' />
      <Form.Input placeholder='Secondary_email' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input placeholder='Date of Birth' />
      <Form.Input placeholder='Skype ID' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input placeholder='Phone' />
      <Form.Input placeholder='Mobile' />
    </Form.Group>
    <Form.Field control='textarea'  placeholder='Description' rows='8' />
    <Form.Group widths={2}>
      <Form.Input placeholder='Street' />
      <Form.Input placeholder='City' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input placeholder='Zip Code' />
      <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
  />
    </Form.Group>
    <Button fluid>Save Contact</Button>
    
  </Form>
    )
}

export default CreateContact
