import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  imports: [FormsModule],
  selector: 'app-add-produit',
  templateUrl: './add-produit.html',
})
export class AddProduit {

  newProduit = new Produit();

  constructor(private produitService: ProduitService, private router: Router) {}

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
      console.log(prod);
      this.router.navigate(['produit']);
    });
  }
}