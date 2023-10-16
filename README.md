# Guida all'installazione di TypeScript su macOS

<p align="center">
<a href="https://angular.io/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" height="150"></a>



1. Installa TypeScript globalmente eseguendo il seguente comando:

// requisiti installare node.js
   
   - `sudo npm install -g typescript` // per MacOs
   - `tsc -v` // per controllare la versione installata 

2. Il Browser non legge codice TS ma solo codice JS che viene compilato

// compilare il codice TypeScript eseguendo il seguente comando:

   - `tsc scripts/app.ts`

## Vantaggi di TypeScript Rispetto a JavaScript

// TypeScript offre dei vantaggi rispetto a JS come il check degli errori  mettendo in evidenza eventuali errori di sintassi

link documentazione: https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html


## Compilatore TS

// PER COMPILARE L'INTERO PROGETTO
- `tsc --init`

//  PER COMPILARE UN FILE TS
 - `tsc app.ts --watch`

// PER ATTIVARE IL COMPILATORE IN WATCH MODE
 - `tsc app.ts -w`


// PER COMPILARE TUTTO UNA VOLTA SISTEMATO L'ORGANIZAZIONE DEL LAVORO

- in ts.config.json si posso modificare i path "rootDir" e "outDir"
- si creano delle cartelle seguendo gia' la struttura di un progetto angular
- si crea una cartella src all'interno altre cartelle main e server con dentro i file HTML,SCSS,TS
- si crea una cartella dist in cui ci sara' il codice TypeScript compilato in JavaScript

 - alla fine si compila tutto da terminale con : `tsc`

 // per altre informazioni guarda app.ts







