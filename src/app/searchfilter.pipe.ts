import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(dataSource: any[], searchValue: string): any[] {
    if (!dataSource || !searchValue) {
      return dataSource;
    }
    return dataSource.filter(data => data.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
