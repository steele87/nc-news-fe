import React from 'react';
import { Link } from 'react-router-dom';

class TopicArticles extends React.Component {
  state = {
    articles: [],
    topic: '',
    error: null,
  }

  componentDidMount() {
    let topic = this.props.match.params.topic;
    fetch(`${process.env.REACT_APP_API_URL}/topics/${topic}/articles`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    )
      .then((res) => {
        return res.json();
      })
      .then((articles) => {
        let topicArticles = [];
        if (!articles.message) {
          let topicArticles = articles.articles;
          topicArticles.sort(function (a, b) {
            return b.votes - a.votes;
          });
          return topicArticles;
        } return topicArticles;
      })
      .then((topicArticles) => {
        this.setState({
          articles: topicArticles,
          topic: this.props.match.params.topic,
        })
      })
      .catch(error => {
        this.setState({
          error,
        })
      })
  };

  render() {
    if (this.state.error) return this.state.error
    return (
      <div>
        <h2>{this.state.topic} Page</h2>
        {this.state.articles.length ?
          this.state.articles.map((article, index) => (
            <div key={index}>
              <Link className="link" to={`/articles/${article._id}`}>{article.title}</Link>
              {' | '}
              <Link className="link" to={`/users/${article.created_by}`}>by: {article.created_by} </Link >
              <p><i class="far fa-thumbs-up"></i> likes: {article.votes}</p>
              <hr />
            </div>
          )
          )
          : <div className="frownFace"><i className="far fa-frown fa-lg " style={{ color: 'tomato' }} aria-hidden="true"></i><p>Sorry, no articles are currently available!</p></div>}
      </div>
    )
  }
}

export default TopicArticles