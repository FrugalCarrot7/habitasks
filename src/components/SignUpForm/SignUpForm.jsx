import { Component, useState } from 'react'
import { signUp } from '../../utilities/users-service'
import './SignUpForm.css'
import { Form, FormControl, FormLabel, Table, Button } from "react-bootstrap";

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (evt) => {
      this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
      })
    }

    handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
        const formData = {...this.state}
        delete formData.error
        delete formData.confirm
        const user = await signUp(formData)
        this.props.setUser(user)
      } catch(err) {
        console.log(err)
        this.setState({error: 'Sign Up Failed - Try Again'})
      }
    }

    render() {
      const disable = this.state.password !== this.state.confirm;
      return (
        
        <div>
          <div className="form-container">
            <Form autoComplete="off" onSubmit={this.handleSubmit}>
              <FormLabel>Name</FormLabel>
              <FormControl type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              <br /><FormLabel>Email</FormLabel>
              <FormControl type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
              <br /><FormLabel>Password</FormLabel>
              <FormControl type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              <br /><FormLabel>Confirm</FormLabel>
              <FormControl type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              <br /><Button type="submit" disabled={disable}>SIGN UP</Button>
            </Form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
       
      );
  }
    
}
