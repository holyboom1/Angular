import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(name, gender): unknown {

    if (gender == "mr") {
      return `Mister ${name}`
    }
    if (gender == "ms") {
      return `Miss ${name}`
    }
    else {
      return name
    }


  }

}
