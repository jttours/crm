
//import { Redirect, Route } from "react-router";
import { Button, Form, Segment } from 'semantic-ui-react';

function  Login() {
    const credentials = {};
    const setCredetntials = (type, value) => credentials[type] = value;
    const performLogin = () => {
        fetch('http://localhost:14700/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(res => res.text().then(jRes => window.localStorage.setItem('token', jRes)));
    }
    return (
    <Segment inverted className="loginWindow">
      <Form inverted>
        <Form.Group widths='equal'>
          <Form.Input fluid label='User' placeholder='User' onChange={e => setCredetntials('user', e.target.value)}/>
          <Form.Input fluid label='Password' placeholder='Password' onChange={e => setCredetntials('pass', e.target.value)}/>
        </Form.Group>
        <Button onClick={performLogin}>Login</Button>
      </Form>
    </Segment>
    )
  }
  export default Login

// function Login() {
//     const credentials = {};
//     const setCredetntials = (type, value) => credentials[type] = value;
//     const performLogin = () => {
//         fetch('http://localhost:14700/login', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(credentials)
//         }).then(res => res.text().then(jRes => window.localStorage.setItem('token', jRes)));
//     }

//     return <div>
//         <label>
//             Username:
//             <input onChange={e => setCredetntials('user', e.target.value)} />
//         </label>
//         <label>
//             Password:
//             <input onChange={e => setCredetntials('pass', e.target.value)} />
//         </label>
//         <button onClick={performLogin}>Login</button>
//     </div>
// }

// export default Login;