import React from 'react';
import {FormGroup, FormControl, Col, ControlLabel, Checkbox, Button} from 'react-bootstrap';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: null,
          password: null,
          error: null  
        }
    }
    
    changeHandler(e) {
      const target = e.target.id;
      this.setState({target: e.target.value});    
    }
    
    submitHandler(e) {
    
    }
    
    render() {
        return (
        <section controlId="form">
            <! ---- First name and last name form  section-->
          <Form inline>
            <FormGroup controlId="firstName">
              <ControlLabel>First Name</ControlLabel>{' '}
              <FormControl type="text" />
            </FormGroup>{' '}  
            <FormGroup controlId="lastName">
              <ControlLabel>Last Name</ControlLabel>{' '}
              <FormControl type="text" />
            </FormGroup>
          </Form>
            
            <!----- Meal plan and city section ---->
            
          <Form inline>
            <FormGroup controlId="planSelect">
              <Checkbox>Lot of meals </Checkbox>
              <Checkbox>Some meals </Checkbox>
            </FormGroup>
            <FormGroup controlId="citySelect">
              <ControlLabel>City</ControlLabel>
              <FormControl componentClass="select">
                <option value="ny">New York</option>
                <option value="tn">Toronto</option>
                <option value="la">Los Angeles</option>
                <option value="gr">Grand Rapids</option>
                <option value="st">Seatle</option>
              </FormControl>
            </FormGroup>
          </Form>    
            
            
            <!--------Form section for email and password with error message--->
            
          <Form horizontal>
            <FormGroup controlId="errormsg">
            
            </FormGroup>
            <FormGroup controlId="logInEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="email@" ?>
              </Col>
            </FormGroup>
            <FormGroup controlId="logInPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Sign Up</Button>
              </Col>
            </FormGroup>
          </Form>       

        </section> 
        )
    }
    
    
    
    
    
    
    
    
    
    
}