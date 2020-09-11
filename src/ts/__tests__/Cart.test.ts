import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

describe('check work class Cart', () => {
  test('new card should be empty', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
  });
  test('return added product', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    const expected = [{id: 1001, name: "War and Piece", author: "Leo Tolstoy", price: 2000, pages: 1225}]
    const received = cart.items;
    expect(received).toEqual(expected);
  });
  test('return sum of all prices', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    const received = cart.allPrice();
    expect(received).toEqual(2900);
  });
  test('return sum of all prices with discount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    const received = cart.allPricewDiscound(10);
    expect(received).toEqual(2610);
  });
  test('remove one product', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.removeProduct(1001);
    const expected = [{id: 1008, name: "Meteora", author: "Linkin Park", price: 900}];
    const received = cart.items;
    expect(received).toEqual(expected);
  });
})