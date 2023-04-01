import Notiflix from 'notiflix';

const ref = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
};

ref.form.addEventListener('submit', onSubmit);



function onSubmit(e) {
  e.preventDefault();

  let delay = Number(ref.delay.value);
  let step = Number(ref.delayStep.value);
  let amount = Number(ref.amount.value);

  
  for ( let position = 1; position <= amount; position += 1 ) {
    createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay = delay + step;
  }
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(position, delay);
      }
        reject(position, delay);
      
      // Reject
      
    }, delay);
  });

};


