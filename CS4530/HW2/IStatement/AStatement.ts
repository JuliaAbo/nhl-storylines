import {Var} from "../IExpression/Var"
export abstract class AStatement {
    private targetVariable:Var

    constructor(variable:Var){
        this.targetVariable = variable
    }
}