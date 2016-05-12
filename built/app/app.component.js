///<reference path="../../typings/browser.d.ts"/>
System.register(['@angular/core', './common/services/logger.service', "./say-hello.pipe.ts", "./say-hello.component.ts"], function(exports_1, context_1) {
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
    var core_1, logger_service_1, say_hello_pipe_ts_1, say_hello_component_ts_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (say_hello_pipe_ts_1_1) {
                say_hello_pipe_ts_1 = say_hello_pipe_ts_1_1;
            },
            function (say_hello_component_ts_1_1) {
                say_hello_component_ts_1 = say_hello_component_ts_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(logger) {
                    this.logger = logger;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.logger.log('Alo!! Alo!!');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'src/src.html',
                        styleUrls: ['src/src.css'],
                        providers: [logger_service_1.Logger],
                        directives: [say_hello_component_ts_1.SayHelloComponent],
                        pipes: [say_hello_pipe_ts_1.SayHelloPipe]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map