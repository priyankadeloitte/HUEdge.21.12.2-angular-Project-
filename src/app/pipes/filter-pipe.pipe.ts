import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;



    return value.filter(function(item: any){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}

}
