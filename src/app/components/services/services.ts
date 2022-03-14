// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// import { map, delay } from 'rxjs/operators';
// import { ClienteModule } from '../models/cliente/cliente.module';

// @Injectable({
//   providedIn: 'root'
// })
// export class ClienteService {
//   /*
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:<asd$123>@cluster0.hzzf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
//  */

//   private url = '';

//   constructor(private http: HttpClient) { }

//   crearcliente(cliente: ClienteModule) {

//     return this.http.post(`${this.url}/cliente.json`, cliente)
//       .pipe(
//         map((resp: any) => {
//           cliente.id = resp.name;
//           return cliente;
//         })
//       );

//   }

//   actualizarcliente(cliente: ClienteModule) {

//     const clienteTemp = {
//       ...cliente
//     };

//     delete clienteTemp.id;

//     return this.http.put(`${this.url}/cliente/${cliente.id}.json`, clienteTemp);
//   }

//   Borrarcliente(id: string){
//     return this.http.delete(`${this.url}/cliente/${id}.json`);
//   }

//   getClien(id:string){

//     return this.http.get(`${this.url}/cliente/${id}.json`)
//   }

//   getcliente() {
//     return this.http.get(`${this.url}/cliente.json`)
//       .pipe(
//         map(this.crearArreglo),
//         delay(0)

//       );
//   }

//   private crearArreglo(clienteObj: object) {

//     const cliente: ClienteModule[] = [];

//     //console.log(clienteObj);

//     Object.keys(clienteObj).forEach(key => {

//       const cliente: ClienteModule = clienteObj[key];
//       cliente.id = key;

//       //cliente.push(cliente);
//     });

//     if (clienteObj === null) { return []; }
//     return cliente;
//   }

// }
