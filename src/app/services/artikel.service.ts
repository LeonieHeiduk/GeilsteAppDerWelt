import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';
import {
    AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection,
    DocumentChangeAction,
    Action,
    DocumentSnapshotDoesNotExist,
    DocumentSnapshotExists
} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { IArtikel } from '../model/artikel';


@Injectable({
  providedIn: 'root'
})
export class ArtikelService {

    artikelCollection: AngularFirestoreCollection<IArtikel>


    constructor(private afs: AngularFirestore) {
        this.artikelCollection = this.afs.collection('articles');
    }

    test() {
        console.log(this.artikelCollection);
    }
    

}
