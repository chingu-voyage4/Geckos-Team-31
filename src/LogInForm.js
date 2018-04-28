import React from 'react';

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
      const target = e.target.id;
      this.setState({target: e.target.value});
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
        return (
          <Form>
            <FormGroup controlId="errormsg">
            <Col componentClass={ControlLabel} >
              {`Error: ${this.state.error}`} // it's connected to logIn button right or register?

            </Col>

            </FormGroup>
            <FormGroup controlId="logInEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl id="email" type="email" placeholder="Email" onChange={this.changeHandler}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="logInPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl id="password" type="password" placeholder="Password" onChange={this.changeHandler}/>
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
          </Form>
        );
    }
}

export default LogInForm;
