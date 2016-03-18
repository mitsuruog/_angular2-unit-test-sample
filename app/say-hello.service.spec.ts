import { describe, it, inject, expect, beforeEachProviders } from 'angular2/testing';
import { SayHelloService } from "./say-hello.service";

describe('Test: SayHelloService', () => {

    beforeEachProviders(() => [
        SayHelloService
    ]);

    it('Should service exist', inject([SayHelloService], (testee: SayHelloService) => {
        expect(testee).toBeDefined();
    }));

    it('Should say Hello', inject([SayHelloService], (testee: SayHelloService) => {
        expect(testee.say()).toEqual('Hello');
    }));

});