import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import PostsEdit from './post_edit';
import { Link } from 'react-router';

class PostsShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  onSubmit(props) {
    this.props.updatePost(props)
      .then(() => {
        // blog post has been edited, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render(){
    const { post } = this.props;

    if(!post){
      return <div>Loading...</div>
    }

    return(
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right btn-r"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <button
          className="btn btn-btn-primary  pull-xs-right" data-toggle="modal" data-target="#ModalNorm">
          Edit Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <PostsEdit post={this.props.post} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post}
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
