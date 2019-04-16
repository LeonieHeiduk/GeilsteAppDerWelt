import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

username: string =""
password: string =""

  constructor(public afAuth: AngularFireAuth, public user: UserService, public router: Router) { }

  ngOnInit() {
  }

  register(){
    console.log("register")
    this.router.navigate(['./register'])
  }

  async login(){
    const { username, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
    
      if(res.user) {
          this.user.setUser({
            username, 
            uid: res.user.uid
          })
          console.log("User found")
          this.router.navigate(['./tabs'])
          console.log("blibli")
      }
    } catch(err) {
      console.dir(err);
      if (err.code === "auth/user-not-found"){
        console.log("User not found");
      }
    }
  }

}
