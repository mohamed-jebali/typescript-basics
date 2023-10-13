// TYPE ASSIGNMENT
// LA VARIABILE VIENE TIPIZZATA GLI VIENE ASSEGNATA LA SPECIFICA' DEL TIPO DI DATO
var word = 'hello how are you??';
console.log('Type Assignment: ', word, ' il tipo di dato è: ', typeof word);
// TYPE INFERENCE
// LA VARIABILE VIENE TIPIZZATA IN AUTONOMIA DA TYPESCRIPT RICONSOCE IL TIPO DI DATO SENZA LA SPECIFICA'
var PI = 3.14;
console.log('Type Inference: ', PI, ' il tipo di dato è: ', typeof PI);
// TUPLE
// LE TUPLE DETERMINANO LA LUNGHEZZA DI UN ARRAY DICHIARANDONE IL TIPO DI DATO
var listStudent = ["Marco", 33, true, { hobbies: 'Pattinaggio', stipendio: 1500 }];
listStudent = ["Giovani", 22, false, { hobbies: 'Calcio', stipendio: 1200 }];
console.log("Array con Tuple di 3 elementi: ", listStudent);
// LA LUGHEZZA DELL' ARRAY E' DI 3 ELEMENTI DI TIPO STRING,NUMBER,BOOLEAN'
var employee;
employee = ["Roberto", 28, true];
var employeeName = employee[0];
var employeeAge = employee[1];
var employeeIsAvailable = employee[2];
console.log("Dati Dipendente: ", employeeName, employeeAge, employeeIsAvailable);
// USARE INTERFACE COME SINTASSI OGGETTO SU JS
var student1 = {
    name: "Mauro",
    age: 33,
    class: 4,
    votes: [2, 4, 4]
};
console.log("Dati studente 1: ", student1);
var city = [22, 55];
console.log("Le coordinate della citta' sono: ", city);
var user = 'giggio@gmail.com';
var user2 = 32322;
console.log("i dati dell'utenti usando custom e union type: ", user, user2);
