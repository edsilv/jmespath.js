
var metadata = require('./package');

var GulpConfig = (function () {
    function GulpConfig() {
        this.dist = './artifacts';
        this.browserifyOut = 'jmespath.min.js';
        this.browserifySrc = ['jmespath.js'];
        this.browserifyStandalone = 'jmespath';
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;