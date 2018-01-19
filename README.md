# ObjectKeychain

**ObjectKeychain** is a really simple utility which will help a lot handling complex data structures.

### Installation
I would recommend to install Rooter using `npm`
```bash
$ npm install object-keychain
```

### Usage
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

**Real life example using React.js***
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
            : <div> This user doesn't have an home email address. </div>
        )
    }
    
}

```