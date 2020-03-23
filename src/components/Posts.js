import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
class Posts extends Component {
 
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost)
        {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    componentDidMount(){
        this.props.fetchPosts();
    }
    render() { 
        const postItems= this.props.posts.map(post=> (
            <div key={post.id}>
                <h3>{post.title}</h3>
        <p>{post.body}</p>
            </div>
        ));
        return (  
            <div>
                <h1>Hello World</h1>
                {postItems}
            </div>
        );
    }
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}
const mapStateToprops = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});
export default connect(mapStateToprops, {fetchPosts})(Posts);
