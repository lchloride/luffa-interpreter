import runTjs from './run_tjs';

export default {
    name: 'RunExpression',
    runNode: function (node, runningStack) {
        if (node.type === 'ExpressionStatement') {
            runTjs.eval(node.src);
        }
    }
}