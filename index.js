
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const {listBankController, createBankController, updateBankController, deleteBankController} = require('./controllers');


//   //create an express server instance
// const server = express();

// //define middleware
// server.use(bodyParser.json());


// //routes
// server.get('/bank', listBankController);

// server.post('/bank', createBankController);

// server.put('/bank', updateBankController);

// server.delete('/bank', deleteBankController);

// //connect to database and start server
// mongoose.connect("mongodb+srv://ntungwe:pose2011990@cluster0.k48si.mongodb.net/bank?retryWrites=true&w=majority",
//     {useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// .then( result => {
//      server.listen(3005, ()=> console.log('Server is running'));
//   }).catch(err => console.log(err));

//import exppress,body-parser
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accountRoutes')
const bankRoutes = require ('./routes/bankRoutes')




//instance express
const server =express();
//midleware
server.use(bodyParser.json());




//routes
 server.use(accountRoutes);
 server.use(bankRoutes);


//start server
mongoose.connect("mongodb+srv://ntungwe:pose2011990@cluster0.k48si.mongodb.net/bank?retryWrites=true&w=majority",
    
{useNewUrlParser: true,
 useUnifiedTopology: true
}).then(result => {
    server.listen(3005,()=> console.log('server is  finally ready'))
}).catch (err => console.log(err))

