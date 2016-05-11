///<reference path="../../typings/browser.d.ts"/>

import {Component} from '@angular/core';
import {Logger} from './common/services/logger.service';
import {SayHelloPipe} from "./say-hello.pipe.ts";
import {SayHelloComponent} from "./say-hello.component.ts";

@Component({
  selector: 'my-app',
  templateUrl: 'src/src.html',
  styleUrls: ['src/src.css'],
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
