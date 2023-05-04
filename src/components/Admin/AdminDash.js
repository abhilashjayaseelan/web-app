import React, { useState } from "react";
import firebase from "../../firebase/config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../slices/AllUser";
import AdminHeader from "./Admin-header";
import { filterUserData, handleDelete } from "../../utils/Helper";

const Dash = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then((snapshot) => {
        const allUser = snapshot?.docs?.map((user) => {
          return {
            ...user?.data(),
            id: user?.id,
          };
        });
        dispatch(actions.setAllUsers(allUser));
        setFilteredUsers(allUser);
        setUsers(allUser);
      });
  }, [deleted]);

  return (
    <>
      {console.log("render")}
      <AdminHeader />

      <div className="all-users">
        <div className="users-table">
          <h3>All Users</h3>
          <div className="admin-side-search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                const data = filterUserData(searchInput, users);
                setFilteredUsers(data);
              }}
            ></input>
            <button
              className="search-btn"
              onClick={() => {
                const data = filterUserData(searchInput, users);
                setFilteredUsers(data);
              }}
            >
              Search
            </button>
          </div>
          <table className="table my-5">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">UserId</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((user, index) => (
                <tr key={user?.id} className="m-auto">
                  <td>{index + 1}</td>
                  <td>{user?.username}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.id}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <button className="user-edit-btn">Edit</button>
                      <button
                        className="user-delete-btn"
                        onClick={() => {
                          handleDelete(user?.id, setDeleted, deleted);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dash;
