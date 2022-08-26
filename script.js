function myFunction() {
  alert("It doesnt working!");
}

// form
(function () {
  emailjs.init("LzeXhJDQrFRZug-yh");
})();
document
  .getElementById("submitForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_eaof1iq";
    const templateID = "portfolio_id";
    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send(serviceID, templateID, templateParams).then(
      (response) => {
        console.log(
          "Thank you for your message!",
          response.status,
          response.text
        );
        alert("Thank you for your message!");
      },
      (error) => {
        console.log("Something went wrong, please try again.", error);
        alert("Something went wrong, please try again.", error);
      }
    );
    event.target.reset();
  });
