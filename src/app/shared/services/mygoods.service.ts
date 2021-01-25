import { HttpClient } from '@angular/common/http';
import { BaseHttp } from './basehttp';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MygoodsService extends BaseHttp {

  constructor(public http: HttpClient) {
    super(http, 'goods');
  }
}

