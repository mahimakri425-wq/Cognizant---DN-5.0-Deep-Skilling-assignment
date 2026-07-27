import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load posts');
        }

        return response.json();
      })
      .then((data) => {
        const posts = data.map(
          (item) => new Post(item.id, item.title, item.body)
        );

        this.setState({
          posts: posts,
          loading: false,
          error: null
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error.message
        });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`An error occurred: ${error.message}`);
    console.error('Component error:', error, info);
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <h2>Loading posts...</h2>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>

        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;