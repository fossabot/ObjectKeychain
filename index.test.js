var ObjectKeychain = require('./index.js');

var obj = {
    name: 'John',
    surname: 'Doe',
    age: 100,
    contacts: {
        phone: 3330000111,
        email: 'john@doe.com',
        other: {
            home: 123456789
        }
    }
};

test('Expects true', () => {
    expect(ObjectKeychain.default(obj, ['contacts', 'other', 'home'])).toBe(true);
});

test('Expects false', () => {
    expect(ObjectKeychain.default(obj, ['contacts', 'other', 'foo'])).toBe(false);
});

test('Expects false, again', () => {
    expect(ObjectKeychain.default(obj, ['foo'])).toBe(false);
});