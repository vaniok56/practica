if (document.getElementById('showPasswordButton'))
document.getElementById('showPasswordButton').addEventListener('click', function() {
    const passwordInput = document.getElementById('signupPassword');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = 'Hide';
        this.classList.remove('show');
        this.classList.add('hide');
    } else {
        passwordInput.type = 'password';
        this.textContent = 'Show';
        this.classList.remove('hide');
        this.classList.add('show');
    }
});

if (document.getElementById('signupPassword'))
document.addEventListener('DOMContentLoaded', function() {
    const signupPassword = document.getElementById('signupPassword');
    const signupUsername = document.getElementById('signupUsername');
    const passwordRequirementsContainer = document.getElementById('passwordRequirements');
    const usernameRequirementsContainer = document.getElementById('usernameRequirements');
    
    passwordRequirementsContainer.style.display = 'none';
    usernameRequirementsContainer.style.display = 'none';

    const passwordRequirements = [
        { regex: /(?=.*[a-z])/, element: document.getElementById('lowercase') },
        { regex: /(?=.*[A-Z])/, element: document.getElementById('uppercase') },
        { regex: /(?=.*\d)/, element: document.getElementById('digit') },
        { regex: /^.{8,15}$/, element: document.getElementById('length') },
    ];

    const usernameRequirements = [
        { regex: /^[a-zA-Z0-9._]+$/, element: document.getElementById('usernameChars') },
        { regex: /^.{3,10}$/, element: document.getElementById('usernameLength') },
    ];

    if (signupPassword) {
        signupPassword.addEventListener('input', function() {
            const password = this.value;
            let invalidFound = false;

            passwordRequirements.forEach(req => {
                if (req.regex.test(password)) {
                    req.element.classList.add('valid');
                    req.element.classList.remove('invalid');
                    req.element.style.display = 'none';
                } else {
                    req.element.classList.add('invalid');
                    req.element.classList.remove('valid');
                    req.element.style.display = 'list-item';
                    invalidFound = true;
                }
            });

            passwordRequirementsContainer.style.display = invalidFound ? 'block' : 'none';
        });
    }

    if (signupUsername) {
        signupUsername.addEventListener('input', function() {
            const username = this.value;
            let invalidFound = false;

            usernameRequirements.forEach(req => {
                if (req.regex.test(username)) {
                    req.element.classList.add('valid');
                    req.element.classList.remove('invalid');
                    req.element.style.display = 'none';
                } else {
                    req.element.classList.add('invalid');
                    req.element.classList.remove('valid');
                    req.element.style.display = 'list-item';
                    invalidFound = true;
                }
            });

            usernameRequirementsContainer.style.display = invalidFound ? 'block' : 'none';
        });
    }

    if (document.getElementById('signupForm')) {
        document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = signupUsername.value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = signupPassword.value.trim();
            
            const passwordErrors = passwordRequirements.filter(req => !req.regex.test(password)).map(req => req.element);
            const usernameErrors = usernameRequirements.filter(req => !req.regex.test(username)).map(req => req.element);

            let valid = true;

            if (usernameErrors.length > 0) {
                usernameErrors.forEach(el => {
                    el.classList.add('invalid');
                    el.classList.remove('valid');
                    el.style.display = 'list-item';
                });
                usernameRequirementsContainer.style.display = 'block';
                alert('Please enter a valid username.');
                valid = false;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                valid = false;
            }

            if (passwordErrors.length > 0) {
                passwordErrors.forEach(el => {
                    el.classList.add('invalid');
                    el.classList.remove('valid');
                    el.style.display = 'list-item';
                });
                passwordRequirementsContainer.style.display = 'block';
                alert('Please enter a valid password.');
                valid = false;
            }

            if (valid) {
                alert('Sign Up form submitted successfully!');
                // Add your form submission logic here
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

if (document.getElementById('signinForm'))
document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('signinEmail').value.trim();
    const password = document.getElementById('signinPassword').value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Invalid password.');
        return;
    }

    alert('Sign In form submitted successfully!');
    // Add your form submission logic here
});

if (document.getElementById('contactForm'))
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!validateName(name)) {
        alert('Please enter a valid name.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message.length < 10) {
        alert('Message must be at least 10 characters long.');
        return;
    }

    alert('Contact form submitted successfully!');
    // Add your form submission logic here
});

function validateUsername(name) {
    const nameRegex = /^[a-zA-Z0-9._]{3,10}$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    return passwordRegex.test(password);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
        const headerOffset = 67;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});