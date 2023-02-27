import React from "react";
import Banner from "./profile-banner/profile-banner";
import Posts from "./profile-posts/posts";
import User from "./profile-user/user";

const Profile = () => {
	return (
		<>
		<Banner></Banner>
		<User></User>
		<Posts></Posts>
		</>
	)
}


export default Profile;