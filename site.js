"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});
 // Site.js or your custom JavaScript file
$(document).ready(function () {
    $('#contactForm').on('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const name = $('input[name="name"]').val();
        const email = $('#email').val(); // Accessing email using id
        const contact = $('input[name="contact"]').val();
        const message = $('textarea[name="message"]').val();

        // Sending the email using SMTP.js
        Email.send({
            Host: "smtp.gmail.com",
            Username: "devendraprajapt42@gmail.com", // Use your email
            Password: "", // Use your app password (not Gmail password)
            To: 'devendra.23webuser@gmail.com', // The recipient email address
            From:' kj.prajapat@gmail.com', // Form's email field value
            Subject: "New Contact Inquiry from " + name,
            Body: `
                <strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Contact:</strong> ${contact}<br>
                <strong>Message:</strong> ${message}
            `
        }).then(function (message) {
            alert('Your message has been sent successfully!');
            $('#contactForm')[0].reset(); // Reset the form after submission
        }).catch(function (error) {
            alert('There was an error sending your message: ' + error);
        });
    });
});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});
