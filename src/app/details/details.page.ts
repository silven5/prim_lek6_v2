import { BirthdayActions } from './../actions/birthday.actions';
import { Component, OnInit } from '@angular/core';
import { NavParams,NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { AppState } from '../services/app-state';
import { Birthday } from '..//models/birthday';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public birthday: Birthday;
  public isNew = true;
  public action = 'Add';
  public isoDate = '';

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private store: Store<AppState>,
    private birthdayActions: BirthdayActions) { }
    ionViewWillEnter() {
      let editBirthday = this.navParams.get('birthday');

      if (editBirthday) {
          this.birthday = editBirthday;
          this.isNew = false;
          this.action = 'Edit';
          if (this.birthday.Date)
          {
          this.isoDate = this.birthday.Date.toISOString().slice(0,10);
          }
      }
  }
  save() {
    this.birthday.Date = new Date(this.isoDate);

    if (!this.isNew)
        this.store.dispatch(this.birthdayActions.addBirthday(this.birthday));

        this.dismiss();

}
update()
{
  this.store.dispatch(this.birthdayActions.updateBirthday(this.birthday));
  this.dismiss();
}

delete() {
    this.store.dispatch(this.birthdayActions.deleteBirthday(this.birthday));
    this.dismiss();
}
dismiss() {
  console.log(this.birthday);
  console.log (this.birthday.Name);
  this.modalCtrl.dismiss({
    'dismissed': true
  });
}


  ngOnInit() {
  }

}
