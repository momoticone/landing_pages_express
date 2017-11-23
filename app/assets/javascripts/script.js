// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//=require jquery
//=require jquery_ujs
//= require rails-ujs
//= require turbolinks
//= require_tree .


		$(function() {
			$('#onglets').css('display', 'block');
			$('#onglets').click(function(event) {
				var actuel = event.target;
				if (!/li/i.test(actuel.nodeName) || actuel.className.indexOf('actif') > -1) {
					return;
				}
				$(actuel).addClass('actif').siblings().removeClass('actif');
				setDisplay();
			});
			function setDisplay() {
				var modeAffichage;
				$('#onglets li').each(function(rang) {
					modeAffichage = $(this).hasClass('actif') ? '' : 'none';
					$('.item').eq(rang).css('display', modeAffichage);
				});
			}
			setDisplay();
		});
