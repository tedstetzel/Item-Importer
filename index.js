const csvFilePath='./sample-exercise.csv'
const axios = require('axios');

//Provide your creds, for more info see https://developer.gladly.com/rest/#section/Getting-Started/Permissions
const domain = 'YOUR_DOMAIN';
const userName = 'YOUR_EMAIL';
const apiKey = 'YOUR_API KEY';

const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((record)=>{
    for(let i in record){

        //Check if email is provided - TODO: add regex to make sure it's a valid email 
        if(record[i].email == ''){
            console.log(`Failed to import row #${i} : email address is required`);
        }else{

        //Create Unique Payload for each record 
        let payload = {
            "id": "",
            "customer": {
            "emailAddress": record[i].email,
            },
            "content": {
            "type": "CUSTOMER_ACTIVITY",
            "title": record[i].title,
            "body": record[i].body,
            "activityType": "EMAIL",
            "sourceName": "Ted Stetzel"
            }
        }
        //console.log(payload) //uncommnet for debugging
        
        //Post each record API
        axios({
            method: 'post',
            url: `https://${domain}/api/v1/conversation-items`,
            data: payload,
            auth: {
                username: userName,
                password: apiKey
            }
        })
        .then(function (response) {
            console.log(`Created new item from row #${(Number(i)+2)} with ID ${response.data.id}`);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    }
});