const username: string | number = "juan"

const sum = (a:number, b:number) =>{
    return a + b;
}

sum(2, 5)

class Person {
    constructor(public age:number, public lastname:string){
    }
}

const juan = new Person(15, "paz")