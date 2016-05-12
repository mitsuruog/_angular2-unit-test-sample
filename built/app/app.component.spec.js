System.register(['@angular/core/testing', './common/services/logger.service', './app.component.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, logger_service_1, app_component_ts_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (app_component_ts_1_1) {
                app_component_ts_1 = app_component_ts_1_1;
            }],
        execute: function() {
            testing_1.describe('Test: AppComponent', function () {
                testing_1.beforeEachProviders(function () { return [
                    app_component_ts_1.AppComponent,
                    logger_service_1.Logger
                ]; });
                testing_1.it('AppComponentが存在すること', testing_1.inject([app_component_ts_1.AppComponent, logger_service_1.Logger], function (testee) {
                    testing_1.expect(testee).toBeDefined();
                }));
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map