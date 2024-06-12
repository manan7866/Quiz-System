import inquirer from "inquirer";

let correct_answer = 0;

let wrong_answer = 0;

console.log("Question > Answers M'C'Q's")

let answer = await inquirer.prompt([{
    name : "qes1",
    type : "list",
    message : "How many province in Pakistan",
    choices : ["Five","Three","Four","Six"]
},
 ])
if (answer.qes1 == "Four"){
    console.log("correct  >"+ "\n~Five\n~Three\n~Four**\n~Six" )
    correct_answer = correct_answer + 1

} else {
    console.log("Wrong four is correct answer  >"+ "\n~Five\n~Three\n~Four**\n~Six" )
    wrong_answer = wrong_answer + 1
}
let answer2 = await inquirer.prompt({

        name : "qes2",
    type : "list",
    message : "Which city capital of Pakistan",
    choices : ["Karachi","Islamabad","Lahore","Quetta"]


})
if (answer2.qes2 == "Islamabad"){
    console.log("correct  >"+  "\n~Karachi\n~Islamabad**\n~Lahore\n~Quetta")
    correct_answer = correct_answer + 1

} else {
    console.log("Wrong Islamabad is correct answer  >" +   "\n~Karachi\n~Islamabad**\n~Lahore\n~Quetta")
     wrong_answer = wrong_answer + 1
}
let answer3 = await inquirer.prompt({
    name : "qes3",
    type : "list",
    message : "Which city capital of province Sindh",
    choices : ["Karachi","Hyderabad","Sukkur","Larkana"]

})
if (answer3.qes3 == "Karachi"){
    console.log("correct  >"+  "\n~Karachi**\n~Hyderabad\n~Sukkur\n~Larkana")
    correct_answer = correct_answer + 1

} else {
    console.log("Wrong Karachi is correct answer  >" +   "\n~Karachi**\n~Hyderabad\n~Sukkur\n~Larkana")
     wrong_answer = wrong_answer + 1

}
let answer4 = await inquirer.prompt([{
    name : "qes4",
    type : "list",
    message : "When was Pakistan independent",
    choices : ["1950","1948","1947","1951"]
},
 ])
if (answer4.qes4 == "1947"){
    console.log("correct  >"+  "\n~1950\n~1948\n~1947**\n~1951")
    correct_answer = correct_answer + 1

} else {
    console.log("Wrong 1947 is correct answer  >" +  "\n~1950\n~1948\n~1947**\n~1951")
     wrong_answer = wrong_answer + 1

}

let answer5 = await inquirer.prompt([{
    name : "qes5",
    type : "list",
    message : "Who was the first Governor General of Pakistan",
    choices : ["Qauid-e-Azam Mohammad Ali Jinnah","ALama Iqbal","Sir Syed Ahmed Khan","Other"]
},
 ])
if (answer5.qes5 == "Qauid-e-Azam Mohammad Ali Jinnah"){
    console.log("correct  >"+  "\n~Qauid-e-Azam Mohammad Ali Jinnah**\n~\"ALama Iqbal\n~Sir Syed Ahmed Khan\n~Other")
    correct_answer = correct_answer + 1

} else {
    console.log("Wrong Qauid-e-Azam Mohammad Ali Jinnah is correct answer  >" +  "\n~Qauid-e-Azam Mohammad Ali Jinnah**\n~\"ALama Iqbal\n~Sir Syed Ahmed Khan\n~Other")
     wrong_answer = wrong_answer + 1

}
let answer6 = await inquirer.prompt({

        name : "qes6",
    type : "list",
    message : "Which city is the largest city of Pakistan",
    choices : ["Lahore","Quetta","Islamabad","Karachi"]


})
if (answer6.qes6 == "Karachi"){
    console.log("correct  >"+  "\n~Lahore\n~Quetta\n~Islamabad\n~Karachi**")
    correct_answer = correct_answer + 1

} else {
    console.log("Wrong Karachi is correct answer  >" +   "\n~Lahore\n~Quetta\n~Islamabad\n~Karachi**")
     wrong_answer = wrong_answer + 1
}

 console.log(`your correct Answers ; ${correct_answer} \n your Wrong Answers ; ${wrong_answer}`)