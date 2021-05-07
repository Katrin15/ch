import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.sass']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;
  signupTypeForm: FormGroup;
  signupLoginPasswordForm: FormGroup;
  signupPersonalDetailsForm: FormGroup;
  signupMedicalExperienceForm: FormGroup;

  selectedTabIndex: number;

  hideLoginPassword: boolean = true;
  hideSignupPassword: boolean = true;

  isLoginFlow: boolean = true;
  isSignupFlow: boolean = false;

  isLoggingIn: boolean = false;
  isSigningUp: boolean = false;

  isLoginError: boolean = false;
  isSignupError: boolean = false;

  wizardStep: number = 1;
  
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService
  ) 
  { 
    this.dialogRef.disableClose = true;
    this.selectedTabIndex = 0;

    this.loginForm = formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    });

    this.signupTypeForm = formBuilder.group({
      type: this.formBuilder.control('', [Validators.required]),
    });

    this.signupLoginPasswordForm = formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    });

    this.signupPersonalDetailsForm = formBuilder.group({
      firstName: this.formBuilder.control('', ),
      lastName: this.formBuilder.control('', ),
      nickName: this.formBuilder.control('', )
    });

    this.signupMedicalExperienceForm = formBuilder.group({
      firstName: this.formBuilder.control('', ),
      lastName: this.formBuilder.control('', ),
      nickName: this.formBuilder.control('', )
    });
  }

  ngOnInit(): void {
    //TODO MatDialog's default behavior should do the same (i.e  closing on esc. and backdrop click) out of the box - figure out why it didn't work
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === "Escape") {
          this.handleClose();
      }
    });

    this.dialogRef.backdropClick().subscribe(() => {
      this.handleClose();
    });
  }

  public handleContinue() {
    this.wizardStep = this.wizardStep + 1;
  }

  public handleClose() {
    this.dialogRef.close();
  }

  public handleGoogleLogin() {
    this.authService.signInWithGoogle().subscribe((result: boolean) => {
      this.isLoggingIn = false;
      if(result) {
        this.dialogRef.close()
      }
    })
  }

  public handleFacebookLogin() {
    this.isLoggingIn = true;
    this.isLoginError = false;

    this.authService.signInWithFB().subscribe((result: boolean) => {
      this.isLoggingIn = false;
      if(result) {
        this.dialogRef.close()
      }
    })
  }

  public handleLoginFormSubmit(){
    this.isLoggingIn = true;
    this.isLoginError = false;

    this.authService.signin(
      this.loginForm.value.email, 
      this.loginForm.value.password

    ).subscribe((result: boolean) => {
      this.isLoggingIn = false;
      this.isLoginError = !result;
      if(result) {
        this.dialogRef.close()
      }
    })
  }
  
  public handleSignupFormSubmit(){
    this.isSigningUp = true;
    this.isSignupError = false;

    this.authService.signup({
      firstname: this.signupPersonalDetailsForm.value.firstName,
      lastname: this.signupPersonalDetailsForm.value.lastName,
      email: this.signupLoginPasswordForm.value.email,
      password: this.signupLoginPasswordForm.value.password

    }).subscribe((result: boolean) => {
      this.isSigningUp = false;
      this.isSignupError = !result;
      if(result) {
        this.dialogRef.close()
      }
    })
  }

  public setCurrentTabIndex($event: number) {
    this.selectedTabIndex = $event;
    this.isLoginError = false;
    this.isSignupError = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
