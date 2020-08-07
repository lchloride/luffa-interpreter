import runTjs from './run_tjs'
export default {
    name: 'RunTjs',
    runNode: function (node, runningStack) {
        if (node.type === 'Program') {
            for (let idx in node.body) {
                runTjs.runNode(node.body[idx], runningStack);
            }
        }
    }
}
