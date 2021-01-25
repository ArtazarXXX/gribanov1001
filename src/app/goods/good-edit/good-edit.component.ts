import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyGoods } from 'src/app/shared/models/mygoods.model';
import { MygoodsService } from 'src/app/shared/services/mygoods.service';

@Component({
  selector: 'app-good-edit',
  templateUrl: './good-edit.component.html',
  styleUrls: ['./good-edit.component.css']
})
export class GoodEditComponent implements OnInit {

  id: number;
  good: MyGoods;
  goodForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private MygoodsService: MygoodsService,
    private router: Router
    ){
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.getData();
    this.goodForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(/\S/)]),
      count: new FormControl(null, [Validators.required, Validators.pattern(/\d/)]),
      type: new FormControl(false)
    });
  }

  async getData() {
    if (this.id > 0) {
      try {
        let good = this.MygoodsService.getOneById(this.id);
        this.good = await good;
      } catch (err) {
        console.error(err);
      }
      this.goodForm.patchValue({
        name: this.good.name,
        count: this.good.count,
        type: this.good.type,
      });
    }
  }

  async onSave() {
    if (this.id > 0) {
      try {
        await this.MygoodsService.putOneById(this.id, this.goodForm.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        let res = await this.MygoodsService.postOne(this.goodForm.value);
        this.getData();
      } catch (err) {
        console.error(err);
      }
    }
    this.router.navigate(['/goods']);
  }

  async onDelete() {
    try {
      await this.MygoodsService.deleteOneById(this.id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/good']);
  }

}

