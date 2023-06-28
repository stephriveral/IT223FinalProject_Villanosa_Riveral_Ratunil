document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || date.trim() === '' || time.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    
    // Send form data to server or perform desired action
    alert('Meeting booked successfully! We will contact you soon to confirm the details.');
    this.reset(); // Clear form
  });
  