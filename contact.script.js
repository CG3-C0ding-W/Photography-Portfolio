<script>
      function SendMail(){
        var params = {
          from_name : document.getElementById("fullName").value,
          email_id: document.getElementById("email_id").value,
          phone_number: document.getElementById("phone_Number").value,
          message: document.getElementById("message").value
        }
        emailjs.send("service_hgo6ekq", "template_y1sm6aq", params).then(function (res) {
            alert("Success! " + res.status);
          })
      }
</script>
