# _Address Book_

#### _A webpage that acts as an address book for the user, 10-13-2018_

#### By _**William Kulha**_

## Description

_This is a webpage that I made to practice BDD and object-oriented Javascript with learnhowtoprogram.com. It takes user input about a contact, adds them to the contact list, and then lets the user click each name on the list to expand all their details._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
**Program Gathers User Input, creating a new contact object, as well as a new address object** | User input: 'Bobby Bob, 5555 Five Lane Five-Town America 55555' | Output: contact {first: Bobby, last:Bob addresses[]} {street: 5555 Five Lane, city: Five-town, State: America, Zip: 55555} |
**Program Allows user to add multiple addresses per contact** | Input: add another address.click | Output: Additional address form is added. |
**Program pushes the inputted address(es) to the address array of the contact object** | Same as above | Output: contact {first: Bobby, last:Bob addresses[{street: 5555 Five Lane, city: Five-town, State: America, Zip: 55555}]  |
**Program Adds the contacts full name to the contacts list** | Input: Same as above | Output: Contacts: Bobby Bob|
**Program will display full contact details beside the add contact form when the contacts name is clicked in the list** | Input: Bobby Bob.click | output: Bobby Bob<br>5555 Five Lane<br>Five-Town, America<br>55555 |



## Setup/Installation Requirements

* _Download or clone this repo <code>$git clone https://github.com/zangiboy/Address-Book-2.git</code>_
* _Navigate to the folder where you saved the directory._
* _Open with the browser of your choice and enjoy_


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you have any questions or advice, please email me at kulha.william@gmail.com_

## Technologies Used

_javascript_\
_jQuery_\
_Bootstrap 3_

### License

*This Address Book Application is licensed under the MIT License*

Copyright (c) 2018 **_William Kulha_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
