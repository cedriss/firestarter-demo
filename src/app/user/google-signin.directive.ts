import { Directive, HostListener } from '@angular/core';
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth) { }

  @HostListener('click')
  onclick(){
    this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
  }
}