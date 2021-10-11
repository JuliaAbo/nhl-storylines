import { AStatement } from "./AStatement"
import {Var} from "../IExpression/Var"

export class Conditional extends AStatement {

    constructor(variable:Var) {
        super(variable)
    }
}