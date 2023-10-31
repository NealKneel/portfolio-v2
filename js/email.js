(function() {
emailjs.init('afh1OpJDSNJocyEWn');
})();

function SendMail() {
    var params = {
        user_name : document.getElementById("user_name").value,
        user_number : document.getElementById("user_number").value,
        user_email : document.getElementById("user_email").value,
        email_subject : document.getElementById("subject").value,
        email_message : document.getElementById("message").value
    }
    emailjs.send("service_0pznqny", "template_y0omqpb", params).then(function (res) {
        alert("Success! " + res.status);
    })
}