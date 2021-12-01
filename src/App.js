import React from 'react';
import FollowerList from './components/FollowerList';
import User from './components/User';
import getUser from './data/getUser';
import getFollowers from './data/getFollowers';

// console.log('users:', getUser('dionne-stratton'))
// console.log('followers:', getFollowers('dionne-stratton'))


class App extends React.Component {
  state = {
    user: 'dionne-stratton',
    userInfo: {},
    followersList: [],
  }

  componentDidMount() {
    console.log("component did mount", this.state);
    getUser(this.state.user)
        .then(userInfo=> {
            this.setState({
                ...this.state,
                userInfo: userInfo
            });
        });
        getFollowers(this.state.user)
        .then(followersList=> {
            this.setState({
                ...this.state,
                followersList: followersList
            });
        });
}

componentDidUpdate(prevState, prevProps) {
  if (prevState.user !== this.state.user) {
    console.log("user has changed", this.state.userInfo);
  }
  if (prevState.followersList !== this.state.followersList) {
    console.log("state updated, followers changed", this.state.followersList);
  }
}

handleChange = (e) => {
  console.log("handleChange called", this.state.user);
  this.setState({
    ...this.state,
    user: e.target.value,
  });
};
handleClick = (e)=> {
  e.preventDefault();
  getUser(this.state.user)
      .then(info => {
          this.setState({
              ...this.state,
              userInfo: info
          });
      })
      getFollowers(this.state.user)
      .then(followersList=> {
          this.setState({
              ...this.state,
              followersList: followersList
          });
      });
}


  render() {
    return(<div>
      <form>
                <input value={this.state.user} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
      </form>
      <User userInfo={this.state.userInfo}/>
      <FollowerList followersList={this.state.followersList} />
    </div>);
  }
}

export default App;
