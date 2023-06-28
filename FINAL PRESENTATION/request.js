document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
  
    // Send request or perform validation
    // You can add your own code here to handle form submission
  
    // Reset form fields
    document.getElementById('requestForm').reset();
    alert('Request submitted successfully!');
  });
  