import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseClientService {
  constructor(private firestore: AngularFirestore) {}

  create(path: string, data: any, id:any = undefined): Promise<void> {
    if(id == undefined){
      id = this.firestore.createId();
    }
    return this.firestore.collection(path).doc(id).set(data);
  }

  read(path: string): Observable<any> {
    return this.firestore.collection(path).valueChanges({ idField: 'key' });
  }

  readById(path: string,id:string): Observable<any> {
    return this.firestore.collection(path).doc(id).valueChanges();
  }

  update(path: string, key: string, data: any): Promise<void> {
    return this.firestore.collection(path).doc(key).update(data);
  }

  delete(path: string, key: string): Promise<void> {
    return this.firestore.collection(path).doc(key).delete();
  }
}
// export class FirebaseClientService {

//   constructor(private firestore: AngularFirestore) { }


//   create(path: string, data: any): Promise<void> {
//     let id = this.firestore.createId();
//     return this.firestore.collection(path).doc(id).set(data);
//   }

//   read(path: string): Observable<any> {
//     return this.firestore.collection(path).valueChanges({ idField: 'key' });
//   }

//   update(path: string, key: string, data: any): Promise<void> {
//     return this.firestore.collection(path).doc(key).update(data);
//   }

//   delete(path: string, key: string): Promise<void> {
//     return this.firestore.collection(path).doc(key).delete();
//   }
// }
