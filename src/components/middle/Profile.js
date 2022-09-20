import React from "react"
import './profile.css'

export const Profile = (props) => {
  const titleText = "Hello World,";
  const bodyText = "Welcome to my profile page! This is where I post my projects as well as cool stuff that I make/do. Feel free to explore!";
    return (
        <div className="profile-section">
          <span className="profile-text-head">{titleText}</span>
          <span className="profile-text-body">{bodyText}</span>
        </div>
    )
  }

Profile.defaultProps = {
}
