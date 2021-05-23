import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $(".pop-up").on("click", () => {
        $("#overlay").fadeIn(300);
        $(".calendar").fadeIn(300);
        // @ts-ignore
        let clickedbutton = $("input", $(this).parent()).attr("id");
        $(".dates").data("type", clickedbutton);
      });

      $("table").on("click", function (event:any) {
        let that = $(event.target);
        if (
          that.is("td") &&
          !that.hasClass("notCurMonth") &&
          !that.hasClass("holiday") &&
          !that.hasClass("curDay")
        ) {
          $("td.curDay").toggleClass("curDay");
          that.toggleClass("curDay");
        }
      });

      $("#add_event").on("click", function () {
        let value = $("td.curDay").html();
        $("#overlay").fadeOut(300);
        $(".calendar").fadeOut(300);
        let id = $(".dates").data().type;
        $("#" + id).val(value + " May, 2014");
      });

      $("#search").on("click", function (e:any) {
        $(".booking").addClass("is-sent");
        e.preventDefault();
      });
    });

  }

}
