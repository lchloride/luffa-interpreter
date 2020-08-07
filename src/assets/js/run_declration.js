import runTjs from './run_tjs'

export default {
    name: 'RunDeclration',
    runNode: function (node, runningStack) {
        if (node.type === "VariableDeclaration") {
            runTjs.eval(node.src);
        }
    }
}