//Basic types
var n:number=25; 
var s:string="my name is puja";
var b:boolean=true;
var nums:number[] = [2,4,6,8];
var tuple:[string,number]=["puja",25];
enum Daysoftheweek{  
monday,
tuesday,
wednesday,
thursday,
friday,
saturday,
sunday,
} //enum defining the days of the week
console.log(n);
console.log(s);
console.log(b);
console.log(nums);
console.log(tuple);
console.log(Daysoftheweek);
//functions 
function add(num1:number,num2:number){ //function to add two numbers 
return num1+num2; 
} 
console.log(add(10,20));
function capitalize(str: string): string { 
    return str.charAt(0).toUpperCase() + str.slice(1);
  } // function to capitalize the firstletter of a string
  console.log(capitalize("my name is puja"));
  //interfaces
  interface person{
    name:string;
    age:number;
    email:string;
  }
  //interfaces defining the structure  of a person
  var user:person={
    name:"puja",
    age:21,
    email:"puja@gmail.com"
  };
  console.log(user);
  //classes
//Defining a car class and representing a car with a constructor and method  
  class car{
    make:string;
    model:string;
    year:number;
    //defining constructor  
    constructor (make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year;
    } 
    Displayinfo(){
        return "Car Information:"+this.make+""+this.model+""+this.year
   }
}
var c=new car("BREZZA","ZXI",2023)
console.log(c.Displayinfo());
//generics
   function reverseArray<T> (array:T[]){
    return array.reverse();
   }
   console.log(reverseArray(["puja","psg"]));
