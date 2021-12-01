import React from "react";

class User extends React.Component {
    render() {
        return (
            <div>
                 <h1>The Ruler: {this.props.userInfo.name}</h1>
                 <p>handle: {this.props.userInfo.login}</p>
                 <p>followers: {this.props.userInfo.followers}</p>
                 <img width="250" className="user" src={this.props.userInfo.avatar_url} />
            </div>
        );
      }
}

export default User;