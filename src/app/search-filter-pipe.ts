import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    if (!list) return [];
    if (!filterText) return list;
    return list.filter(item =>
      item.nomProduit.toLowerCase().includes(filterText.toLowerCase()));
  }
}