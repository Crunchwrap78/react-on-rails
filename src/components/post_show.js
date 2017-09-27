import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost, showForm } from '../actions/index';
import PostsEdit from './post_edit';
import { Link } from 'react-router-dom';

class PostsShow extends Component{

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  handleClick(){
    this.props.showForm();
  }


  render(){
    const { post } = this.props;

    if(!post){
      return <div>Loading...</div>
    }

    return(
      this.props.isOpen === false
      ? <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right btn-r"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <button
          className="btn btn-btn-primary"
          onClick={this.handleClick.bind(this)}>
          Edit Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
      : <PostsEdit post={post} />
    )
  }
}

function mapStateToProps({ posts }) {
  return { post: posts.post, isOpen: posts.isOpen }
}

export default connect(mapStateToProps, { fetchPost, deletePost, showForm })(PostsShow);
