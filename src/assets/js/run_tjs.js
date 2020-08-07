import runProgram from "./run_program.js";
import runDeclration from "./run_declration";
import runExpression from "./run_expression";


export default {
    name: 'RunTjs',
    ast: null,
    run: function (ast) {
        this.ast = ast;
        this.runNode(ast, []);
    },
    runNode: function (node, runningStack) {
        if (node.type === 'Program') {
            runProgram.runNode(node, runningStack);
        } else if (node.type === "VariableDeclaration") {
            runDeclration.runNode(node, runningStack);
        } else if (node.type === "ExpressionStatement") {
            runExpression.runNode(node, runningStack);
        }
    },
    eval: function(statements) {
        console.log('Running: '+statements);
        window.eval(statements);
    },
    loadLibrary: function(libPath) {
        var script=document.createElement("script");
        script.type="text/javascript";
        script.src=libPath;
        document.getElementsByTagName('head')[0].appendChild(script);

        let runNode = this.runNode;
        let ast = this.ast;
        script.onload=function(){
            console.log(libPath+' loaded');
            runNode(ast, []);
        }//js加载完成执行方法
    }
}


