import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../redux/slice/userSlice";
import { asyncUserFetch } from "../redux/thunk";

export const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    dispatch(asyncUserFetch());
  };

  return (
    <div>
      <h1>User Infomation</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>address</th>
            <th>phone number</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {user ? (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.company}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="5">Not found user information</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={fetchUser}>reload</button>
    </div>
  );
};
