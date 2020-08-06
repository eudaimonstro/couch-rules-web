import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup
  public loginInvalid: boolean
  private formSubmissionAttempt: boolean
  private returnUrl: string

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log('Login ngOnInit Fired');
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(): void {
    console.log('Login onSubmit Fired');
  }

  onCreateNewAccount(): void {
    console.log('Login onCreateNewAccount Fired');
    this.router.navigate(['/create_account']);
  }
}
