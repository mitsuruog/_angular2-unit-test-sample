System.register(['@angular/core/testing', '@angular/compiler/testing', '@angular/core', './say-hello.component.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var testing_1, testing_2, core_1, say_hello_component_ts_1;
    var TestComponent;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (say_hello_component_ts_1_1) {
                say_hello_component_ts_1 = say_hello_component_ts_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent() {
                }
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'test-container',
                        template: '<div></div>',
                        directives: [say_hello_component_ts_1.SayHelloComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            }());
            testing_1.describe('Test: SayHelloComponent', function () {
                testing_1.beforeEachProviders(function () {
                    testing_2.TestComponentBuilder;
                });
                testing_1.it('Should display Hello', testing_1.injectAsync([testing_2.TestComponentBuilder], function (tcb) {
                    var template = '<say-hello></say-hello>';
                    return tcb.overrideTemplate(TestComponent, template)
                        .createAsync(TestComponent)
                        .then(function (fixture) {
                        var div = fixture.nativeElement.querySelector('div');
                        testing_1.expect(div).toHaveText('Hello');
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=say-hello.component.spec.js.map