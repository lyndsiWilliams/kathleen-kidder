// Package imports
import { connect } from 'react-redux';
// Actions
import { getBlogs } from '../redux/actions';

const Blog = props => {
  console.log("PROPS in BLOG: ", props);

  return (
    <div className="blog" style={{ flexDirection: "column" }}>
      <h1>This is the Blog page!</h1>
      <button onClick={() => props.getBlogs()}>Test the API!</button>
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