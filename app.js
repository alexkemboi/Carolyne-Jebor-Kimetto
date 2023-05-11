const contactSection = document.getElementById("contact-section");

const contactHTML = `
<form onsubmit="sendForm()">
<div class="form-group">
  <label for="first-name">First Name:</label>
  <input class="form-control" type="text" id="first-name" name="first-name" required>
</div>
<div class="form-group">
  <label for="second-name">Second Name:</label>
  <input class="form-control" type="text" id="second-name" name="second-name" required>
</div>
<div class="form-group">
  <label for="email">Email:</label>
  <input class="form-control" type="email" id="email" name="email" required>  
</div>
<div class="form-group">
  <label for="message">Message:</label>
  <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
</div>
<button class="btn btn-dark mt-3" type="submit">Send</button>
</form>

`;
contactSection.innerHTML = contactHTML;

function sendForm(e) {
  e.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const secondName = document.getElementById("second-name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const data = {
    from_name: `${firstName} ${secondName}`,
    from_email: email,
    message: message,
  };
  console.log(data);
  const params = JSON.stringify(data);
  const emailTo = "alexkemboi97@gmail.com";

  const xhr = new XMLHttpRequest();
  xhr.open("POST", `https://formspree.io/f/${emailTo}`);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Email sent successfully:", xhr.responseText);
      alert("Message sent successfully!");
    } else {
      console.log("Email error:", xhr.responseText);
      alert("An error occurred while sending the message.");
    }
  };
  xhr.send(params);
}

const footer = document.getElementById("footer-section");

const footerHTML = `
<div class="row">
  <div class="col-sm-4">
    <div class="card border-0 bg-dark">
      <div class="card-body">
        <h4 class="text-white">Quick Links</h4>
        <ul class="list-unstyled">
          <li><a href="#about" class="text-white"><i class="fas fa-user text-white"></i> About</a></li>
          <li><a href="#experience" class="text-white"><i class="fas fa-briefcase text-white"></i> Experience</a></li>
          <li><a href="#education" class="text-white"><i class="fas fa-graduation-cap text-white"></i> Education</a></li>
          <li><a href="#skills" class="text-white"><i class="fas fa-code text-white"></i> Skills</a></li>
          <li><a href="#contact" class="text-white"><i class="fas fa-envelope text-white"></i> Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card border-0 bg-dark">
      <div class="card-body">
        <h4 class="text-white">Follow Me</h4>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white"><i class="fas fa-envelope text-white"></i> Email</a></li>
          <li><a href="#" class="text-white"><i class="fab fa-twitter text-white"></i> Twitter</a></li>
          <li><a href="#" class="text-white"><i class="fab fa-linkedin-in text-white"></i> Linkedin</a></li>
          <li><a href="#" class="text-white"><i class="fab fa-facebook text-white"></i> Facebook</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card border-0 bg-dark">
      <div class="card-body">
      <a href="/caro_cv.pdf" download class="btn bg-secondary btn-dark mb-3">Download CV</a>
      </div>
    </div>
  </div>
</div>
<p class="text-center text-white">&copy; 2023 Carolyne Kimetto. All rights reserved.</p>

`;

footer.innerHTML = footerHTML;
