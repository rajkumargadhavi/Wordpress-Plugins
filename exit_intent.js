


	jQuery(".exit_intend_modal_desktop").hide();

//Manage Cookie

	function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


// setCookie("show_exit_intend", "false", 30);






	jQuery( "#close_exit_intend_popup" ).click(function() {
 jQuery(".exit_intend_modal_desktop").fadeOut();
});

function mouseoutofscreen(){
    var mouseY = 0;
    var topValue = 0;
    window.addEventListener("mouseout",function(e){
        mouseY = e.clientY;
        if(mouseY<topValue) {
            // alert("Do something here!!!");

            if(sessionStorage.getItem('isshowdeskexit_intend') !== 'true'){

            	 if (getCookie("show_exit_intend") == "") {
				    // its dont get cookie
					// Show popup here
					jQuery(".exit_intend_modal_desktop").show();
				  } 

				sessionStorage.setItem('isshowdeskexit_intend','true');
			}
			

        }
    },
    false);
}


jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if(scroll > 500) {
        console.log('scrollDown');
        mouseoutofscreen();
    } 
    scroll = 0;
});





// Mobile Exit Intent back button
	setExitIntentForMobile();

	function setExitIntentForMobile() {
        var n = window.location.href;
        null == window.history.state && window.history.pushState({
            popupmaker: "exit-intent"
        }, ""), window.onpopstate = function() {
            var e = window.location.href,
                t = e.split("#")[0],
                i = 0 == n.localeCompare(t); - 1 == e.indexOf("#") && i && detectMobileScreen(!1, "onExit")
        };
    }

function detectMobileScreen(forced, action) {
	var x = window.matchMedia("(max-width: 767px)")
	detectSmallScreen(x) // Call listener function at run time
	x.addListener(openPopupMobile) // Attach listener function on state changes
}

function openPopupMobile() {
	if(sessionStorage.getItem('isshowdeskexit_intend') !== 'true'){
		if (getCookie("show_exit_intend") == "") {
		    // its dont get cookie
			// Show popup here
			jQuery(".exit_intend_modal_desktop").show();
		  } 
		
		sessionStorage.setItem('isshowdeskexit_intend','true');
	}
}
// Mobile Exit Intent scroll top



 var position = jQuery(window).scrollTop(); 

	// should start at 0

jQuery(window).scroll(function() {

	var x = window.matchMedia("(max-width: 767px)")
	detectSmallScreen(x) // Call listener function at run time
	x.addListener(detectSmallScreen) // Attach listener function on state changes

});



function detectSmallScreen(x) {
  if (x.matches) { // If media query matches

   	 var scroll = jQuery(window).scrollTop();
	    if(scroll > position) {
	        // console.log('scrollDown');
	    } else {
	         // console.log('scrollUp');

	         if(sessionStorage.getItem('isshowdeskexit_intend') !== 'true'){
				if (getCookie("show_exit_intend") == "") {
				    // its dont get cookie
					// Show popup here
					jQuery(".exit_intend_modal_desktop").show();
				  } 
				
				sessionStorage.setItem('isshowdeskexit_intend','true');
			}

	    }
	    position = scroll;
  } 
  // else {
  //  large screen
  // }
}



jQuery( ".buttonContainer input.submit" ).on( "click", function() {
  setCookie("show_exit_intend", "false", 30);
});


