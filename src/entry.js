import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import LogInForm from './LogInForm';
import Meals from './Meals';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            page: 'landing'
        };
    }

    changePage(newPage){
        this.setState({page: newPage});
    }
    render(){
        let content;
        if(this.state.page==='landing') content= <LandingPage changePage={this.changePage.bind(this)}/>
        if(this.state.page==='login') content = <LogInForm changePage={this.changePage.bind(this)}/>
        if(this.state.page==='meals') content= <Meals/>
        return(
            <div id="wrapper">
                {content}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));