<template>
    <div></div>
</template>

<script>
var peg = require("pegjs");
import tjsGrammar from 'raw-loader!../assets/js/tjs_grammar.pegjs'
import startupTjs from 'raw-loader!../assets/js/startup.tjs'
import runTjs from '../assets/js/run_tjs.js'

export default {
    name: 'Parser',
    data: function () {
        return {
            startup_script: 'startup.tjs'
        }
    },
    mounted: function () {
        var parser = peg.generate(tjsGrammar);
        console.log(parser);
        let ast = null;
        try {
            ast = parser.parse(startupTjs);
        } catch (err) {
            console.error(err.message);
            ast = null;
        }
        // Try to run AST
        if (ast != null) {
            console.log(ast);
            runTjs.run(ast);
        }


    }
}
</script>