import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  imports: [FormsModule, CommonModule, RouterLink, SearchFilterPipe],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom implements OnInit {

  produits: Produit[] = [];
  searchTerm: string = '';

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduits().subscribe(prods => this.produits = prods);
  }

  supprimerProduit(p: Produit) {
    if (confirm("Etes-vous sûr ?")) {
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => this.chargerProduits());
    }
  }
}