# Item-Importer

Parses the contents of a CSV and imports each row using an API

---
## Requirements

For development, you will only need Node.js and npm installed in your environement.

---

## Install

    $ git clone https://github.com/tedstetzel/Item-Importer.git
    $ cd Item-Importer
    $ npm install
    
## Setup
- You will need to supply an email address, API key and domain in lines 5, 6, and 7 of index.js
```
const domain = 'YOUR_DOMAIN';
const userName = 'YOUR_EMAIL';
const apiKey = 'YOUR_API KEY';
```
- A sample CSV file is supplied (sample-exercise.csv)
- You can run the application with the following commpand: 
```
$ node index.js
```
