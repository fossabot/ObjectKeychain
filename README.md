# 🔗🔗 ObjectKeychain 🔗🔗

[![Build Status](https://travis-ci.org/micheleriva/ObjectKeychain.svg?branch=master)](https://travis-ci.org/micheleriva/ObjectKeychain)
[![Maintainability](https://api.codeclimate.com/v1/badges/b315348beb4f681dba16/maintainability)](https://codeclimate.com/github/micheleriva/ObjectKeychain/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/micheleriva/objectkeychain/badge.svg?targetFile=package.json)](https://snyk.io/test/github/micheleriva/objectkeychain?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dt/object-keychain.svg)](https://img.shields.io/npm/dt/object-keychain.svg)

**ObjectKeychain** is a really simple and lightweight utility (29 bytes gziped) which will help a lot handling complex data structures. <br />
I decided to write this little function because handling object-based data structures sometimes can be hard.

With this utility, you can test if a complex object has a given key.

## Index
- [Live demo](#live-demo)
- [Installation](#installation)
- [Use Cases](#use-cases)
- [Usage](#usage)

## Live Demo
[Live demo here!](https://codesandbox.io/s/zrx3o5x14x)

## Installation
I would recommend to install ObjectKeychain using `npm` or `yarn`
```bash
$ npm install object-keychain
```
```bash
$ yarn add object-keychain
```

1991 fan? JSDeliver to the rescue!
```html
<script src="https://cdn.jsdelivr.net/npm/object-keychain@1/index.min.js"></script>
```

## Use cases

Let's pretend we are building an app with a noSql database. <br />
When we create a new user, we'll store the following object: <br />
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "foo@bar.com"
}
```
After some time, the user will start to populate his account data, and we'll have the following object:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "foo@bar.com",
  "contacts": {
    "phone": {
        "home": "0000000000",
        "work": "1111111111",
        "other": "2222222222"
    }
  }
}
```

Displaying data:

```javascript
const data_email = userData.email;
const data_first_name = userData.first_name;
const data_phone_home = userData.contacts.phone.home;

console.log(data_email); // => foo@bar.com
console.log(data_first_name); // John
console.log(data_phone_home); // 0000000000
```

But what if we have the following object?
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "foo@bar.com",
  "contacts": {
    "email": {
        "work": "work@bar.com"
    }
  }
}
```

We'll receive the following error
```javascript
const data_phone_home = userData.contacts.phone.home;

console.log(data_phone_home); // Unable to get property 'phone' of undefined
```

Now, **ObjectKeychain** is gonna help you.
```javascript
import OK from 'ObjectKeychain'

const data_phone_home = () => {
    OK(userData, ['contacts', 'phone', 'home']) 
    ? userData.contacts.phone.home
    : 'No home phone'
}

console.log(data_phone_home); // No home phone
```

## Usage
**ES6 Full Example**
```javascript
import OK from 'object-keychain'

const obj = {
    name: 'John Doe',
    age: 22,
    contacts: {
        home: 'john@foo.com',
        office: 'john@bar.com'
    }
};

const objectToTest = obj;
const patternToTest = ['contacts', 'home'];

const result = OK(objectToTest, patternToTest);
console.log(result);
// => Returns TRUE
```

**ES6 Advanced Example**
```javascript
import OK from 'object-keychain'

const obj = {
    name: 'John Doe',
    age: 22,
    contacts: {
        home: 'john@foo.com',
        office: 'john@bar.com'
    }
};

if(OK(obj, ['contacts', 'home'])){
    console.log('I have John\'s home email!');
}else{
    console.log('I should ask John for his home email address.');
}
```

**Real life example using React.js**
```javascript
import React from 'react'
import OK from 'object-keychain'

class Foo extends React.component{
    
    constructor(props){
        super(props);
        this.state = {
            user_data: {
                name: 'John Doe',
                phone: 0000000000,
                contacts: {
                    home: 'john@foo.com',
                    office: 'john@bar.com'
                }
            }
        }
    }
    
    render(){
        return(
            OK(this.state, ['contacts', 'home'])
            ? <div>User email: {this.state.contacts.home}</div>
            : <div> This user does not have an home email address. </div>
        )
    }
    
}

```