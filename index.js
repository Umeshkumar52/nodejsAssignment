const { log } = require('console')
const fs=require('fs')
const path=require('path')
const os=require('os')
const { EventEmitter } = require('events')
// add text to .txt file through fs module
const text="Node is a most puwerfull server side language"
fs.writeFile('./nodejs_artitecture.txt',text,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("your text is added");
})
// Read text from .txt file
fs.readFile('./nodejs_artitecture.txt',(err,data)=>{
console.log(data.toString());
})
// Append advantage of nodejs in .txt file
fs.appendFile('./nodejs_artitecture.txt'," Advantage of nodeJs",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Append Advantage of Nodejs is Successfully");
})
fs.readFile('./nodejs_artitecture.txt',(err,data)=>{
    console.log(data.toString());
    })
    // Delet .txt file 
    function delet(deletConfirm){
   
    if(deletConfirm==true){
      fs.unlink('./nodejs_artitecture.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("File deleted successfully");
      })
    }
    }
    // if you pass true then nodejs_artitecture.txt file delete
    delet()
// operating system detail
const version=os.release()
const name=os.platform()
console.log(name,version);
// event module perform
const emitter=new EventEmitter()
emitter.on("subscribe",()=>{
    console.log("Thank you for subscribeing to college wallah");
})
emitter.emit("subscribe")

// event perform after delete an event
const emitters=new EventEmitter()
emitter.on("",()=>{
   
    console.log("Thank you for unsubscribeing to college wallah");
})
emitter.emit("unsubscribe")
// set Listners number
console.log("The default maximum number of event listners are",emitter.getMaxListeners());
emitter.setMaxListeners(5)
console.log("The update maximum number of event listners are",emitter.getMaxListeners());