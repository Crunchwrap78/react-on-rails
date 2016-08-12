import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import PostsNew from './post_new';

class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <button className="btn btn-primary"  data-toggle="modal" data-target="#myModalNorm">
            Add a Post
          </button>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <PostsNew />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
