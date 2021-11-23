import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { StripeService, StripeCardComponent } from "ngx-stripe";
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from "@stripe/stripe-js";
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html'
})
export class PaymentsComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  success: boolean = false;
  error: string | undefined;
  roomId: string | undefined;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '20px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  }

  stripeTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService
  ) { }

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    })
  }
  createToken(): void {
    const name = this.stripeTest.get('name')?.value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((res) => {
        if (res.token) {
          this.error = undefined;
          this.success = true;
        } else if (res.error) {
          this.success = false;
          this.error = res.error.message;
        }
      })
  }
}
