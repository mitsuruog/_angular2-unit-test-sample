import {Injectable} from "angular2/core";

@Injectable()
export class SayHelloService {
    
    constructor() {}
    
    say(): string {
        return 'Hello';
    }

}