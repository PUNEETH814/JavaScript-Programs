/* write a function that prints hello world 5 times at interval 2sec and it should stop after 10sec*/


let id = setInterval(()=>{   //using id we can clear interval
    console.log("hi puneeth")
},2000)

setTimeout(()=>{
    clearInterval(id);
},10000)