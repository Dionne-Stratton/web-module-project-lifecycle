import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    render() {
        return (
            <div>
                 <h3>Minions:</h3>
                 {this.props.followersList.map((follower) => (
        <Follower key={follower.id} follower={follower} />
      ))}
            </div>
        );
      }
}

export default FollowerList;