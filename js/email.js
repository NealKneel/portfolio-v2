(function() {
emailjs.init('afh1OpJDSNJocyEWn');
})();

// function SendMail() {
//     var params = {
//         user_name : document.getElementById("user_name").value,
//         user_number : document.getElementById("user_number").value,
//         user_email : document.getElementById("user_email").value,
//         email_subject : document.getElementById("subject").value,
//         email_message : document.getElementById("message").value
//     }
//     emailjs.send("service_0pznqny", "template_y0omqpb", params).then(function (res) {
//         Swal.fire({
//             title: "Sent!",
//             text: "The email has been sent.",
//             icon: "success"
//           });
//     })
// }


document.getElementById('sendMailBtn').addEventListener('click', function () {
    Swal.fire({
        title: "Send email?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FFD166",
        cancelButtonColor: "#B8B8B8",
        confirmButtonText: "Yes, send it!"
      }).then((result) => {
        if (result.isConfirmed) {
            var params = {
                user_name : document.getElementById("user_name").value,
                user_number : document.getElementById("user_number").value,
                user_email : document.getElementById("user_email").value,
                email_subject : document.getElementById("subject").value,
                email_message : document.getElementById("message").value
            }
            emailjs.send("service_0pznqny", "template_y0omqpb", params).then(function (res) {
                Swal.fire({
                    title: "Sent!",
                    text: "The email has been sent.",
                    icon: "success"
                  });
            })
        }
      });
})

