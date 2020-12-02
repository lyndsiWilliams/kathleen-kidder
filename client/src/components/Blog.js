// Package imports
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Actions
import { getBlogs } from '../redux/actions';

const Blog = props => {
  console.log("PROPS in BLOG: ", props);

  useEffect(() => {
    props.getBlogs();
  }, [])

  return (
    <div className="blog">
      <h1>This is the Blog page!</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blogReducer.blogs,
  error: state.blogReducer.error,
  isFetching: state.blogReducer.isFetching
});

export default connect (
  mapStateToProps,
  { getBlogs }
)(Blog);