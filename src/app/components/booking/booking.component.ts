import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      var guestAmount = $("#guestNo");

      $("#cnt-up").click(function () {
        guestAmount.val(Math.min(parseInt($("#guestNo").val()) + 1, 20));
      });
      $("#cnt-down").click(function () {
        guestAmount.val(Math.max(parseInt($("#guestNo").val()) - 1, 1));
      });

      $(".btn").click(function () {
        var $btn = $(".btn");

        $btn.toggleClass("booked");
        $(".diamond").toggleClass("windup");
        $("form").slideToggle(300);
        $(".linkbox").toggle(200);

        if ($btn.text() === "Заказ оформлен") {
          $btn.text("Оформить заказ!");
        } else {
          $btn.text("Заказ оформлен");
        }
      });
    });

  }

}
