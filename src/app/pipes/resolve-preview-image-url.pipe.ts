import { Pipe, PipeTransform } from '@angular/core';
import { Picture} from '../interfaces/Picture'

@Pipe({
  name: 'resolvePreviewImageUrl'
})
export class ResolvePreviewImageUrlPipe implements PipeTransform {

  transform(value: Picture[], defaultLink: string): string {
    if(value && value.length > 0) {
      let previewOne: Picture = value.find(picture => picture.is_preview);
      return previewOne && previewOne.link ? previewOne.link : defaultLink;
    } 
    return defaultLink;
  }
}
