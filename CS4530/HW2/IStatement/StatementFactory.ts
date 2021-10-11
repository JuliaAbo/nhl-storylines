import {Simple} from "./Simple"
import {Conditional} from "./Conditional"
import {Watch} from "./Watch"
import {Var} from "../IExpression/Var"

export class StatementFactory {

    public returnCorrectStatement(type:string, variable:Var){
        if (type == "Simple"){
            return new Simple(variable)
        } else if (type == "Conditional"){
            return new Conditional(variable)
        } else if (type == "Watch"){
            return new Watch(variable)
        } else {
            return null
        } 
    }

}