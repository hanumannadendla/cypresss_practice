import * as test from "./Parent";

class Child2 extends test.mymodule.Child{

    auth_name:string
    constructor(auth_name:string,name:string,price:number){
        console.log("child2 constructor called....")
        super(price,name);
        this.auth_name=auth_name;
    }
    display():void{
        console.log("child2 display called.....")
        let obj1=new test.mymodule.Child(200,"automation testing");
        console.log("object 1 property"+obj1.color);
        console.log("object 1 property"+obj1.price);
    }

}

let child2=new Child2("hanuma","manual testing",150);
console.log(child2.auth_name);
console.log(child2.color);
console.log(child2.price);
child2.display();