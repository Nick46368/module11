const path = require('path');

exports.config = {
    allScriptsTimeout: 20000,
    getPageTimeout: 20000,
    specs: [path.resolve("./test/e2e/features/*.feature")],
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    capabilities: {
        browserName: 'chrome',
        maxInstances: 1,
        chromeOptions: {
            args: ['--no-sandbox', '--window-size=1920,1080']
        }
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: [path.resolve('./test/e2e/step_definitions/*.js')],
        ignoreUncaughtExceptions: true,
        format: ["json:./test/reports/report.json",
                "./node_modules/cucumber-pretty"],
        tags: '@militarist'
    },
    onPrepare: () => {
        return browser.waitForAngularEnabled(false);
    }
}
