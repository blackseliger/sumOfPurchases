import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

cart.allPrice();
console.log(cart._sum);
cart.allPricewDiscound(10);
console.log(cart._sum);

console.log(cart.items);

cart.removeProduct(1001);
console.log(cart.items);
