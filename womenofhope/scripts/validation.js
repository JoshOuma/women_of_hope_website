document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fullName = document.querySelector('.user-details .input-box input[type="text"]').value;
    var address = document.querySelector('.user-details .input-box:nth-child(2) input[type="text"]').value;
    var email = document.querySelector('.user-details .input-box:nth-child(3) input[type="text"]').value;
    var phoneNumber = document.querySelector('.user-details .input-box:nth-child(4) input[type="text"]').value;
    var gender = document.querySelector('.gender-details input[type="radio"]:checked');
  
    if (!fullName) {
      alert('Please enter your full name.');
      return;
    }
  
    if (!address) {
      alert('Please enter your address.');
      return;
    }
  
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }
  
    if (!phoneNumber || isNaN(phoneNumber)) {
      alert('Please enter a valid phone number.');
      return;
    }
  
    if (!gender) {
      alert('Please select a gender.');
      return;
    }
  
    alert('Form submitted successfully!');
  });
  