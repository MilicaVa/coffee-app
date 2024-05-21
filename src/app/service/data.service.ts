import { Injectable } from '@angular/core';
import { collection, Firestore, collectionData, doc, deleteDoc, addDoc, updateDoc } from '@angular/fire/firestore';
  
export interface Coffee{
  id?: number;
  imgUrl: string;
  name: string;
  price: string;
}

export interface User{
  email: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getUsers() {
    const usersRef = collection(this.firestore,'users');
    return collectionData(usersRef, {idField: 'id'});
  }

  addUser(user: User) {
    const usersRef = collection(this.firestore, 'users');
    return addDoc(usersRef,user); 
  }

  getCoffees() {
    const coffeesRef = collection(this.firestore,'coffees');
    return collectionData(coffeesRef, {idField: 'id'});
  }

  deleteCoffee(id:string) {
    const coffeeRef = doc(this.firestore,`coffees/${id}`);
    return deleteDoc(coffeeRef);
  }

  addCoffee(coffee: Coffee) {
    const coffeeRef = collection(this.firestore,'coffees');
    return addDoc(coffeeRef,coffee);
  }

  editCoffee(coffee: Coffee) {
    const coffeeRef = doc(this.firestore,`coffees/${coffee.id}`);
    return updateDoc(coffeeRef,{
      imgUrl: coffee.imgUrl,
      name: coffee.name,
      price: coffee.price,
    });
  }

}
