importScripts('https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.2.1/math.js');
this.onmessage = function(data){

  console.log('onmessage data:', fibonacci(100));
}

function fibonacci(numMax){
  for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

this.addEventListener('fetch', function(event){
  // event.respondWith(event.response);
})
