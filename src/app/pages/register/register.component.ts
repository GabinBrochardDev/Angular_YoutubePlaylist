import { Component } from '@angular/core';
import { LocalStorageManagerService } from '../../services/local-storage-manager.service';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  userForm: FormGroup;

  constructor(private navigator: Router, private storage: LocalStorageManagerService) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
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
      alert('User registered successfully!');
      this.navigator.navigate(['/login']);
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
