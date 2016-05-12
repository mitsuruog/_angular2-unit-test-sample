System.register(["@angular/core", "./say-hello.service.ts"], function(exports_1, context_1) {
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
    var core_1, say_hello_service_ts_1;
    var SayHelloComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (say_hello_service_ts_1_1) {
                say_hello_service_ts_1 = say_hello_service_ts_1_1;
            }],
        execute: function() {
            SayHelloComponent = (function () {
                function SayHelloComponent(service) {
                    this.service = service;
                }
                SayHelloComponent.prototype.ngOnInit = function () {
                    console.log(this.service.say());
                };
                SayHelloComponent = __decorate([
                    core_1.Component({
                        selector: 'say-hello',
                        template: '<div>Hello</div>',
                        providers: [say_hello_service_ts_1.SayHelloService]
                    }), 
                    __metadata('design:paramtypes', [say_hello_service_ts_1.SayHelloService])
                ], SayHelloComponent);
                return SayHelloComponent;
            }());
            exports_1("SayHelloComponent", SayHelloComponent);
        }
    }
});
//# sourceMappingURL=say-hello.component.js.map