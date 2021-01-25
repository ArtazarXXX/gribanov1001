import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyGoods } from 'src/app/shared/models/mygoods.model'
import { MygoodsService } from "src/app/shared/services/mygoods.service";
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-good-table',
  templateUrl: './good-table.component.html',
  styleUrls: ['./good-table.component.css']
})
export class GoodTableComponent implements OnInit {

  goods: MyGoods[] = [];

  constructor(
    private MygoodsService: MygoodsService,
    private router: Router
    ){ }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let goods = this.MygoodsService.getAll();
      this.goods = isNullOrUndefined(await goods) ? [] : await goods;
    } catch (err) {
      console.error(err);
    }
  }

  onAddGood() {
    this.router.navigate([this.router.url, 'edit']);
  }

  onEditGood(id: number) {
    this.router.navigate([this.router.url, 'edit', id]);
  }

  async onDeleteGood(id: number) {
    try {
      await this.MygoodsService.deleteOneById(id);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }

  }

  async onEditType(good){
    if (good.type === true){
      good.type = false
      try {
        await this.MygoodsService.putOneById(good.id, good)
      } catch (err) {
        console.error(err);
      }
    } else{
      try {
        good.type = true
        await this.MygoodsService.putOneById(good.id, good)
      } catch (err) {
        console.error(err);
      }
    }
    this.getData()
  }
}
