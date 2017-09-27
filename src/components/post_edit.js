import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updatePost, closeForm } from '../actions/index';
import { Link } from 'react-router';

class PostsEdit extends Component{

  onSubmit(values) {
    const { id } = this.props.match.params;
    this.props.updatePost(id, values, () => {
      this.props.history.push('/');
    })
  }


  handleClick() {
    this.props.closeForm();
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render(){
    const { handleSubmit } = this.props;

    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            value={this.props.post.title}
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            value={this.props.post.categories}
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            value={this.props.post.content}
            component={this.renderField}
          />
        <button type="submit" className="btn btn-primary ">Submit</button>
        <button className="btn btn-danger" onClick={this.handleClick.bind(this)}>Cancel</button>
        </form>
    )
  }
}

function validate(values){
  const errors = {};

  if(!values.title) {
    errors.title ='Enter a title';
  }
  if(!values.categories) {
    errors.categories = 'Enter a category';
  }
  if(!values.content) {
    errors.content = 'Enter some content';
  }
  return errors;
}

//connect: first agument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

function mapStateToProps(state) {
  return { isOpen: state.form.isOpen }
}

export default reduxForm({
  validate,
  form: 'PostsEditForm'
})(
  connect(mapStateToProps, { updatePost, closeForm })(PostsEdit)
);
