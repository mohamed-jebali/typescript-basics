"use strict";
// TYPE ASSIGNMENT
// LA VARIABILE VIENE TIPIZZATA GLI VIENE ASSEGNATA LA SPECIFICA' DEL TIPO DI DATO
let word = 'hello how are you??';
console.log('Type Assignment: ', word, ' il tipo di dato è: ', typeof word);
// TYPE INFERENCE
// LA VARIABILE VIENE TIPIZZATA IN AUTONOMIA DA TYPESCRIPT RICONSOCE IL TIPO DI DATO SENZA LA SPECIFICA'
let PI = 3.14;
console.log('Type Inference: ', PI, ' il tipo di dato è: ', typeof PI);
// TUPLE
// LE TUPLE DETERMINANO LA LUNGHEZZA DI UN ARRAY DICHIARANDONE IL TIPO DI DATO
let listStudent = ["Marco", 33, true, { hobbies: 'Pattinaggio', stipendio: 1500 }];
listStudent = ["Giovani", 22, false, { hobbies: 'Calcio', stipendio: 1200 }];
console.log("Array con Tuple di 3 elementi: ", listStudent);
// LA LUGHEZZA DELL' ARRAY E' DI 3 ELEMENTI DI TIPO STRING,NUMBER,BOOLEAN'
let employee;
employee = ["Roberto", 28, true];
const employeeName = employee[0];
const employeeAge = employee[1];
const employeeIsAvailable = employee[2];
console.log("Dati Dipendente usando le tuple: ", employeeName, employeeAge, employeeIsAvailable);
// USARE INTERFACE COME SINTASSI OGGETTO SU JS
const student1 = {
    name: "Mauro",
    age: 33,
    class: 4,
    votes: [2, 4, 4]
};
console.log("Dati studente Mauro usando interface: ", student1);
let persona2;
persona2 = {
    name: 'Nicolas',
    surname: 'Cavalli',
    age: 22,
    email: 'Nicolas@gmail.com'
};
console.log("i dati di persona2 usando Custom Type: ", persona2);
const city = [22, 55];
console.log("Le coordinate della citta' sono usando Custom Type: ", city);
const user = 'giggio@gmail.com';
const user2 = 32322;
console.log("i dati dell'utenti usando custom e union type: ", user, user2);
// ENUM
// ENUM ENUMERAZIONE SONO UNA STRUTTURA DATI CHE CONSENTE DI DICHAIRARE UN SET DI COSNTANTI CON NOMI SIGNIFICATIVI
// GLI ENUM SONO UTILI PER RAPPRESENTARE UN INSIEME FISSO DI VALORI CORRELLATI CHE HANNO UN SIGNIFICATO SPECIFICO
// ENUM USANDO LE STRINGHE COME VALORE
var ChessWord;
(function (ChessWord) {
    ChessWord["PAWN"] = "pawn";
    ChessWord["KNIGHT"] = "knight";
    ChessWord["BISHOP"] = "bishop";
    ChessWord["ROOK"] = "rook";
    ChessWord["QUEEN"] = "queen";
    ChessWord["KING"] = "king";
})(ChessWord || (ChessWord = {}));
var ColorWord;
(function (ColorWord) {
    ColorWord["NERO"] = "nero";
    ColorWord["BIANCO"] = "bianco";
})(ColorWord || (ColorWord = {}));
const giocatore1 = {
    player: 'giacomo',
    colore: ColorWord.NERO,
    piece: ChessWord.KNIGHT
};
console.log("i dati del giocatore usando enum con le stringhe: ", giocatore1);
// ENUM USANDO I NUMERI COME VALORE
var ChessNumber;
(function (ChessNumber) {
    ChessNumber[ChessNumber["PAWN"] = 1] = "PAWN";
    ChessNumber[ChessNumber["KNIGHT"] = 3] = "KNIGHT";
    ChessNumber[ChessNumber["BISHOP"] = 3] = "BISHOP";
    ChessNumber[ChessNumber["ROOK"] = 5] = "ROOK";
    ChessNumber[ChessNumber["QUEEN"] = 9] = "QUEEN";
    ChessNumber[ChessNumber["KING"] = 10] = "KING";
})(ChessNumber || (ChessNumber = {}));
var ColorNumber;
(function (ColorNumber) {
    ColorNumber[ColorNumber["NERO"] = 0] = "NERO";
    ColorNumber[ColorNumber["BIANCO"] = 1] = "BIANCO";
})(ColorNumber || (ColorNumber = {}));
const giocatore2 = {
    player: 'Davide',
    color: ColorNumber.BIANCO,
    piece: ChessNumber.ROOK
};
console.log("i dati dell' giocatore usando enum numerici: ", giocatore2);
// FUNNCTION 
// IN TYPESCRIPT LE FUNZIONI POSSONO ESSERE TIPIZZATE
function sum(numberA, numberB) {
    return numberA + numberB;
}
// LA FUNZIONE TORNA UN TIPO DATO NUMERICO IN CASO IN CUI NON'ESTATO SPECIFICATO IL TIPO DI DATO DELLA FUNZIONE
// E GLI ARGOMENTI SONO STATI TIPIZZATI CI SARA L'INFERENCE LA FUNZIONE CAPISCE GIA' CHE DEVE TORNARE UN TIPO DI
// DATO NUMERICO IN CASO IN CUI NON SI SPECIFICA' IL TIPO DI DATO LA FUNZIONE TORNERA' UNDEFINED NELLA COMPILAZIONE 
let resultSum = sum(5, 5);
console.log("il risultato della somma in typescript: ", resultSum);
// COMPILATORE
// PER COMPILARE UN FILE TS
// tsc scripts/app.ts --watch
// tsc scripts/app.ts -w
// PER COMPILARE L'INTERO PROGETTO
// tsc --init
// VERRA' POI CREATO UN FILE tsconfig.json
// tsc -w
// DOPO TUTTO IL PROGETTO VERRA' COMPILATO ANCHE ALTRI FILE TS
// PER ESCLUDERE O INCLUDERE I FILE DAL COMPILATORE
// in tsconfig.json
// "exclude": [
// "./scripts/server.ts",
// "node_modules",
// "./scripts/app.js"
//   ],
//   "include": [
//     "./scripts/server.ts",
//     "./scripts/app.ts"
//   ]
// POI PER ATTIVARE IL COMPILATORE IN WATCH MODE
// tsc -w
// INOLTRE IN UN PROGETTO IN CUI VIENE USATO NODE.JS LA CARTELLA NODE_MODULES VA DI SOLITO ESCLUSA
// PERCHE' E' UNA CARTELLA PESANTE ALL'INTERNO CI SONO MOLTI PACCHETTI NPM(node package manger) CHE VENGONO INSTALLATI
// IN UN SECONDO MOMENTO QUANDO SI SCARICA IL PROGETTO IN LOCALE
// SEMPRE IN  tsconfig.json
// SI PUO' MODIFICARE LA VERSIONE DEL COMPILATORE PER BROWSER PIU DATATI
// "target": "es2016",  
// "target": "es5"
// IN QUESTO MODO AD ESEMPIO PASSANDO ALLA ES5 LE VARIABILI SARANNO VAR QUINDI PER I BROWSER PIU' VECCHI SARA
// NON CI SONO PROBLEMI DI LETTURA DEL CODICE TS CHE VERRA POI COMPILATO IN JS
//  in tsconfig.json mettendo "sourceMap": true, 
// POSSO VEDERE IL FILE TS CHE MI AIUTA CON IL DEBUGGING NEL BROWSER ANDANDO SU Debugger/Sorgenti/file:/Users
// "rootDir": "./src", 
// "outDir": "./dist",  
