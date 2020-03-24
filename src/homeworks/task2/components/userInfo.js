import React, { Component } from 'react'
import Container from "@material-ui/core/Container";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';



class UserInfo extends Component {
    state = {
        user: null,
        fetchComplete: false,
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/'+this.props.userId)
            .then((response) => response.json())
            .then((data) => {
                    this.setState({user: data});
                    this.setState({fetchComplete: true});
            })
    }

    componentDidUpdate(){
        if (this.state.user.id !== this.props.userId){
            fetch('https://jsonplaceholder.typicode.com/users/'+this.props.userId)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({user: data});
                    this.setState({fetchComplete: true});
                })
        }
    }


    render(){

        const {fetchComplete, user} = this.state;
        if (!fetchComplete) return <div className='loader'></div>
        return(
            <Container maxWidth="md" component="main">
                <h1>User detale</h1>
                <div >
                    <Paper className="userInfoBLock">
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>{user.name.substr(0,1)}</Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography noWrap className="Typography">Nickname: {user.username}</Typography>
                                <Typography noWrap className="Typography">Name: {user.name}</Typography>
                                <Typography noWrap className="Typography">Email: {user.email}</Typography>
                                <br/>
                                <Typography noWrap className="Typography">
                                    Address: str.{user.address.street}<br/>
                                    suite.{user.address.suite}<br/>
                                    city.{user.address.city}<br/>
                                    zipcode.{user.address.zipcode}<br/>
                                </Typography>
                               <div></div>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>


            </Container>
        )
    }

}

export default UserInfo;