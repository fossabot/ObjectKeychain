# 🔗🔗 ObjectKeychain 🔗🔗

[![Build Status](https://travis-ci.org/micheleriva/ObjectKeychain.svg?branch=master)](https://travis-ci.org/micheleriva/ObjectKeychain)
[![Maintainability](https://api.codeclimate.com/v1/badges/b315348beb4f681dba16/maintainability)](https://codeclimate.com/github/micheleriva/ObjectKeychain/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/micheleriva/objectkeychain/badge.svg?targetFile=package.json)](https://snyk.io/test/github/micheleriva/objectkeychain?targetFile=package.json)

**ObjectKeychain** is a really simple and lightweight utility (29 bytes gziped) which will help a lot handling complex data structures. <br />
I decided to write this little function because handling object-based data structures sometimes can be hard.

With this utility, you can test if a complex object has a given key.

## Installation
I would recommend to install ObjectKeychain using `npm`
```bash
$ npm install object-keychain
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