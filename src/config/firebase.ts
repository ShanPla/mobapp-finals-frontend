import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, connectAuthEmulator } from 'firebase/auth';
import { 
  getFirestore, 
  Firestore, 
  initializeFirestore, 
  persistentLocalCache,
  connectFirestoreEmulator
} from 'firebase/firestore';
import { Platform } from 'react-native';
import { getStorage, FirebaseStorage, connectStorageEmulator } from 'firebase/storage';
import { getMessaging, Messaging } from 'firebase/messaging';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID
} from '@env';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;
let messaging: Messaging | null = null;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  // Enable persistent local cache for offline support
  db = initializeFirestore(app, {
    localCache: persistentLocalCache({})
  });
} else {
  app = getApps()[0];
  db = getFirestore(app);
}

auth = getAuth(app);
storage = getStorage(app);

// Connect to emulators in development mode
if (__DEV__) {
  try {
    const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
    
    connectAuthEmulator(auth, `http://${host}:9099`);
    connectFirestoreEmulator(db, host, 8080);
    connectStorageEmulator(storage, host, 9199);
    
    console.log('[Firebase] Connected to emulators');
  } catch (error) {
    console.warn('[Firebase] Failed to connect to emulators:', error);
  }
}

if (Platform.OS === 'web') {
  try {
    messaging = getMessaging(app);
  } catch (error) {
    console.warn('Firebase messaging initialization failed:', error);
  }
}

export { app, auth, db, storage, messaging };
