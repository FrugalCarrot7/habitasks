import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';
import { Form, FormControl, FormLabel, Button } from "react-bootstrap";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <br/>
      <div className="form-container">
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <FormLabel>Email</FormLabel>
          <FormControl type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <FormLabel>Password</FormLabel>
          <FormControl type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <br />
          <Button type="submit">LOG IN</Button>
        </Form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
