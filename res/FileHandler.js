//Works under
//Win32 : IE, Pale moon
//Linux : Iceweasel
			
function readTextFileToElement(file,elem)
{
	var Element=document.getElementById(elem);
				
	//IE as per usal is a difficult sod.
	try
	{
		if (window.ActiveXObject) {	rawFile= new window.ActiveXObject("Microsoft.XMLHTTP"); }
		else
		{ rawFile = new XMLHttpRequest(); }
				
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					var allText = rawFile.responseText;
					Element.innerHTML="<pre>"+allText+"</pre>";
					return true;
				}
			}
		}
		rawFile.send(null);
	}
	catch(err)
	{
		Element.innerHTML="<pre>"+file+":"+err.message+"\nThis may be caused by a missing file or problems with web service</pre>";
		return false;
	}
	return false;
}