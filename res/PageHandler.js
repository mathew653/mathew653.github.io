function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var DefaultURL="about:blank";
function SetDefaultPage(page)
{
	DefaultURL=page;
}

function SelectPageByQuery(elem)
{
	var _p_Query=getQueryVariable("page");
	var _p_Scroll=getQueryVariable("noscroll");
	var _ParamGood=false;
	var _NoScroll=false;
	if ((typeof _p_Query) !== 'boolean') { _ParamGood=true; }
	if ((typeof _p_Scroll) !== 'boolean') { _NoScroll=true; }
	
	if (_ParamGood === true)
	{
		readTextFileToElement("page/"+_p_Query+".html",elem);
		//if (readTextFileToElement("page/"+_p_Query+".html",elem) === true) { }
		//else { readTextFileToElement("page/main.html",elem); }
	}
	else
	{
		readTextFileToElement(DefaultURL,elem);
		_NoScroll=true;
	}
	
	var InitArea = document.getElementById("initrgn");
	var ContentArea = document.getElementById("scrollrgn");
	if (_NoScroll === true)
	{
		InitArea.style.overflow = "visible";
		ContentArea.style.height = "100%";
		ContentArea.style.width = "200%";
	}
	else
	{
		InitArea.style.overflow = "scroll";
		ContentArea.style.height = "200%";
		ContentArea.style.width = "200%";
	}
}