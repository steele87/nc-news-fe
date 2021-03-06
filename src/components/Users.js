import React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  state = {
    users: [],
    error: null,
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        const userList = users.user
        this.setState({
          users: userList
        })
      })
      .catch(error => {
        this.setState({
          error,
        })
      })
  }

  render() {
    if (this.state.error) return this.state.error;
    return (
      <div>
        <h2><i className="fas fa-users"></i> Users Page</h2>
        {this.state.users.map((user, index) => (
          <div className="frownFace" key={index}>
            <img src={`${user.avatar_url}`} alt="user" style={{ width: 100 }} className="profileImg" />
            <br />
            <Link className="link" to={`/users/${user.username}`}><i className="fas fa-user"></i> {user.username} </Link>
            <hr />
          </div>
        )
        )}
      </div>
    )
  }
}

export default Users