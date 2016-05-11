import { describe, it, expect, beforeEach } from '@angular/core/testing';
import { SayHelloPipe } from './say-hello.pipe.ts';

describe('Test: SayHelloPipe', () => {

    let testee;
    beforeEach(() => {
        testee = new SayHelloPipe();
    });

    it('Should say hello', () => {
        expect(testee.transform('world')).toEqual('Hello world');
    });

});
