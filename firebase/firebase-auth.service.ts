import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FirebaseClientService } from './firebase-client.service';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FirebaseAuthService {

  constructor(private fAuth: AngularFireAuth, private firestoreClient: FirebaseClientService) { }

  async signUpWithEmailAndPassword(email: string, password: string): Promise<any> {
    let registeredUser = await this.fAuth.createUserWithEmailAndPassword(email, password);
    await this.setVerificationEmail();
    return registeredUser;
  }

  async signUp(email: string, password: string, userData: any): Promise<any> {
    var registeredUser = await this.fAuth.createUserWithEmailAndPassword(email, password);
    await this.setVerificationEmail();
    await this.firestoreClient.create("/users", userData, registeredUser.user?.uid);
    return registeredUser;
  }

  async setVerificationEmail() {
    return (await this.fAuth.currentUser)?.sendEmailVerification();
  }

  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.fAuth.signInWithEmailAndPassword(email, password).then((signInUser: any) => {
      return this.firestoreClient.readById("/users", signInUser?.user?.uid ?? "").pipe(map((response: any) => {
        signInUser.user.additionalData = response;
        return signInUser;
      }))
    })
  }

  async resetPassword(email: string): Promise<any> {
    return await this.fAuth.sendPasswordResetEmail(email);
  }

  async updateProfileInfo(email: string, displayName: string, photoURL: string): Promise<any> {
    var user = await this.fAuth.currentUser;
    if (user) {
      await user.updateProfile({ displayName, photoURL });
      return await user.updateEmail(email)
    }
  }

  async signOut() {
    await this.fAuth.signOut();
  }
}


// export class FirebaseAuthService{
//     constructor(
//       private afAuth: AngularFireAuth, 
//       private firestore: AngularFirestore
//     ) {}

//     getUserDetails(uid: string) {
//         return this.firestore.collection('users').doc(uid).valueChanges();
//       }
  
//     async register(email: string, password: string) {
//       const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
//       const registeredUsers = userCredential.user;
//       if (registeredUsers) {
//         return this.firestore.collection('registeredUsers').doc(registeredUsers.uid).set({
//           uid: registeredUsers.uid,
//           email: registeredUsers.email
//         });
//       } else {
//         throw new Error('Registration failed');
//       }
//     }
//     signInWithEmailAndPassword(email: string, password: string): Promise<any> {
//         return this.afAuth.signInWithEmailAndPassword(email, password)
//           .then((signInUserCredential) => {
//             const uid = signInUserCredential.user?.uid;
//             if (!uid) throw new Error('User not found after sign-in.');
    
//             const userDocRef = this.firestore.doc(`/registeredUsers/${uid}`);
    
//             return userDocRef.valueChanges().pipe(
//               map((response: any) => {
//                 const signInUser = { ...signInUserCredential, user: { ...signInUserCredential.user, additionalData: response } };
//                 return signInUser;
//               })
//             ).toPromise();
//           });
//     }
    
//         async resetPassword(email: string): Promise<any> {
//             return await this.afAuth.sendPasswordResetEmail(email);
//           }
    
//           async updateProfileInfo(email: string, displayName: string, photoURL: string): Promise<any> {
//             var user = await this.afAuth.currentUser;
//             if (user) {
//               await user.updateProfile({ displayName, photoURL });
//               return await user.updateEmail(email)
//             }
//           }
        
//           async signOut() {
//             await this.afAuth.signOut();
//           }
//       }
    
    
  


