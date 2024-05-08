// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof 1)
// console.log(typeof 'hello')
// console.log(typeof true)
// let int = BigInt(99999999999999999999999999999999999999999999999999999999999999999999)
// console.log(typeof int)
// let sym = Symbol('h')
// let sym1 = Symbol('h')

// console.log(sym)
// console.log(sym1)
// console.log(sym == sym1)

// console.log(1 < 5)
// console.log(1 > 5)

// console.log(1 <= 5)

// console.log(1 >= 5)
// console.log(1 == '1')
// console.log(1 === '1')
// console.log(5 + Number('5%'))
// console.log('5' * '5')
// console.log('5' / '5')

// console.log('5' - '5')
// let n = 5 + Number('5%')
// console.log(typeof n)
// let i = 1 / 0
// console.log(typeof i)

// console.log(Boolean(''))
// console.log(Boolean('hello'))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(0))
// console.log(Boolean(3))
// console.log(Boolean(NaN))
// console.log(Boolean(Infinity))
// console.log(isFinite(1000 / 1))
// console.log(isNaN(1 + 1))

// console.log(typeof s)
// console.log(String(false))
// console.log(String(true))
// console.log(String(null))
// console.log(String(undefined))
// console.log(String('false'))
// console.log(String(''))
// console.log(String(NaN))
// console.log(String(Infinity))

// console.log(1 !== '1')
// console.log(!!true)
// function name(params) {

// }
// console.log(typeof 1, '1')
// console.log(typeof true, 'true')
// console.log(typeof 'hello', 'hello')
// console.log(typeof null, 'null')
// console.log(typeof undefined, 'undefined')
// console.log(typeof NaN, 'NaN')
// console.log(typeof [1,2,3], '[1,2,3]')
// console.log(typeof name, 'name function')

// let a = 1
// let b = a--
// console.log(a)
// console.log(b)
// console.log(1 * 'hello')
// console.log(parseInt('12hello'))
// let n = '12hello'
// let text = ''
// for (let index = 0; index < n.length; index++) {
//     const element = n[index];
//     if(isNaN(element)){
//         continue
//     }
//     text += element
// }
// console.log(Number(text))

// let input = prompt();
// if(input === 'Baku'){
//     console.log('Azerbaijan')
// }
// else if(input === 'Moscow'){
//     console.log('Russia')
//     let inputRegion = prompt()

//     if(inputRegion === 'Chechnya'){
//         console.log('Grozny')
//     }else if(inputRegion === 'Dagestan'){
//         console.log('Mahachkala')
//     }
// }else{
//    console.log('else')
// }

// switch (input) {
//   case "1":
//     console.log("January");
//     let newArr
//     break;
//   case "2": {
//     console.log("Aprel");
//     let newArr
//   }
//     break;
//   case "3":
//     console.log("March");
//     break;
//   default:
//     console.log("Another");
//     break;
// }

// let input = prompt()
// let isActive = input === 'M' ? 'Male' : input === 'F' ? 'Female' : 'LGBT'
// console.log(isActive)

// while (true) {
//     let input = prompt()

//     if(input === 'END'){
//         break
//     }else if(input === 'Con'){
//         continue
//     }
// }


// do{
//     console.log('do')
// }while(1 > 5)

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// let object ={
//     userName:'Sam',
//     adress:'New York'
// }

// for (const key in object) {
//         const element = object[key];
//         console.log(element)
// }

// let text = 'hello world *&^%'
// console.log(text.endsWith('*&^%'))
// let newText = ''
// for (let index = 0; index < text.length; index++) {
//     const element = text[index];
//     if(element.includes("*") || element.includes("&") || element.includes("^") || element.includes("%")){
//         continue
//     }
//     newText += element

// }

// console.log(newText)
// name()
// function name() {
//     console.log('ok')
// }
// myFunc()
// let myFunc = () => {
//     console.log('ok')
// }

// let obj = {
//     userName:'Sam',
//     printName:function () {
//         console.log(this.userName)
//     }
// }

