import React from 'react';
import { Link } from 'react-router-dom';

class UserComponent extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    fetch(`https://northcoders-news-api.herokuapp.com/api/users/${username}`)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        const userInfo = user.users
        this.setState({
          user: userInfo
        })
      })
  }

  render() {
    console.log(this.state.user)
    return (
      <div>
        <h2>User Page</h2>
        {this.state.user.map((user, index) => (
          <div key={index}>
            <img src={`${user.avatar_url}`} />
            <p>Name: {user.name}</p>
            <p>username: {user.username} </p>
            <hr />
          </div>
        )
        )}
      </div>
    )
  }
}

export default UserComponent