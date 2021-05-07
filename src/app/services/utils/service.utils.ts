import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * A codec that would allow to properly encode request parameters
 */
@Injectable({
  providedIn: 'root'
})
export class RequestParamsEncoder extends HttpUrlEncodingCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
