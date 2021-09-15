import { catchError } from 'rxjs/operators';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import { BehaviorSubject, EMPTY, Observable, Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessageBs = new BehaviorSubject('');
  selectedProductId: number;

  products$: Observable<Product[]> = this.productService.products$.pipe(
    catchError((err) => {
      this.errorMessageBs.next(err);
      return EMPTY;
    })
  );
  sub: Subscription;

  constructor(private productService: ProductService) {}

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
