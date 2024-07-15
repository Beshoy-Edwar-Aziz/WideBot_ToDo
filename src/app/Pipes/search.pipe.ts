import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchValue:string): any {
    return value?.filter((el:any)=>el?.Title?.toLowerCase()?.includes(searchValue?.toLowerCase()));
  }

}
