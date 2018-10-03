import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-poll",
  templateUrl: "./user-poll.component.html",
  styleUrls: ["./user-poll.component.css"]
})
export class UserPollComponent implements OnInit {
  randomText: string;

  constructor() {}

  ngOnInit() {
    this.randomText = "Wagwan";
  }

  changeText(text) {
    this.randomText = text;
  }
}
