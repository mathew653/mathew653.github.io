//Extension
var ScrollArea=document.getElementById("ContArea")
 
function HandleScroll(e){
    var evt=window.event || e //equalize event object
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta //delta returns +120 when wheel is scrolled up, -120 when scrolled down
    var nextslideindex=(delta<=-120)? 1 : 0 //1 = up , 0 = down.
	
	if (nextslideindex == 1) { myScrollbar.moveup();   }
	if (nextslideindex == 0) { myScrollbar.movedown(); }
	
    if (evt.preventDefault) //disable default wheel action of scrolling page
        evt.preventDefault()
    else
        return false
 
}
 
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
 
if (ScrollArea.attachEvent) //if IE (and Opera depending on user setting)
    ScrollArea.attachEvent("on"+mousewheelevt, HandleScroll)
else if (ScrollArea.addEventListener) //WC3 browsers
    ScrollArea.addEventListener(mousewheelevt, HandleScroll, false)
