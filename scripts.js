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

document.getElementById('signupPassword').addEventListener('input', function() {
    const password = this.value;

    const passwordRequirements = [
        { regex: /(?=.*[a-z])/, element: document.getElementById('lowercase') },
        { regex: /(?=.*[A-Z])/, element: document.getElementById('uppercase') },
        { regex: /(?=.*\d)/, element: document.getElementById('digit') },
        { regex: /^.{8,15}$/, element: document.getElementById('length') },
    ];

    passwordRequirements.forEach(req => {
        if (req.regex.test(password)) {
            req.element.classList.add('valid');
            req.element.classList.remove('invalid');
        } else {
            req.element.classList.add('invalid');
            req.element.classList.remove('valid');
        }
    });
});

//^[a-zA-Z0-9._]{3,10}$/
document.getElementById('signupUsername').addEventListener('input', function() {
    const username = this.value;

    const usernameRequirements = [
        { regex: /^[a-zA-Z0-9._]+$/, element: document.getElementById('usernameChars') },
        { regex: /^.{3,10}$/, element: document.getElementById('usernameLength') },
    ];

    usernameRequirements.forEach(req => {
        if (req.regex.test(username)) {
            req.element.classList.add('valid');
            req.element.classList.remove('invalid');
        } else {
            req.element.classList.add('invalid');
            req.element.classList.remove('valid');
        }
    });
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    
    const passwordRequirements = [
        { regex: /(?=.*[a-z])/, elementId: 'lowercase' },
        { regex: /(?=.*[A-Z])/, elementId: 'uppercase' },
        { regex: /(?=.*\d)/, elementId: 'digit' },
        { regex: /^.{8,15}$/, elementId: 'length' },
    ];

    const usernameRequirements = [
        { regex: /^[a-zA-Z0-9._]+$/, element: document.getElementById('usernameChars') },
        { regex: /^.{3,10}$/, element: document.getElementById('usernameLength') },
    ];

    const passwordErrors = passwordRequirements.filter(req => !req.regex.test(password)).map(req => req.elementId);    
    const usernameErrors = usernameRequirements.filter(req => !req.regex.test(username)).map(req => req.elementId);    


    if (usernameErrors.length > 0) {
        requirements.forEach(req => {
            const requirementElement = document.getElementById(req.elementId);
            if (req.regex.test(username)) {
                requirementElement.classList.add('valid');
                requirementElement.classList.remove('invalid');
            } else {
                requirementElement.classList.add('invalid');
                requirementElement.classList.remove('valid');
            }
        });
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (passwordErrors.length > 0) {
        requirements.forEach(req => {
            const requirementElement = document.getElementById(req.elementId);
            if (req.regex.test(password)) {
                requirementElement.classList.add('valid');
                requirementElement.classList.remove('invalid');
            } else {
                requirementElement.classList.add('invalid');
                requirementElement.classList.remove('valid');
            }
        });
    } else {
        alert('Sign Up form submitted successfully!');
        // Add your form submission logic here
    }
});

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

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = 67;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Toggle menu and hamburger icon
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});