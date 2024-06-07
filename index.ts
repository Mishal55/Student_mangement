
//Student management program


import inquirer from "inquirer";
const randomnumber:number = Math.floor(10000 + Math.random() * 90000)

let balance :number = 0

let ans = await inquirer.prompt([
    {
    name: "students",
    type:"input",
    message:"Enter student name ",
    validate: function(value){
        if(value.trim() !== ""){
            return true;
        }
        return "Please enter a non-empty value";
    },

    },
{

name:'courses',
type:'list',
message:"Select the course to enrolled",
choices:["MS office","HTML","CSS","Python"]

}
]);

const fees: {[key:string]:number}={
    "MS office":3000,
    "HTML":4000,
    "CSS": 6000,
    "Python":8000,
};
console.log(`\nTuition fee:${fees[ans.courses]}/-\n`);
console.log(`Balance ${balance}\n`);

// payment method

let paymentType= await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"Select payment method",
        choices:["Bank transfer","Jazzcash","easypaisa"]
    },
    {
        name:"amount",
        type:"input",
        message:"Transfer Money",
        validate: function(value){
            if(value.trim() !== ""){
                return true;
            }
            return "Please enter a non-empty value";
        }
    }

]);
console.log(`\nYou select payment method ${paymentType.payment}`);

const tutionfee = fees [ans.courses];
const paymentamount = parseFloat(paymentType.amount)

if (tutionfee == paymentamount){
    console.log(`Congratulation you have successfully enrooled in ${ans.courses}.\n`);
      let answer =await inquirer.prompt([
        {
            name:"Select",
            type:"list",
            message: "What would you like to do next",
            choices:["View status","Exit"]
        }
      ])
      if(answer.Select == "View status"){
        console.log("\n****Status*****\n");
        console.log(`Student Name ${ans.students}`);
        console.log(`Student ID ${randomnumber}`);
        console.log(`Course ${ans.courses}`);
        console.log(`Tution fee paid ${paymentamount}`);
        console.log(`Balance ${balance += paymentamount}`);
        
      }else{
        console.log("\n Exiting Student management system");
        
      }


}else{
    console.log("Invalid amount due to course\n");
    
}