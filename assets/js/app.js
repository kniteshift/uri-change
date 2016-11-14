var sources = [{
		name: 'Google',
		source: 'GOOGLE',
		parameter: null
	},{
		name: 'Commission Junction',
		source: 'COMJUNC',
		parameter: null
	},{
		name: 'Pretio',
		source: 'PRETIO',
		parameter: '&offer_id={{pretio_offer_id}}'
	},{
		name: 'SendGrid Email',
		source: 'MARKETING_EMAIL',
		parameter: null
	},{
		name: 'Centro DSP',
		source: 'SITE_SCOUT',
		parameter: null
	}];

$(function(){
	var html = '';

	$('#url').submit(function(e){
		e.preventDefault();
		var url = $('#changeme').val();
		var facebook = 'FACEBOOK',
			google = 'GOOGLE',
			social = '&utm_medium=social',
			search = '&utm_medium=search',
			keyword = '&utm_term={keyword}',
			socialIndex = url.indexOf(social),
			searchIndex = url.indexOf(search);
  
		if (socialIndex > -1) {
			url = url.replace(social, '');
		} else if (searchIndex > -1) {
			url = url.replace(search, '');
		};

		console.log("Search: " + search);
		console.log("Social: " + social);
		var newUrls = sources.map(function(source){

			var param = source.parameter;

			if (param == null) {
				param = '';
			} 

			if(url.indexOf(facebook) > -1) {
				var nofacebook = url.replace(facebook, source.source) + param;
				html += '<h3>'+ source.name +'</h3>' + 
				'<p><a href="' + nofacebook + '" target="_blank">' + nofacebook +'</a></p> <br />';
			} else if (url.indexOf(google) > -1) {
				var nogoogle = url.replace(google, source.source) + param;

				if(url.indexOf(keyword) > -1) {
					url = url.replace(keyword, '');
				}

				html += '<h3>'+ source.name +'</h3>' + 
				'<p><a href="' + nogoogle + '" target="_blank">' + nogoogle +'</a></p> <br />';				
			}


		});
		
		$('.results').append(html);
	});

});