import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    render(){
        return(
            <form method="post" action="/api/user/change-password">
                <input name="password" placeholder="new password"/>
                <button type="submit">Delete me!</button>
            </form>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));