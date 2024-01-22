import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.scss'
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string;

  Constructor() {}

  ngOnInit(): void{

  }

}
