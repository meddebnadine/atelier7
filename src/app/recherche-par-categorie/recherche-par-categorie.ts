import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit';

@Component({
  imports: [CommonModule, RouterLink, FormsModule],
  selector: 'app-recherche-par-categorie',
  styles: ``,
  templateUrl: './recherche-par-categorie.html',
})
export class RechercheParCategorie implements OnInit {

  produits: Produit[] = [];
  tousProduits: Produit[] = [];
  categories: Categorie[] = [];
  IdCat!: number;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
    this.produitService.listeCategories().subscribe(cats => this.categories = cats);
  }

  chargerProduits() {
    this.produitService.listeProduits().subscribe(prods => {
      this.tousProduits = prods;
      this.onChange();
    });
  }

  onChange() {
    this.produits = this.IdCat
      ? this.tousProduits.filter(p => p.categorie?.idCat == this.IdCat)
      : this.tousProduits;
  }

  supprimerProduit(p: Produit) {
    if (confirm("Etes-vous sûr ?")) {
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => this.chargerProduits());
    }
  }
}