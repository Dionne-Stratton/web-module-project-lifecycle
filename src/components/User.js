import React from "react";

class User extends React.Component {
    render() {
        return (
            <div>
                 <p>User Name: {this.props.userInfo.login}</p>
            </div>
        );
      }
}

export default User;