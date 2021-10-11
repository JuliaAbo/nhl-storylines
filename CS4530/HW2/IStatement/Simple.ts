import { AStatement } from "./AStatement"
import {Var} from "../IExpression/Var"

export class Simple extends AStatement {
    
    constructor(variable:Var) {
        super(variable)
    }
}