import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];
     _sum!: number; // если убрать ! typescript начинает жаловаться на sum упоминаяя конструктор...которого нет даже?
  // если убрать ! typescript начинает жаловаться на sum упоминаяя конструктор...которого нет даже?
    //  как объявить свойство класса без восклицательного знака?

    add(item: Buyable): void {
        this._items.push(item);
    }

    allPrice() : number {
       let price = 0;
        this._sum = this._items.reduce((result, obj) => {
           result += obj.price;
           return result;
       }, price)
       
       return this._sum;
    }

    allPricewDiscound(discount : number) : number {
        this._sum = this.allPrice();
        this._sum -= (this._sum / 100) * discount;
        return this._sum;
    }

    removeProduct( id : number) {
        const index = this._items.findIndex((obj) => {
            return obj.id === id;
        });
        this._items.splice(index,index + 1);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}