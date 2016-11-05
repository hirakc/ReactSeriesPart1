/**
 * Created by hirak on 18/9/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router';


class PostShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
            this.context.router.push("/");
        });
    }
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }
    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Bank to Index</Link>
                <button className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
