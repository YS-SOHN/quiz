const express = require(`express`);
const path = require('path');
const app = express();

app.listen(8080,function(){
  console.log("서버 정상 열림 5000")
})

app.use(express.static(path.join(__dirname,'props-done/dist')))
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'props-done/dist/index.html'))
})

// app.get('/',function(req,res){
//   res.sendFile(__dirname + '/index.html')
//   //sendFile - 파일을 보낼 수 있는 함수
//   // __dirname - 현재 파일 경로
// })

// app.get('/about', function(req,res){
//   res.sendFile(__dirname + '/index2.html')
// })

// app.get('/about/list',function(req,res){
//   res.send("어바웃 리스트")
// })


//반드시 제일 밑에 써야 한다.

// app.get('*', function(req,res){
//   res.sendFile(path.join(__dirname,'quiz-done/dist/index.html'))
// })
module.exports = app;