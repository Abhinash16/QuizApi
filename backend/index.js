const express = require('express');
const app = express();

//including the json file 
var fs=require('fs');
var readJson =fs.readFileSync('data.json', 'utf8');
var data=JSON.parse(readJson);

//include the lodash & underscore
const _ = require('underscore');

const questions = require('./routes/questions')

const login = require('./routes/login')

app.use(express.json());

app.use('/api/questions', questions);
app.use('/api/login', login);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));












      

//getting all the hard questions

// var hardQuestion = lodash.pullAllBy(data, [{ 'difficulty': 'E' },{'difficulty': 'M'}], 'difficulty');


// function geteasyquestion(){
//    return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//          // var easyQuestion = lodash.pullAllBy(data, [{ 'difficulty': 'M' },{'difficulty': 'H'}], 'difficulty');

//       // var easyQuestion = _.find(data, {difficulty: 'E'})

//       var easyQuestion = data.filter(myFunction);

//       function myFunction(value){
//          return value.difficulty == 'E'
//       }
//       resolve(easyQuestion)
//       reject(new Error('Cannot fetch easy question..'))
//       },3000)
//    })
// }


// function getmediumquestion(){
//    return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//       // var mediumQuestion = lodash.pullAllBy(data, [{ 'difficulty': 'E' },{'difficulty': 'H'}], 'difficulty');

//       // var mediumQuestion = _.findWhere(data, {difficulty: 'M'});

//       var mediumQuestion = data.filter(myFunction);

//       function myFunction(value){
//          return value.difficulty == 'M'
//       }

//       resolve(mediumQuestion);
//       reject(new Error('Cannot fetch medium question..'))
//       },3000)
//    })
// }


// function gethardquestion(){
//    return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//       // var mediumQuestion = lodash.pullAllBy(data, [{ 'difficulty': 'E' },{'difficulty': 'H'}], 'difficulty');

//       // var mediumQuestion = _.findWhere(data, {difficulty: 'M'});

//       var hardQuestion = data.filter(myFunction);

//       function myFunction(value){
//          return value.difficulty == 'H'
//       }

//       resolve(hardQuestion);
//       reject(new Error('Cannot fetch Hard Question'))
//       },3000)
//    })
// }

// var easyset;


//       geteasyquestion()
//          .then(
//             easyresult=>{
//                // console.log(easyresult)
//                this.easyset = easyresult;
//                })
//          .catch(err=> console.log('Error', err.message));
      
//       getmediumquestion()
//          .then(
//             mediumresut=>{
//                // console.log(mediumresut)
//             })
//          .catch(err => console.log(err.message))


//       gethardquestion()
//          .then(
//             hardresult=>{
//                // console.log(hardresult)
//             })
//          .catch(err => console.log(err.message))

// console.log(easyset);





// GETTING RANDOM EASY 5, MEDIUM 3 AND HARD 2
// var randomeasy = _.sample(easyQuestion, 5);
//var randommedium = _.sample(mediumQuestion, 3);
// var randomhard = _.sample(hardQuestion, 2);

// // var questionbank= _.union(randomeasy,randommedium)
// var sendapi = randomeasy;
// console.log(randomeasy);

// console.log(randomeasy);

