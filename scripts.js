document.addEventListener('DOMContentLoaded', function () {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    simulateAsyncOperation()
      .then(() => {
        // Hide loading container and show content when the operation is complete
        document.getElementById('loading-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors and provide feedback to the user
      });
  });
  
  function simulateAsyncOperation() {
    // Simulate a delay (e.g., fetching data from an API)
    return new Promise((resolve) => {
      setTimeout(resolve, 2000); // Simulated delay of 2 seconds
    });
  }
  