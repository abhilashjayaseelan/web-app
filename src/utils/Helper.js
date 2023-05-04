import firebase from "../firebase/config";

// function for filtering the data
export function filterData(searchText, restaurantsData) {
  const filterData = restaurantsData?.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchText?.toLowerCase());
  });
  return filterData;
}


export function filterUserData(searchText, userData) {
  console.log(userData)
  const filterData = userData?.filter((users) => {
    return users?.username
      ?.toLowerCase()
      .includes(searchText?.toLowerCase());
  });
  return filterData;
}


//for deleting the user;
export function handleDelete (userId, setDeleted, deleted) {
  if (window.confirm("Are you sure you want to delete this user?")) {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .delete()
      .then(() => {
        setDeleted(!deleted);
      })
      .catch((error) => {
        console.log("Error deleting user: ", error);
      });
  }
};
