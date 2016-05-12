import {Injectable} from "@angular/core";

@Injectable()
export class SayHelloService {

    constructor() {}

    say(): string {
        return 'Hello';
    }

}
