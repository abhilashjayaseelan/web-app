import { createAction } from "@reduxjs/toolkit";
import Firebase from "../firebase/config";

export const registerUser = createAction(
  "firebase/registerUser",
  async ({ email, password, userName, phone }) => {
    const result = await Firebase.auth().createUserWithEmailAndPassword(email, password);
    await result.user.updateProfile({ displayName: userName });
    await Firebase.firestore().collection("users").add({
      id: result.user.uid,
      username: userName,
      phone: phone,
    });
  }
);
