import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";


class Comment extends Component {
    state = {
        comments: [],
        fetchComplete: false,
        click: false,
    }

    componentDidMount(){
        if (this.props.commentId){
            fetch('https://jsonplaceholder.typicode.com/posts/'+this.props.commentId+'/comments')
                .then((response) => response.json())
                .then((data) => {
                    this.setState({comments: data});
                    this.setState({fetchComplete: true});
                })
        }
    }

    showComment = () => {
        this.setState({click: true});
    }

    render(){
        let {comments, click} = this.state;
        console.log(comments);
        const {fetchComplete} = this.state;
        if (!fetchComplete) return <div className='loader'></div>
        return(
                <div>
                    <a onClick={this.showComment}>Comments</a>
                    {click && comments.map(comment => (
                            <Paper key={comment.id} className="userInfoBLock">
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <Avatar>{comment.name.substr(0,1)}</Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap className="Typography">Name: {comment.name}</Typography>
                                        <br/>
                                        <Typography noWrap className="Typography">Comment: {comment.body}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        ))}
                </div>
        )
    }
}


export default Comment;
