import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          users: []
        };
      }

    componentDidMount() {
      var that = this;
      var url = 'http://dockerhost:9500'

      fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({ users: data.result });
      });
    }

    onButtonClick() {
        this.i += 1;
        if(this.i%2)
            this.setState({ text: 'Clicked!' });
        else
            this.setState({ text: 'Clicked 2x'})
     }

    render() {
        return (
            <div className="App">
                <ul>
                   { console.log(this.state.users)}
                  {this.state.users.map(user =>
                    <p>{user.first} - {user.last} - {user.nationality}</p>
                  )}
                </ul>
            </div>
        );
    }
}

export default App;
