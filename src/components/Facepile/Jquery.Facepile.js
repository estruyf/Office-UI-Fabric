// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

/**
 * Facepile Plugin
 *
 * Adds basic demonstration functionality to .ms-Facepile components.
 *
 * @param  {jQuery Object}  One or more .ms-Facepile components
 * @return {jQuery Object}  The same components (allows for chaining)
 */
(function ($) {
  $.fn.Facepile = function () {

    /** Iterate through each Facepile provided. */
    return this.each(function () {
      
      var $facePile = $(this);  
      var $n = $(".ms-Persona--xs").length;

      /** Add member when button clicked (No Overflow) */
      $facePile.on('click', '.ms-Facepile-circleFilled-noOverflow', function(event) {                
        $(this).parent().next().children(':last').clone().appendTo(".ms-Facepile-members-noOverflow");        
      });

      /** Add member when button clicked (With Overflow) */
      $facePile.on('click', '.ms-Facepile-circleFilled-withOverflow', function(event) {                
        $(this).parent().next().children(':first').clone().appendTo(".ms-Facepile-members-withOverflow");  

        // Increment number of members by one
        $n += 1;
        $(".ms-Facepile-overflow").text("+" + $n);       
      });

      // Display member count on page load
      $(document).ready(function() {
        $(".ms-Facepile-overflow").text("+" + $n);
      });  

    });

  };
})(jQuery);