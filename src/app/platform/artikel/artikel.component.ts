import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.scss'],
})
export class ArtikelComponent implements OnInit {

  title: string = "ByeBye Pille!"
  subtitle: string = "Tipps & Tricks"
  preview_artikel_text: string  = ""
  artikel_text: string = ""

  constructor() { }

  ngOnInit() {}

}
