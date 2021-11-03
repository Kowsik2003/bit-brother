# bit-brother

First install all required packages .
cmd : 'npm i'

run app.js file.
cmd : 'node app.js'

Then in localhost http://127.0.0.1:8000

Routes : 

To get all users : 
GET '/api/user/'

To add user : 
POST '/api/user'

To update user : 
PATCH '/api/user/:id'

To delete user : 
DELETE '/api/user/:id'

note : ':id' in update and delete is users mongodb id (_id) so replace with real id
