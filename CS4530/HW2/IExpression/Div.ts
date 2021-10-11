import  {IExpression } from "./IExpression";  

export class Div implements IExpression {
    private left:IExpression; 
    private right:IExpression; 
}