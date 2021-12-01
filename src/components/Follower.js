import React from "react";

class Follower extends React.Component {
    render() {
        return (
            <div>
                 <p>Follower Name: {this.props.item.login}</p>
            </div>
        );
      }
}

export default Follower;