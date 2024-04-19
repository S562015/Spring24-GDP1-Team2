import React from "react";
import { auth } from "../../firebase";

const Profile = () => {
  console.log(auth.currentUser);
  return (
    <>
      <h1> ProfilePage {auth.currentUser.email} </h1>
    </>
  );
};
export default Profile;
