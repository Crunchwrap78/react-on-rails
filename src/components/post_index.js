import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, showForm } from '../actions/index';
import { Link } from 'react-router-dom';
import PostsNew from './post_new';

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  handleClick() {
    this.props.showForm();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render(){
    return(
    this.props.isOpen === false
    ? <div>
        <div className="text-xs-right">
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>
            Add a Post
          </button>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
      : <PostsNew />
    );



  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all, isOpen: state.posts.isOpen }
}


export default connect(mapStateToProps, { fetchPosts, showForm })(PostsIndex);
