/**
 * Created by MyPC on 04/07/2016.
 */
jQuery(document).ready(function($) {
	var counter = 5;

	setInterval(function() {
		counter--;
		if (counter >= 0) {
			$('#count').html(counter + ' giây');
		}
		// Display 'counter' wherever you want to display it.
		if (counter === 0) {
            window.location.href = 'http://funix.edu.vn/dang-ky-thanh-cong';
			clearInterval(counter);
		}

	}, 1000);
});