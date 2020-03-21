import React, { Component } from 'react'
import Posts from './blogPost'
import UserInfo from './userInfo'
import Container from '@material-ui/core/Container';



class Blog extends Component {
    state = {
       userInfoId: '',
    }


    openInfo = (userId) => {
        this.setState({userInfoId: userId});
        console.log(userId);
    }


    render(){
        const {userInfoId } = this.state;
        return(
            <div className="wrapper">
                <div className="column">
                    <Posts openInfo={this.openInfo}/>
                </div>
                <div className="column">
                    {userInfoId && <UserInfo userId={userInfoId}/>}
                </div>
            </div>
        )
    }
}

export default Blog;