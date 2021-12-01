import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    render() {
        return (
            <div>
                 <p>List of Followers:</p>
                 {this.props.followersList.map((item) => (
        <Follower key={item.id} item={item} />
      ))}
            </div>
        );
      }
}

export default FollowerList;