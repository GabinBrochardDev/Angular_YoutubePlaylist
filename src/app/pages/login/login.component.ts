import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageManagerService } from '../../services/local-storage-manager.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userForm: FormGroup;

  constructor(private navigator: Router, private storage: LocalStorageManagerService) {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,}')]),
    });
  }

  onSubmit(): void {
    console.log('on Submit');
    
    if (this.userForm.valid) {
      this.userForm.value.birthDate = new Date(this.userForm.value.birthDate);
      // Store User
      this.storage.setData('users', this.userForm.value);
      this.navigator.navigate(['/search']);
    }
  }

  getErrorMessage(field: string): string {
    if (this.userForm.get(field)?.errors?.['required']) {
      return 'Ce champ est obligatoire';
    } else if (this.userForm.get(field)?.hasError('minlength')) {
      return 'La valeur est trop courte';
    } else if (this.userForm.get(field)?.hasError('maxlength')) {
      return 'La valeur est trop longue';
    } else if (this.userForm.get(field)?.hasError('email')) {
      return 'Format d\'email invalide';
    } else if (this.userForm.get(field)?.hasError('pattern')) {
      return 'Format invalide';
    } else if (this.userForm.get(field)?.hasError('requiredTrue')) {
      return 'Ce champ doit être coché';
    }
    return '';
  }

}
