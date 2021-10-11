import {StatementFactory}from "./IStatement/StatementFactory"
import {Var} from "./IExpression/Var"

export interface IPrinter {

}



export function main(programJSON:any, commandsJSON:any, printer:IPrinter ){ 
    // simulate the program as is
    // Listen for more commands 
}

function makeProgram(programJSON) {
    const statementFactory = new StatementFactory()
    var dictionary = {}
    for (var key in programJSON) {
        var statement = programJSON[key]
        // pass this into a constructor 
        var statementKind = statement["kind"]; 
        var variableKind = statement["variable"]["kind"]
        var variableName:string = statement["variable"]["name"]
        var fileKind = statement["file"]["kind"]
        var fileName = statement["file"]["name"]
        var variable = new Var(variableName); 
        var programStatement = statementFactory.returnCorrectStatement(statementKind, variable)
        
    }
}