const express = require('express');
const router = express.Router();

var fs=require('fs');
var readJson =fs.readFileSync('quiz.json', 'utf8');
var data=JSON.parse(readJson);

//include the lodash & underscore
const _ = require('underscore');

var score = 0;

router.get('/', async (req, res)=>{
    const questions = await questionbank;
    res.send(questions)
  });

router.post('/attempt',async (req, res)=>{
   let q_id = req.body.Q_id;
   let userAnswer = req.body.Option;
   console.log(q_id, userAnswer)
   
   var particular = await data.filter((value)=>{
      return value.question_id == q_id
       });
      
       if(userAnswer === particular[0].isCorrect){
         score = score +3
         res.send({'msg':'You are Right', 'score':score})
       }
       else{
         correctanswer = particular[0].isCorrect
         score = score - 1;
         res.send({'msg':'You are Wrong',correctanswer, 'score':score })
       }
});


module.exports = router;



//ES6
      var easyQuestion = data.filter((value)=>{
         return value.difficulty == 'E'
          });

      var mediumQuestion = data.filter((value)=>{
         return value.difficulty == 'M'
         });

//ES5
      var hardQuestion = data.filter(hardQuestion);

            function hardQuestion(value){
               return value.difficulty == 'H'
            }

      var questionbank= _.union( _.sample(easyQuestion, 5),_.sample(mediumQuestion, 3),_.sample(hardQuestion, 2))
