/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React from 'react'
import './main.css'
const Main = (props) => {
    return (
        <div id='main'>
        
        <div id='tictactoe'>
            <div onClick={alternator} className='tic' id='1'></div>
            <div onClick={alternator} className='tic' id='2'></div>
            <div onClick={alternator} className='tic' id='3'></div>
            <div onClick={alternator} className='tic' id='4'></div>
            <div onClick={alternator} className='tic' id='5'></div>
            <div onClick={alternator} className='tic' id='6'></div>
            <div onClick={alternator} className='tic' id='7'></div>
            <div onClick={alternator} className='tic' id='8'></div>
            <div onClick={alternator} className='tic' id='9'></div>   
            <button id="reset" onClick={reload}>New Game</button>
         </div>
         
        </div> 
    )
}
 
var a = 'X';
var b = 'O';
var c = 0,p=1;
var current = a,cell,tru;
var check = true;

function reload(){
    window.location.reload();
} 

function alternator(e){
    p++
var target = e.target;
var h = document.createElement('h1');
if(target.innerText || c !=0){
    ;
} 
 else if(c==0 && p==10 && check == true){
   console.log(p)
     cell  = (current === a) ? current = b : current = a;
     h.innerText = cell;
     target.append(h)
    tru = (checkwin(cell)===true)?true:'';
    if(tru == true){
     winnertag(cell) 
     c++ 
    } else{
     losertag();
    }
}
else {
   
  
 cell  = (current === a) ? current = b : current = a;
h.innerText = cell;
target.append(h)
 tru = (checkwin(cell)===true)?true:'';
 
if(tru == true && check == true){
     winnertag(cell) 
     c++ 
} 


 
}}
// eslint-disable-next-line 
function checkwin(c ){
  var winner = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[0,3,6],[2,5,8]];   
 var tic = document.getElementById('tictactoe')
 var butt = document.querySelectorAll('.tic')
 return (winner.some(ar=>{
return (ar.every((i)=>{
    return (butt[i].innerText === c)  
}))
 }))
 
}

function winnertag(c){
    check = false;
    var root = document.getElementById('root');
    var winn = document.createElement('h1');
    winn.id = "win"
    winn.innerText = `${c} won!`;
    root.append(winn)
 }
function losertag(){
    check = false;
    var root = document.getElementById('root');
    var lose = document.createElement('h1')
    lose.id = 'los'
    lose.innerText = 'Draw!'
    root.append(lose)
}

export default Main
