// const cars: string[] = ["ford", "bmw", "honda"];
//
// const cars2: Array<string> = ["lanos", "vida", "bogdan"];
//
// const promise = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve("I am done...");
//     }, 2000);
// });
//
// promise.then(data => console.log(data));
//
// function mergeObj<T extends object, R extends object>(a: T, b: R): T & R {
//     return Object.assign({}, a, b)
// }
//
// const merged = mergeObj({name: "Dron"}, {age: 42});
//
// // const merged2 = mergeObj("1111", "2222222");
// console.log(merged.name);
//
// interface ILength{
//     length: number
// }
//
// function withCount<T extends ILength>(value: T):{value: T, count: string} {
//     return {
//         value,
//         count: `This object have ${value.length} symbols`
//     }
// }
//
// console.log(withCount("JAVASCRIPT"));
// console.log(withCount([1, 3, 4, 4, 4]))
//
// //=========================
// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//     return obj[key]
// }
//
// const person = {
//     name: "Dron",
//     age: 42,
// }
//
// console.log(getObjectValue(person, "name"));
// console.log(getObjectValue(person, "age"));
// // console.log(getObjectValue(person, "city"));
//
// class Collection<T extends number | string | boolean> {
//     constructor(private _items:T[] = []){}
//
//     add(item: T) {
//         this._items.push(item);
//     }
//
//     remove(item: T) {
//         this._items = this._items.filter(i => i !== item);
//     }
//
//     get items(): T[] {
//         return this._items;
//     }
// }
//
// const strings = new Collection<string>(["I", "am", "strings"]);
//
// strings.add("!");
//
// strings.remove("am");
//
// console.log(strings.items);
//
// const num = new Collection<number>([1, 2, 3, 4]);
//
// num.add(5);
//
// num.remove(2);
//
// console.log(num.items);

// ===============================================

interface Car {
    model: string,
    year: number
}

function createValidCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }

    return car as Car;
}

const cars: Readonly<Array<string>> = ["Ford", "Audi"];

//cars.unshift()