// obj.printName()

// alert('sefsdf')

// function name(params) {
    
// }

// const func = (callback) => {
//      return callback
// }

// let result = func(() => 'hello')
// console.log(result())

// const plus  = () => {
//     let i = 0
//     return () => {
//         i++
//         return i
//     }
// }

// let saveNumber = plus()
// console.log(saveNumber())
// console.log(saveNumber())
// console.log(saveNumber())
// console.log(saveNumber())

// let i = 0 
// function recursion() {
//     i++
//     console.log(i)
//     recursion()
// }
// recursion()


// const ret = (a,b) => {
//     console.log('ehh')
//     return 1
// }
// console.log(ret('hello'))

// const func = () => {
//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments[2])
//     console.log(arguments[3])
    
// }

// func(1,2,3,4)

// let array = [1,2,3,4,1]

// array.push(array[array.length - 1] + 1)
// let popDeleted = array.pop()
// array.unshift(0)
// let shiftDeleted = array.shift()
// console.log(popDeleted)
// console.log(shiftDeleted)
// console.log(array)

// console.log(array.at(-1))
// console.log(array.indexOf(1))
// console.log(array.lastIndexOf(1))
// let arr = [[12,2],[1,2],[3,4]]
// let newarr = arr.flat()
// console.log(newarr)
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let con = arr1.concat(arr2)
// console.log(con.join('$'))
// let num = [1,2,3,4,5,6,7,8]

// let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque consequuntur, quo atque aperiam est illo exercitationem reprehenderit cum tenetur unde voluptate commodi alias fuga aspernatur perferendis? Nihil, ab sequi?'
// let textArray = text.split(' ')
// let newNum = textArray.map((item) => item[0].toUpperCase() + item.slice(1))

// console.log(newNum.join(' '))

// let filteredText = textArray.filter((item) => item.length < 4)
// console.log(filteredText)

// const myFilter = (arr, callback) => {
//       let newArr  = []
//       for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(callback(element)){
//             newArr.push(element)
//         }      
//       }
//       return newArr
// }

// let result = myFilter([1,2,3,4,5,6], (item) => item < 4)
// console.log(result)
// let arr = [4,2,1,7,6]
// let [one, two, ...rest] = arr
// console.log(one,two, rest)

// let arr2 = [...arr]
// arr2.push(8)
// console.log(arr)
// console.log(arr2)

// let filteredArray = new Set(arr)
// console.log(filteredArray)
// filteredArray = [...filteredArray]
// console.log(filteredArray)

// console.log(Math.min(...arr))


// console.log(arr.reduce((a,b) => a * b,0))
// console.log(arr.includes(2))
// console.log(arr.findIndex((item) => item < 3))
// console.log(arr.reverse())
// // arr.sort((a,b) => b - a)
// // console.log(arr)
// // let sortedArray = arr.toSorted((a,b) => b - a)
// // console.log(sortedArray)
// // console.log(arr.every((item) => item < 7))
// arr.splice(7,4,10)
// console.log(arr)

// let f = arr.filter((item, index, arr) => {
//     console.log(item)
//     console.log(index)
//     console.log(arr)
// })

// let fi = arr.find((item, index, arr) => {
//     console.log(item)
//     console.log(index)
//     console.log(arr)
// })


// let fin = arr.findIndex((item, index, arr) => {
//     console.log(item)
//     console.log(index)
//     console.log(arr)
// })


// let m = arr.map((item, index, arr) => {
//     console.log(item)
//     console.log(index)
//     console.log(arr)
// })

// let s = arr.some((item, index, arr) => {
//     console.log(item)
//     console.log(index)
//     console.log(arr)
// })


// let e = arr.every((item, index, arr) => {
//     console.log(item)
//     console.log(index)
//     console.log(arr)
// })

// let input = prompt()

// let array1 = ['a', 'b', 'c','d'];

// console.log(array1.slice(2,3))

// array1.splice(array1.indexOf(input),1)
// console.log(array1)

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   console.log(fruits)
//   let numb = fruits.get("apples");
//   console.log(numb)

