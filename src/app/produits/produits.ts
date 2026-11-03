import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-produits',
  templateUrl: './produits.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Produits implements OnInit {

  produits!: Produit[];

  constructor(private produitService: ProduitService) {}

  ngOnInit() {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
  }
}