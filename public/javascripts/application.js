// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
jQuery(document).ready(function(){
  jQuery("#sideMenuLink").css("background-position", "0% 0%");
  jQuery("#fxSideMenu").hide();
  if(top != self){
	var content = jQuery('#content').html();
	jQuery('body').html( '<div id="content">' + content + "</div>" );
  }
});