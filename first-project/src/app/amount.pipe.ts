import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let amount = value.charAt(0) + ' ' + value.substring(1);
    return amount;
  }

}
