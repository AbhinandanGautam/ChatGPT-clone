import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

// for local development
// const serviceAccount = require('@/serviceAccount.json');

// for production
const serviceAccount = JSON.parse(
    process.env.FIREBASE_ADMIN_PRIVATE_KEY as string
);

if(!getApps().length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const adminDB = admin.firestore();

export { adminDB };
