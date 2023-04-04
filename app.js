// Get the element where you want to add the contact section
const contactSection = document.getElementById("contact-section");

// Create the HTML structure for the contact section
const contactHTML = `
<form>
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

// Add the HTML code to the contact section element
contactSection.innerHTML = contactHTML;




//add footer to website
// Get the element where you want to add the footer
const footer = document.getElementById("footer-section");

// Create the HTML structure for the footer
const footerHTML = `
<div class="container">
<div class="row">
  <div class="col-sm-4">
    <div class="card border-0">
      <div class="card-body">
        <h4 class="text-dark">Quick Links</h4>
        <ul class="list-unstyled">
          <li><a href="#about" class="text-dark"><i class="fas fa-user text-dark"></i> About</a></li>
          <li><a href="#experience" class="text-dark"><i class="fas fa-briefcase text-dark"></i> Experience</a></li>
          <li><a href="#education" class="text-dark"><i class="fas fa-graduation-cap text-dark"></i> Education</a></li>
          <li><a href="#skills" class="text-dark"><i class="fas fa-code text-dark"></i> Skills</a></li>
          <li><a href="#contact" class="text-dark"><i class="fas fa-envelope text-dark"></i> Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card border-0">
      <div class="card-body">
        <h4 class="text-dark">Follow Me</h4>
        <ul class="list-unstyled">
          <li><a href="#" class="text-dark"><i class="fas fa-envelope text-dark"></i> Email</a></li>
          <li><a href="#" class="text-dark"><i class="fab fa-twitter text-dark"></i> Twitter</a></li>
          <li><a href="#" class="text-dark"><i class="fab fa-linkedin-in text-dark"></i> Linkedin</a></li>
          <li><a href="#" class="text-dark"><i class="fab fa-facebook text-dark"></i> Facebook</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card border-0">
      <div class="card-body">
        <img src="/caro2.jpg" class="img-fluid rounded-circle" alt="..." style="width: 100%; max-width: 150px;">
      </div>
    </div>
  </div>
</div>
<p class="text-center text-dark">&copy; 2023 Carolyne Kimetto. All rights reserved.</p>
</div>
`;

// Add the HTML code to the footer element
footer.innerHTML = footerHTML;
