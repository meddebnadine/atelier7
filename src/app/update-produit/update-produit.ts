import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-produit',
  templateUrl: './update-produit.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class UpdateProduit implements OnInit {

  currentProduit = new Produit();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit() {
    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe(prod => {
        this.currentProduit = prod;
      });
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
      this.router.navigate(['produit']);
    });
  }
}