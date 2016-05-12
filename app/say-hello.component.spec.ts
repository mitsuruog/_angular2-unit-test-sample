import { describe, it, injectAsync, expect, beforeEachProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { SayHelloComponent } from './say-hello.component';

@Component({
    selector: 'test-container',
    template: '<div></div>',
    directives: [SayHelloComponent]
})
class TestComponent { }

describe('Test: SayHelloComponent', () => {

    beforeEachProviders(() => {
        TestComponentBuilder
    });

    it('Should display Hello', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        let template = '<say-hello></say-hello>';
        return tcb.overrideTemplate(TestComponent, template)
            .createAsync(TestComponent)
            .then((fixture) => {
                let div = fixture.nativeElement.querySelector('div');
                expect(div).toHaveText('Hello');
            });
    }));
});
