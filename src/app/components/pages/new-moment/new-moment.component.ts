import { Component, OnInit } from '@angular/core';
import { MomentFormComponent } from '../../moment-form/moment-form.component';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.scss'
})
export class NewMomentComponent implements OnInit {
  btnText = 'compartilhar';
  constructor(){}

  ngOnInit(): void {

  }

}
