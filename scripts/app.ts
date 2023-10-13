// TYPE ASSIGNMENT


// LA VARIABILE VIENE TIPIZZATA GLI VIENE ASSEGNATA LA SPECIFICA' DEL TIPO DI DATO

let word: string = 'hello how are you??'

console.log('Type Assignment: ' , word , ' il tipo di dato è: ' , typeof word );


// TYPE INFERENCE

// LA VARIABILE VIENE TIPIZZATA IN AUTONOMIA DA TYPESCRIPT RICONSOCE IL TIPO DI DATO SENZA LA SPECIFICA'

let PI = 3.14;

console.log('Type Inference: ' , PI , ' il tipo di dato è: ' , typeof PI );


// TUPLE


// LE TUPLE DETERMINANO LA LUNGHEZZA DI UN ARRAY DICHIARANDONE IL TIPO DI DATO

let listStudent:[string,number,boolean,any] = ["Marco",33,true,{hobbies:'Pattinaggio',stipendio:1500}]

listStudent = ["Giovani",22,false,{hobbies:'Calcio',stipendio:1200}]


console.log("Array con Tuple di 3 elementi: " , listStudent)

// LA LUGHEZZA DELL' ARRAY E' DI 3 ELEMENTI DI TIPO STRING,NUMBER,BOOLEAN'


let employee:[name:string,age:number,isAvailable:boolean]

employee = ["Roberto",28,true]

const employeeName:string = employee[0];
const employeeAge:number = employee[1];
const employeeIsAvailable:boolean = employee[2];

console.log("Dati Dipendente: " ,employeeName,employeeAge,employeeIsAvailable)

// PER ACCEDERE AI DATI DELL ' ARRAY


// INTERFACE

// SPECIFICARE I TIPI DI DATO ALL'INTERNO DELL 'INTERFACE 
interface Student {
    name:string,
    age:number,
    class:number,
    votes:[number,number,number]
}

// USARE INTERFACE COME SINTASSI OGGETTO SU JS

const student1 : Student = {
    name:"Mauro",
    age:33,
    class:4,
    votes:[2,4,4]
}

console.log("Dati studente 1: " , student1);






