
var _gaq = _gaq || []; 
_gaq.push(['_setAccount', 'UA-31492504-1']); 
//_gaq.push(['_setAccount', 'UA-5646346-6']); //for local checking , change to iec GA testing
//_gaq.push(['_setAccount', 'UA-5646346-2']); //for local checking

_gaq.push(['_setDomainName', 'kerrylogistics.com']); 
//_gaq.push(['_setDomainName', 'kerrylogistics.me.hk']); 
_gaq.push(['_trackPageview']); 

function pageGa(page)
{
	var _langIdx;
	var currentUrl = window.location.href;
	if(currentUrl.indexOf('/eng/') > -1)
	{
		_langIdx = 0;
	}else if(currentUrl.indexOf('/tch/') > -1)
	{
		_langIdx = 1;
	}else if(currentUrl.indexOf('/sch/') > -1)
	{
		_langIdx = 2;
	}

/*
	var _langIdx;
	if(window.location.href.indexOf('eng') > -1)
	{
		_langIdx = 0;
	}else if(window.location.href.indexOf('tch') > -1)
	{
		_langIdx = 1;
	}else 
		_langIdx = 2;
*/
	var lang = ['English', 'Traditional Chinese','Simple Chinese'];

	_gaq.push(['_trackEvent', 'kerrylogisticsMT', 'Applicantion Page'+page, lang[_langIdx] ]);
	
}