import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

// Firebase API anahtarı var mı kontrol et
const isFirebaseConfigured = process.env.NEXT_PUBLIC_FIREBASE_API_KEY && process.env.NEXT_PUBLIC_FIREBASE_API_KEY.length > 0;

let app;
let auth: Auth;
let db;
let storage;

if (isFirebaseConfigured) {
  // Firebase uygulamasını başlat
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
} else {
  // Firebase yapılandırılmamışsa mock nesneler kullan
  app = null;
  auth = {
    currentUser: null,
    onAuthStateChanged: (callback: (user: null) => void) => {
      callback(null);
      return () => {};
    },
  } as unknown as Auth;
  db = {} as any;
  storage = {} as any;
}

export { app, auth, db, storage };
