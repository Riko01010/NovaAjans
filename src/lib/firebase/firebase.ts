import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase is disabled - creating mock objects
const app = null;
// @ts-ignore - Creating mock auth object for development
const auth = {
  onAuthStateChanged: (callback: (user: null) => void) => {
    callback(null);
    return () => {};
  },
  signInWithPopup: async () => {},
  signOut: async () => {},
};
const db = {} as any;
const storage = {} as any;

export { app, auth, db, storage };
