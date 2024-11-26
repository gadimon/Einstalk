import React, { useContext, useState } from "react";
import { UserConntext, UserProps } from "../../Provider/UserProvider";
export default function ProfileComp() {
  const userConntext = useContext<UserProps | null>(UserConntext)

  return (
    <>
      <div className="form-container">
          <div className="form-group">
          <img
           src="https://upload.wikimedia.org/wikipedia/he/f/fe/Generic_look_of_fantasy_films_1_-_made_with_DALL-E_3.png" alt="" />
            <label>username</label>
            <p>{userConntext?.user?.username}</p>
          </div>
      </div>
    </>
  );
}