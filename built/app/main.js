System.register(['@angular/platform-browser-dynamic', '@angular/router', './common/services/logger.service', './app.component.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, router_1, logger_service_1, app_component_ts_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (app_component_ts_1_1) {
                app_component_ts_1 = app_component_ts_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_ts_1.AppComponent, [router_1.ROUTER_PROVIDERS, logger_service_1.Logger]);
        }
    }
});
//# sourceMappingURL=main.js.map