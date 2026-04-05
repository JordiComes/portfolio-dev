import { Component, signal, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScrollAnimation } from '../../directives/scroll-animation';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ScrollAnimation],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  i18n = inject(TranslationService);

  private readonly API_URL = 'http://localhost:3000/api/contact';

  submitted = signal(false);
  securityError = signal<string | null>(null);
  private lastSubmitTime = 0;
  private readonly MIN_SUBMIT_INTERVAL = 3000;
  private readonly MAX_NAME_LENGTH = 100;
  private readonly MAX_MESSAGE_LENGTH = 2000;

  readonly honeypotField = 'website';

  form: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(this.MAX_NAME_LENGTH),
      this.safeCharactersValidator,
      this.noHtmlValidator
    ]],
    email: ['', [
      Validators.required,
      Validators.email,
      this.strictEmailValidator
    ]],
    message: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(this.MAX_MESSAGE_LENGTH),
      this.noScriptValidator,
      this.noHtmlValidator
    ]],
    [this.honeypotField]: [''],
    formLoadTime: [Date.now()]
  });

  ngOnInit(): void {
    this.securityError.set(null);
  }

  private safeCharactersValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const dangerousPattern = /[<>\"'&]|javascript:|data:|vbscript:|on\w+\s*=/i;
    return dangerousPattern.test(value) ? { unsafeCharacters: true } : null;
  }

  private noHtmlValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const htmlPattern = /<[^>]*>/;
    return htmlPattern.test(value) ? { noHtml: true } : null;
  }

  private noScriptValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    return scriptPattern.test(value) ? { noScript: true } : null;
  }

  private strictEmailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const strictEmailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return strictEmailPattern.test(value) ? null : { strictEmail: true };
  }

  private isRateLimited(): boolean {
    const now = Date.now();
    const timeSinceLastSubmit = now - this.lastSubmitTime;
    return timeSinceLastSubmit < this.MIN_SUBMIT_INTERVAL;
  }

  private isBotSubmission(): boolean {
    const honeypotValue = this.form.get(this.honeypotField)?.value;
    return !!(honeypotValue && honeypotValue.length > 0);
  }

  private isTooFastSubmission(): boolean {
    const loadTime = this.form.get('formLoadTime')?.value || Date.now();
    const timeSpent = Date.now() - loadTime;
    return timeSpent < 2000;
  }

  sanitizeInput(value: string): string {
    if (!value) return '';
    return value
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/&/g, '&amp;');
  }

  getSecurityErrorMessage(): string {
    return this.i18n.t().contact.securityError || 'Security validation failed. Please try again.';
  }

  onSubmit(): void {
    this.securityError.set(null);

    if (this.isBotSubmission()) {
      console.warn('Bot submission detected - honeypot filled');
      this.securityError.set(this.getSecurityErrorMessage());
      return;
    }

    if (this.isTooFastSubmission()) {
      console.warn('Submission too fast - likely bot');
      this.securityError.set(this.getSecurityErrorMessage());
      return;
    }

    if (this.isRateLimited()) {
      console.warn('Rate limit exceeded');
      this.securityError.set(this.i18n.t().contact.rateLimitError || 'Please wait a few seconds before submitting again.');
      return;
    }

    if (this.form.valid) {
      this.lastSubmitTime = Date.now();
      const payload = {
        name: this.sanitizeInput(this.form.get('name')?.value),
        email: this.sanitizeInput(this.form.get('email')?.value),
        message: this.sanitizeInput(this.form.get('message')?.value),
        website: this.form.get(this.honeypotField)?.value ?? '',
      };

      this.http.post(this.API_URL, payload).subscribe({
        next: () => {
          this.submitted.set(true);
          this.form.reset({ formLoadTime: Date.now() });
        },
        error: () => {
          this.securityError.set(
            this.i18n.t().contact.securityError || 'Error al enviar el mensaje. Inténtalo de nuevo.'
          );
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && control.touched);
  }

  getFieldError(field: string): string {
    const control = this.form.get(field);
    if (!control || !control.errors) return '';

    const t = this.i18n.t().contact;

    if (control.errors['unsafeCharacters'] || control.errors['noHtml']) {
      return t.securityFieldError || 'Invalid characters detected.';
    }
    if (control.errors['noScript']) {
      return t.securityScriptError || 'Script tags are not allowed.';
    }
    if (control.errors['strictEmail']) {
      return t.emailError;
    }
    if (control.errors['maxlength']) {
      return t.maxLengthError || 'Text is too long.';
    }

    switch (field) {
      case 'name':
        return t.nameError;
      case 'email':
        return t.emailError;
      case 'message':
        return t.messageError;
      default:
        return t.securityFieldError || 'Invalid input.';
    }
  }
}
