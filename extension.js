'use strict'

function activate(context) {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-attrs'));
        }
    };
}
exports.activate = activate;
