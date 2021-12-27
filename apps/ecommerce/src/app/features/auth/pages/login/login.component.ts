import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { UntilDestroy } from '@ngneat/until-destroy';

import { HeaderService } from './../../../../core/services/header.service';
import { SessionService } from './../../../../core/services/session.service';
import { AuthenticationService } from './../../../../core/services/authentication.service';


@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'roinsight-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private authService: AuthenticationService,
    private session: SessionService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private header: HeaderService,
    private location: Location

  ) { }

  ngOnInit() {
    this.header.setHeaderButtonsVisibility(false);
  }

  login() {
    const credentials = this.loginForm.value;

    this.authService.login(
      credentials.email,
      credentials.password
    ).subscribe(
      () => {
        this.session.setLoggedInStatus(true);
        this.location.back();
      },
      err => {
        this.snackBar.open(
          'Login failed. Check your login credentials.',
          'Close',
          { duration: 6000 });

        this.loginForm.patchValue({ password: '' });
      }
    );
  }
}
