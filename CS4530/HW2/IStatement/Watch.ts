import { AStatement } from "./AStatement"
import {Var} from "../IExpression/Var"

export class Watch extends AStatement {
    constructor(variable:Var) {
        super(variable)
    }
}