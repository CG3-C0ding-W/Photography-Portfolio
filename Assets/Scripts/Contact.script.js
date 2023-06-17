const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  // prevent the form submission from refreshing the page
  event.preventDefault();

  // Use your API endpoint URL you copied from the previous step
  const endpoint = "https://1i8bgk2qm4.execute-api.us-west-1.amazonaws.com/default/contactSubmission";
  
 // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
    senderName: document.getElementById("fullName ").value.trim(),
    senderPhone: document.getElementById("phone_Number ").value.trim(),
    senderEmail: document.getElementById("email_id ").value.trim(),
    message: document.getElementById("message ").value.trim()
  });
  
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unkown error occured.";
    });
});
