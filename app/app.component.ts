import {Component, OnInit} from 'angular2/core';
import {Logger} from './common/services/logger.service';
import {SayHelloPipe} from "./say-hello.pipe";
import {SayHelloComponent} from "./say-hello.component";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css'],
  providers: [Logger],
  directives: [SayHelloComponent],
  pipes: [SayHelloPipe]
})

export class AppComponent {

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log('Alo!! Alo!!');
  }

}