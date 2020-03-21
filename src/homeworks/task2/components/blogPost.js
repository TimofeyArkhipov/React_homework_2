import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


class Posts extends Component {
    state = {
        posts: [],
        fetchComplete: false,
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
        let item = this.state.posts;
        const {fetchComplete} = this.state;
        if (!fetchComplete) return <div className='loader'></div>
        return(

                <Container maxWidth="md" component="main">
                    <h1>Posts list</h1>
                    {item.map(post =>
                        <Paper>
                        <Container onClick={() => {this.props.openInfo(post.userId)}}>
                            <div className="postContainer">
                                <Typography component="h4" variant="h4" color="textPrimary">
                                   Post# {post.id}
                                </Typography>
                                <Typography className="postTitle" component="h2" variant="h5" color="textPrimary">
                                    {post.title}
                                </Typography>
                                <ListItemText primary="Body"/>
                                {/*{this.state.more === true ?*/}
                                {/*<Typography component="p" variant="h6" color="textPrimary">*/}
                                {/*    {post.title}*/}
                                {/*</Typography> : null}*/}
                            </div>
                        </Container>
                        </Paper>
                    )}
                </Container>

        )
        this.setState({more:true})
    }
}


export default Posts;