// let arr = [1,2,3,4,5]
// let arr2 = [...arr]
// console.log(Math.min(1,2,3,4,5))

// let obj = {
//   'userName':'Sam'
// }

// console.log(obj['userName'])

// obj.address = 'Baku'
// console.log(obj)

// obj.userName = 'Ramin'
// console.log(obj)
Object.prototype.myMethod = function () {
  console.log(this)
}
let goods = [
  {
    product_name: "Kişi köynəyi",
    product_description: "Mavi rəngdə, 100% pamuk",
    product_price: 50,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın bluzası",
    product_description: "Dəri detallı, qara rəngdə",
    product_price: 60,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi pantolonu",
    product_description: "Qəhvəyi rəng, kənar cebi",
    product_price: 75,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın eteyi",
    product_description: "Qırmızı rəng, mini",
    product_price: 40,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi dəsmalı",
    product_description: "Nəqşdar dizayn",
    product_price: 20,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın çantası",
    product_description: "Əlgötürən, dəri",
    product_price: 90,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi botları",
    product_description: "Qış üçün, suya davamlı",
    product_price: 120,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın ayaqqabıları",
    product_description: "Yüksək tapan, lacivərt",
    product_price: 85,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi papağı",
    product_description: "Qara rəngdə, dəri",
    product_price: 45,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın şalvarı",
    product_description: "Göy rəngdə, kaşmir",
    product_price: 70,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi palto",
    product_description: "Süət dəri, qara rəngdə",
    product_price: 250,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın jaketi",
    product_description: "Uzun, qaşqır",
    product_price: 200,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi kəməri",
    product_description: "Dəri, metal tokalı",
    product_price: 40,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın badlonu",
    product_description: "Retro stil, qızıl rəngdə",
    product_price: 180,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi şortu",
    product_description: "Spor stil, elastik",
    product_price: 60,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın maykası",
    product_description: "Boyalı nəqş, pamuklu",
    product_price: 45,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi saatı",
    product_description: "Qara rəngdə, analog",
    product_price: 150,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın bəzək",
    product_description: "Qızıl, komplekt",
    product_price: 220,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi atkısı",
    product_description: "Xəzəl rəng, uzun",
    product_price: 35,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın bantı",
    product_description: "Metal detallı, elastik",
    product_price: 50,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi kostyumu",
    product_description: "İki parçalı, qara rəngdə",
    product_price: 320,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın kombinezonu",
    product_description: "Yaz üçün, açıq rəng",
    product_price: 150,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi sviteri",
    product_description: "Düz rəng, yüngül",
    product_price: 70,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın ziyafət geyimi",
    product_description: "Düzənşən, yaz üçün",
    product_price: 95,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi sport formaları",
    product_description: "Spandex, idman üçün",
    product_price: 55,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın bikini",
    product_description: "Tropik nəqş, elastik",
    product_price: 45,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi çantası",
    product_description: "Dizayner, əsas bölməsi",
    product_price: 100,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın ətri",
    product_description: "Gül ətri, uzunömürlü",
    product_price: 80,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi şalı",
    product_description: "Səliqəli, çoxrəngli",
    product_price: 25,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın sutyeni",
    product_description: "Destəklənmiş, rahat",
    product_price: 65,
    'Store Name': "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
];


goods[1].myMethod()
// goods.forEach((item) => {
//   item.year = Math.floor(Math.random() * 2000)
// })

// console.log(goods)
// let input = prompt()
// goods.sort((a,b) => a[input] - b[input])
// console.log(goods)
// goods.forEach((item) => {
//   console.log(item[input])
// })


// const person = {
//   isHuman: false,
//   printIntroduction () {
//     console.log(this)
//   },
// };


// person.printIntroduction();


// const me = Object.create(person);

// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // Inherited properties can be overwritten

// me.printIntroduction();

// function f() {
//   console.log(this)
// }

// Expected output: "My name is Matthew. Am I human? true"
// const obj = {
//   prop: 42,
// };

// Object.freeze(obj);

// obj.prop = 33;
// obj.year = 20
// // Throws an error in strict mode

// console.log(obj);
// delete obj.prop
// console.log(obj);
// const object1 = {userName:'Sam'};

// console.log(object1.hasOwnProperty('uerName'))

// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true,
//   },
//   property2: {},
// });

// console.log(object1.property1);
// console.log(object1)
// // Expected output: 42

// console.log(Object.is('1', 1));
// // Expected output: false

// console.log(Object.is(NaN, NaN));
// // Expected output: true

// console.log(Object.is(-0, 0));
// // Expected output: false

// const obj = {};
// console.log(Object.is(obj, {}));
// // Expected output: false

// if({} === {}){
//   console.log('ok')
// }else{
//   console.log('no')
// }

// const object1 = {
//   a: 'somestring',
//   b: 42,
// };

// console.log(Object.values(object1))

// let obj = Object.entries(object1)
// console.log(obj)

// const numberObj = new Number(1);
// const numberObj2 = new Number(2);

// console.log(numberObj + numberObj2)
// console.log(typeof numberObj); // "object"

// const bigintObj = Object(1n);
// console.log(typeof bigintObj); // "object"

// const symbolObj = Object(Symbol("foo"));
// console.log(typeof symbolObj); // "object"

// class Calculate{
//   constructor(result){
//     this.result = result
//   }

//  plus(){
//   this.result += this.result
//   return this
//  }

//  mult(){
//   this.result *= this.result
//   return this
//  }

//  devide(){
//   this.result /= this.result
//   return this
//  }

//  minus(){
//   this.result -= this.result
//   return this
//  }

//  getResult(){
//   return this.result
//  }
// }


// let calc = new Calculate(5)
// calc.plus().devide().minus().mult()
// console.log(calc.getResult())

// let text = 'hello world'
// let arr = text.split(' ').map((item) => item.toLocaleUpperCase()).join(' ')
// console.log(arr)

Array.prototype.myFilter = function (callback) {
  let newArr = []
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if(callback(element)){
      console.log(element)
      newArr.push(element)
    }
    
  }
  return newArr
}



