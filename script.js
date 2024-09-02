   // Navigation between steps
   const steps = document.querySelectorAll('.forms_wrapper > div');
   let currentStep = 0;

   document.getElementById('next1').addEventListener('click', function() {
     if (validateStep1()) {
       nextStep();
     }
   });

   document.getElementById('next2').addEventListener('click', function() {
     nextStep();
   });

   document.getElementById('next3').addEventListener('click', function() {
     nextStep();
   });

   document.getElementById('back2').addEventListener('click', function() {
     previousStep();
   });

   document.getElementById('back3').addEventListener('click', function() {
     previousStep();
   });

   document.getElementById('back4').addEventListener('click', function() {
     previousStep();
   });

   function nextStep() {
     steps[currentStep].classList.add('hide');
     currentStep++;
     steps[currentStep].classList.remove('hide');
   }

   function previousStep() {
     steps[currentStep].classList.add('hide');
     currentStep--;
     steps[currentStep].classList.remove('hide');
   }

   function validateStep1() {
     let valid = true;
     const name = document.getElementById('name');
     const email = document.getElementById('email');
     const number = document.getElementById('number');

     if (!name.value) {
       document.getElementById('error-name').style.display = 'block';
       valid = false;
     } else {
       document.getElementById('error-name').style.display = 'none';
     }

     if (!email.value) {
       document.getElementById('error-email').style.display = 'block';
       valid = false;
     } else {
       document.getElementById('error-email').style.display = 'none';
     }

     if (!number.value) {
       document.getElementById('error-number').style.display = 'block';
       valid = false;
     } else {
       document.getElementById('error-number').style.display = 'none';
     }

     return valid;
   }

   document.getElementById('confirm').addEventListener('click', function() {
     steps[currentStep].classList.add('hide');
     currentStep++;
     steps[currentStep].classList.remove('hide');
   });