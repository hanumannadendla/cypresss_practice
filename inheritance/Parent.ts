
export module mymodule{
  export  class Parent{
        color:string
        constructor(color:string){
            this.color=color
            console.log("parent constructor called....")
        }
    }
    
    export class Child extends Parent{
        price:Number
    
        constructor(price:Number,color:string){
            super(color)
            this.price=price
            console.log("child constructor called....")
        }
    
        display():void{
            console.log("child display called.....")
            console.log(this.color);
            console.log(this.price);
        }
    }
    
   
}
let obj=new mymodule.Child(100,"book");
obj.display();

