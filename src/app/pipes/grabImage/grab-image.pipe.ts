import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grabImage'
})
export class GrabImagePipe implements PipeTransform {

  transform(linkToImage: string): string {
    return null;
  }

}
