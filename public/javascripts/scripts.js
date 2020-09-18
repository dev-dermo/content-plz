$(function() {
	// get and add form fields to result object
	function stageFormInput() {
		$('.alert-danger').hide();

		// object template
		var tmp = {
			'websiteName': '',
			'pageName': '',
			'pageCopy': '',
			'pageImages': []
		};

		if ($('#page-name').val().length > 0) {
			// grab the form field values and set them into the template
			tmp.websiteName = $('h1').text();
			tmp.pageName = $('#page-name').val();
			tmp.pageCopy = $('#page-copy').val();
			var allFiles = document.getElementById('page-images').files;
			for (var i=0;i<allFiles.length;i++) {
				tmp.pageImages.push(allFiles[i].name);
			}

			// push template to result
			result.push(tmp);	

			$('.alert-success').show();
			$('.alert-success ul').append('<li>Success, \'<strong><em>' + $('#page-name').val() + '\'</em></strong> page staged and ready to send.</li>');
		} else {
			$('.alert-danger').show();
		}

		// clear values
		$('#page-name').val('');
		$('#page-copy').val('');
		$('#page-images').val('');

		console.log(result);
	}

	var result = [];

	$('#add-page').on('click', function(e) {
		e.preventDefault();
		
		if ($('#page-name').val().length > 0) {
			stageFormInput();
		} else {
			$('.alert-danger').show();
		}
	});

	$('#submit').on('click', function(e) {
		stageFormInput();

		if (result.length > 0) {
			$('#data').val(JSON.stringify(result));
		} else {
			e.preventDefault();
		}
	});
});