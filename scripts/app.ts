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

console.log("Dati Dipendente usando le tuple: " ,employeeName,employeeAge,employeeIsAvailable)

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

console.log("Dati studente Mauro usando interface: " , student1);


// CUSTOM TYPE


type Person = {
    name:string,
    surname:string,
    age:number,
    email:string

}


let persona2 : Person

persona2= {
    name:'Nicolas',
    surname:'Cavalli',
    age:22,
    email:'Nicolas@gmail.com'

}


console.log("i dati di persona2 usando Custom Type: " ,persona2)


type Coordinates = [number,number];

const city : Coordinates = [22,55]

console.log("Le coordinate della citta' sono usando Custom Type: " ,city)
 

// UNION TYPE

// SI POSSONO USARE I CUSTOM TYPE SPECIFICANDO I TIPI DI DATO CHE POSSONO ESSERE PIU DI UNO

type Password = string | number

const user:Password = 'giggio@gmail.com'

const user2: Password = 32322



console.log("i dati dell'utenti usando custom e union type: ", user,user2)


// ENUM


// ENUM ENUMERAZIONE SONO UNA STRUTTURA DATI CHE CONSENTE DI DICHAIRARE UN SET DI COSNTANTI CON NOMI SIGNIFICATIVI
// GLI ENUM SONO UTILI PER RAPPRESENTARE UN INSIEME FISSO DI VALORI CORRELLATI CHE HANNO UN SIGNIFICATO SPECIFICO

// ENUM USANDO LE STRINGHE COME VALORE

enum ChessWord {
    PAWN = 'pawn',
    KNIGHT = 'knight',
    BISHOP = 'bishop',
    ROOK = 'rook',
    QUEEN = 'queen',
    KING = 'king'
}

enum ColorWord  {
    NERO = 'nero',
    BIANCO = 'bianco'
}


const giocatore1 = {
    player:'giacomo',
    colore: ColorWord.NERO,
    piece: ChessWord.KNIGHT
}


console.log("i dati del giocatore usando enum con le stringhe: " ,giocatore1);


// ENUM USANDO I NUMERI COME VALORE


enum ChessNumber {
    PAWN = 1,
    KNIGHT = 3,
    BISHOP = 3,
    ROOK = 5,
    QUEEN = 9,
    KING = 10
}


enum ColorNumber  {
    NERO = 0,
    BIANCO = 1
}

const giocatore2 = {
    player:'Davide',
    color:ColorNumber.BIANCO,
    piece:ChessNumber.ROOK
}
console.log("i dati dell' giocatore usando enum numerici: ", giocatore2)



// FUNNCTION 


// IN TYPESCRIPT LE FUNZIONI POSSONO ESSERE TIPIZZATE


function sum(numberA:number,numberB:number):number{
    return numberA + numberB
}

// LA FUNZIONE TORNA UN TIPO DATO NUMERICO IN CASO IN CUI NON'ESTATO SPECIFICATO IL TIPO DI DATO DELLA FUNZIONE
// E GLI ARGOMENTI SONO STATI TIPIZZATI CI SARA L'INFERENCE LA FUNZIONE CAPISCE GIA' CHE DEVE TORNARE UN TIPO DI
// DATO NUMERICO IN CASO IN CUI NON SI SPECIFICA' IL TIPO DI DATO LA FUNZIONE TORNERA' UNDEFINED NELLA COMPILAZIONE 

let resultSum = sum(5,5);

console.log("il risultato della somma in typescript: " , resultSum);
