import React from 'react';
import {FormGroup, FormControl, Col, ControlLabel, Checkbox, Button} from 'react-bootstrap';

class LogInForm extends React.Component {
    constructor(props)  {
      super(props);
      this.state= {
        email: null,
        password: null,
        error: null
      };
    }

    changeHandler(e) {
      if(e.target.id==='logInEmail') this.setState({email: e.target.value});
      else if(e.target.id==='logInPassword'){
        if(e.target.value.length < 8) this.setState({error: 'Password must be at least 8 characters long!'})
        this.setState({password: e.target.value});
      }
    }

    submitHandler(e){
        e.preventDefault();
        fetch('/login', {
          method: 'POST',
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
          })
        })
        .then(res => res.json())
        .then(json => {
          if (json.status) this.setState({error:json.message});
        })
        .catch(new Error('Request failed!'));
    }
    
    render() {
        let error;
        if(this.state.error) error= `Error: ${this.state.error}`;
        return (
          <form>
            <FormGroup controlId="errormsg">
            <Col componentClass={ControlLabel} >
              <span id="form-error">{error}</span>

            </Col>

            </FormGroup>
            <FormGroup controlId="logInEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" onChange={this.changeHandler.bind(this)}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="logInPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" onChange={this.changeHandler.bind(this)}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Login</Button>
              </Col>
            </FormGroup>
          </form>
        );
    }
}

export default LogInForm;
