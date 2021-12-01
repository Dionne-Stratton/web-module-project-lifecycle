import React from "react";

class Follower extends React.Component {
    render() {
        return (
            <div>
                 <p>handle: {this.props.follower.login}</p>
                 <img width="200" src={this.props.follower.avatar_url} />
            </div>
        );
      }
}

export default Follower;