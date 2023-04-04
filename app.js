// Get the element where you want to add the contact section
const contactSection = document.getElementById("contact-section");

// Create the HTML structure for the contact section
const contactHTML = `
  <form>
        <div class="row">
            <div class="col-4">
                    <label for="name">First Name:</label>
                    <input class="form-control" type="text" id="name" name="name" required>
            </div>
            <div class="col-4">
                    <label for="name">Second Name:</label>
                    <input class="form-control" type="text" id="name" name="name" required>
            </div>
            <div class="col-4">
                <label for="email">Email:</label>
                <input class="form-control" type="email" id="email" name="email" required>  
            </div>
        </div>
        <div class="row">
            <div class="col-12">  
                    <label for="message">Message:</label>
                    <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
        </div>
        <div class="row">
                <div class="col-3">        
                    <button class="form-control btn btn-dark mt-3" type="submit">Send</button>
                </div>
        </div>
  </form>
`;

// Add the HTML code to the contact section element
contactSection.innerHTML = contactHTML;




//add footer to website
// Get the element where you want to add the footer
const footer = document.getElementById("footer-section");

// Create the HTML structure for the footer
const footerHTML = `
  <div class="row">
    <div class="col-4 ">
        <div class="card" >
            <div class="card-body" >    
                <h4>Quick Links</h4>
                    <ul>
                        <h5 ><a href="#about" class="text-dark"><i class="fas fa-user text-dark"></i> About</a></h5>
                        <h5 class="text-dark"><a href="#experience" class="text-dark"><i class="fas fa-briefcase text-dark"></i> Experience</a></h5>
                        <h5 class="text-dark"><a href="#education" class="text-dark"><i class="fas fa-graduation-cap text-dark"></i> Education</a></h5>
                        <h5 class="text-dark"><a href="#skills" class="text-dark"><i class="fas fa-code text-dark"></i> Skills</a></h5>
                        <h5 class="text-dark"><a href="#contact" class="text-dark"><i class="fas fa-envelope text-dark"></i> Contact</a></h5>
                    </ul>
            </div>
        </div>
    </div>
    <div class="col-4 ">
            <div class="card" >
                    <div class="card-body">
                    <h4>Follow Me</h4>
                    <ul class="social-media">
                      <h5><a href="#"class="text-dark"><i class="fas fa-envelope text-dark"></i>Email</a></h5>
                      <h5><a href="#"class="text-dark"><i class="fab fa-twitter text-dark"></i>Twitter</a></h5>
                      <h5><a href="#"class="text-dark"><i class="fab fa-linkedin-in text-dark"></i>Linkedin</a></h5>
                      <h5><a href="#"class="text-dark"><i class="fab fa-facebook text-dark"></i>Facebook</a></h5>
                    </ul>
                    </div>
            </div>
    </div>

    <div class="col-4 ">
        <div class="card" >
            <div class="card-body">
                <img src="/caro2.jpg"  class=" img-fluid rounded-circle" alt="..." style="width: 5.08cm; height: 6.35cm;"">    
            </div>
        </div> 
    </div>
  </div>
  <p class="text-center">&copy; 2023 Carolyne Kimetto. All rights reserved.</p>
`;

// Add the HTML code to the footer element
footer.innerHTML = footerHTML;
