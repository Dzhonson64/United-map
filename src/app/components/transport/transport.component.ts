import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const cards = document.querySelectorAll(".card");

    function transition() {
      // @ts-ignore
      if (this.classList.contains("active")) {
        // @ts-ignore
        this.classList.remove("active");
      } else {
        // @ts-ignore
        this.classList.add("active");
      }
    }

    cards.forEach((card) => card.addEventListener("click", transition));
  }

}
