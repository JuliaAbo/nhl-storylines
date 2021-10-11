import  {IExpression } from "./IExpression";  

export class Var implements IExpression {
    private name:string; 

    constructor(name:string){
        this.name = name; 
    }


}