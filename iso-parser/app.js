const cISO8583 = require('ciso8583');

const path = require('path');
const express = require('express');

const dotenv = require('dotenv').config();
const port = process.env.PORT || 8002


const app = express();


let dataElements = {
    '2': '1234567890123456',
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    '7': '0609173030',
    '8': null,
    '9': null,
    '10': null,
    '11': null,
    '12': null,
    '13': null,
    '14': null,
    '15': null,
    '16': null,
    '17': null,
    '18': null,
    '19': null,
    '20': null,
    '21': null,
    '22': '123',
    '23': null,
    '24': null,
    '25': null,
    '26': null,
    '27': null,
    '28': null,
    '29': null,
    '30': null,
    '31': null,
    '32': null,
    '33': null,
    '34': null,
    '35': null,
    '36': null,
    '37': null,
    '38': null,
    '39': null,
    '40': null,
    '41': null,
    '42': null,
    '43': null,
    '44': null,
    '45': null,
    '46': null,
    '47': null,
    '48': null,
    '49': null,
    '50': null,
    '51': null,
    '52': null,
    '53': null,
    '54': null,
    '55': null,
    '56': null,
    '57': null,
    '58': null,
    '59': null,
    '60': null,
    '61': null,
    '62': null,
    '63': '789ABC1000123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789',
    '64': null
};

let iso8583Parser = new cISO8583();
let MTI = '0200';
let packed = iso8583Parser.pack(MTI, dataElements);


console.log(packed);





  



app.listen(port, () => console.log(`Server started on port ${port}`));