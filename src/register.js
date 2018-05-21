import React from 'react';
import {FormGroup, FormControl, Col, ControlLabel, Checkbox, Button} from 'react-bootstrap';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: null,
          password: null,
          plan: null,
          city: null,
          error: null
        }
    }

    //finish this for plan and city too// yeah , got it. thnx
    changeHandler(e) {
      //to be edited
      if(e.target.id==='registerEmail') this.setState({email: e.target.value});
      else if(e.target.id==='registerPassword'){
        if(e.target.value.length < 8) this.setState({error: 'Password must be at least 8 characters long!'})
        this.setState({password: e.target.value});
      }
      else if(e.target.id==='planSelect') this.setState({plan: e.target.value});
      else if(e.target.id==='registerEmail') this.setState({email: e.target.value});
// I created two checkboxes for meal plan.
// and five cities selection option for now, for city // ok, checking in google now.


    }

    submitHandler(e) {
      e.preventDefault();
      const {email, password, plan, city} = this.state;
      fetch('/register', {
        method: 'POST',
        body: JSON.stringify({
          email, password, plan, city
        }),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => {
        if (json.error) this.setState({error:json.message});
        else this.props.changePage('meals');
      })
      .catch(new Error('Request failed!'));
    }

     render() {
        return (
          <form onSubmit={this.submitHandler}>
            <FormGroup controlId="errormsg">

            </FormGroup>
            <FormGroup controlId="registerEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="email@" onChange={this.changeHandler}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="registerPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" onChange={this.changeHandler}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>
            <FormGroup controlId="planSelect" onChange={this.changeHandler}>
              <select value={this.state.plan} onChange={this.changeHandler}>
              <Radio name="radioGroup" inline>
                Lunch a bunch
              </Radio>{' '}
              <Radio name="radioGroup" inline>
                Lunch a lot
              </Radio>{' '}
              </select>
            </FormGroup>
            <FormGroup controlId="citySelect" onChange={this.changeHandler}>
              <ControlLabel>City</ControlLabel>
              <FormControl componentClass="select" value={this.state.city} onChange={this.changeHandler}>
                <option value="ny">New York</option>
                <option value="tn">Toronto</option>
                <option value="la">Los Angeles</option>
                <option value="gr">Grand Rapids</option>
                <option value="st">Seatle</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Sign Up</Button>
              </Col>
            </FormGroup>
          </form>
        )
    }










}
