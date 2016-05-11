import {Component, OnInit} from "@angular/core";
import {SayHelloService} from "./say-hello.service.ts";

@Component({
    selector: 'say-hello',
    template: '<div>Hello</div>',
    providers: [SayHelloService]
})
export class SayHelloComponent implements OnInit {

    constructor(
        private service: SayHelloService
    ) { }

    ngOnInit() {
        console.log(this.service.say());
    }
}
