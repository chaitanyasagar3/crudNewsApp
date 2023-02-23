// Import all dependencies & middleware here
import express from 'express';
import bodyParser from 'body-parser';
import {userController} from './controller';

// Init an Express App. 
const app = express();

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use all controllers(APIs) here
app.use('/', userController);

// Start Server here
app.listen(8080, () => {
   console.log('Server is running on port 8080!');
});