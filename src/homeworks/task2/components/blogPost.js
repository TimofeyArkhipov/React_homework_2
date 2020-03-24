import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Comment from "./comment";

class PostsList extends Component {
    state = {
        posts: [],
        fetchComplete: false,
        click: false,
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                this.setState({posts: data});
                this.setState({fetchComplete: true});
            })
    }





    render(){
        let {fetchComplete, posts} = this.state;
        if (!fetchComplete) return <div className='loader'></div>
        return(
                <Container maxWidth="md" component="main">
                    <h1>Posts list</h1>
                    {posts.map(post =>
                        <Paper>
                        <Container>
                            <div onClick={() => {
                                this.props.openInfo(post.userId)
                            }}  className="postContainer">
                                <Typography key={post.id} component="h4" variant="h4" color="textPrimary">
                                   Post# {post.id}
                                </Typography>
                                <Typography className="postTitle" component="h2" variant="h5" color="textPrimary">
                                    {post.title}
                                </Typography>
                                <ListItemText>
                                    {post.body}
                                </ListItemText>
                                <Comment commentId={post.id}/>
                            </div>
                        </Container>
                        </Paper>
                    )}
                </Container>
        )
    }
}


export default PostsList;
