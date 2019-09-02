import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  brandLogoPath: string;
  // loginEmail: string = "";
  // loginPassword: string = "";
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    document.body.style.backgroundColor = "black";
    this.brandLogoPath = 'assets/images/dxc_logo_hz_wht_rgb.png'
    this.initializeForm();
  }

  initializeForm() {
    let loginEmail = "";
    let loginPassword = "";

    this.loginForm = new FormGroup({
      'loginEmail': new FormControl(loginEmail, Validators.email),
      'loginPassword': new FormControl(loginPassword, Validators.required),
    });
  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('login');
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('login');
  }

  onSignInClick() {

    this.loginService.loginUser(this.loginForm.value['loginEmail'], this.loginForm.value['loginPassword'])
      .subscribe((response) => {
        console.log(response);
        if (response["success"]) {
          this.router.navigate(['main/dashboard']);
        } else {
          alert(response["message"]);
          this.loginForm.reset();
        }
      },
        (error) => {
          alert(error["message"]);
          this.loginForm.reset();
        });
  }

}