// let obj = {address:'Baku'}
// obj.myMethod()

// console.log(Array.prototype)
// let myArr = [1,2,3,4,5,6,7]
// let filteredArray = myArr.myFilter((item) => item < 4)
// console.log(filteredArray)


// let vehicle = {
//   printVehicle (){
//     console.log(this.vehicleType)
//   }
// }

// let car = {
//   __proto__: vehicle,
//   vehicleType:'Car'
// }

// car.printVehicle()

// function Animal(name, kind){
//   this.name = name
//   this.kind = kind
// }

// Animal.prototype.printVoice = function (voice) {
//    return voice
// }

// let dog = new Animal('Rex', 'pudel')
// console.log(dog)
// console.log(dog.printVoice('HAV'))

// function Parent(name) {
//   this.name = name; 
// }

// Parent.prototype.sayName = function() {
//   console.log("Ad:", this.name); 
// };


// function Child(name, age) {
//   Parent.call(this, name); 
//   this.age = age; // 
// }

// Child.prototype = Object.create(Parent.prototype);

// Child.prototype.constructor = Child;

// Child.prototype.sayAge = function() {
//   console.log("Yaş:", this.age); 
// };

// var child = new Child("Alice", 10);
// child.sayName(); 
// child.sayAge();

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   display: function() {
//     console.log(this.firstName + " " + this.lastName)
//   }
// }

// let display = person.display.bind(person);
// console.log(display)
// display()

function reloadData(){
  console.log('BIG DATA')
  setTimeout(reloadData, 1000)
}

reloadData()


console.log(1)

// let i = 0
// let intervalTimer = setInterval(() => {
//   i++
//   console.log(i)
//   if(i === 10){
//     clearInterval(intervalTimer)
//   }
// },1000)
