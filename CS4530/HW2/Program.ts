import {Var} from "./IExpression/Var"
export class Program {
    private myVariables : {[key: string]: Var}

    Program() {
        this.myVariables = {};
    }

    public addOrUpdateVariable(name:string, variable:Var){
        this.myVariables[name] = variable
    }

    // returns a copy of this program's variables 
    // TODO: return a copy, not the full thing 
    public getVariables(){
        return this.myVariables; 
    }
}