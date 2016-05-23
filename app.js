(function (){
  var self = this;

  if('serviceWorker' in navigator){
    // navigator.serviceWorker.register('fib-worker.js')
    // .then(success, fail);
    self.worker = new Worker('fib-worker.js');
    self.worker.postMessage({test: 'asdf'});
  }

  function success(data){
    console.log('register success', data)
  }

  function fail(){
    console.log('register fail')
  }
})();
