//A function which takes another function as an argument inside it is called a callback function

//Create a promise


/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber >0.6) {
        resolve(randomNumber); // Fulfill the Promise with the random number
      } else {
        reject(new Error('Random number is less than 0.5')); // Reject the Promise with an error
      }
    }, 1000); // Simulate a 1-second delay
  });
//Consuming the Promise
promise
  .then((result) => {
    console.log('Promise fulfilled:', result);
  })
  .catch((error) => {
    console.error('Promise rejected:', error);
  });*/



  function fetchUserData(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const randomNumber = Math.random();
      if (randomNumber >0.5)
            {
              resolve(randomNumber); // Fulfill the Promise with the random number
           } else {
            reject(new Error('Random number is less than 0.5')) //promise is failed
           }

        }, 1000)


    })
}
fetchUserData(5)
.then((result) => {
  console.log('Promise fulfilled:', result);
})
.catch((error) => {
  console.error('Promise rejected:', error);
});