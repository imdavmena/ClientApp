import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { AuthenticationService } from '@app/_services';
import { environment } from '@environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  token: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {    
    this.token = environment.recaptcha.siteKey;

    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/view']);
    }
  }

  // recaptcha control
  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      token: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }

    this.loading = true;

    this.authenticationService
      .login(this.f['username'].value, this.f['password'].value)
      .subscribe({
        next: () => {          
          this.router.navigate(['/view']);
        },
        error: error => {
          this.toastr.warning('Verifiqué su usuario o contraseña', 'Aviso');
          this.error = error;
          this.loading = false;
        },
        
      }).closed = true;
  }
}
