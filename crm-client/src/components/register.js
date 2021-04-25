import { useState } from "react";

function Register() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [credentials, setCredetntials] = useState({});

    const performLogin = () => {
        fetch('http://localhost:14700/auth/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
    }

    return <div>
        <label>
            Username:
            <input onChange={e => setCredetntials({ ...credentials, user: e.target.value })} />
        </label>
        <label>
            Password:
            <input onChange={e => setCredetntials({ ...credentials, pass: e.target.value })} />
        </label>
        <label>
            Password again:
            <input onChange={e => setButtonDisabled(credentials['pass'] !== e.target.value)} />
        </label>
        <button disabled={buttonDisabled} onClick={performLogin}>Register</button>
    </div>
}

export default Register;