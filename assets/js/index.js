const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMail();
})
function sendMail(params) {
  let tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_knbyc8m", "template_qskws3i", tempParams, "osAt7oRTm-wgpi0jd").then((res) => {
    alert("Your message has been sent. Thank you!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  });
}