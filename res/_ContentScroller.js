var ContPos = 0;
var ScrollTimerUP;
var ScrollTimerDN;
var IsScrollingDown=0;
var IsScrollingUp=0;
var scrollTimer=80;
var scrollAmmount=15;
	
function CapContPos(value)
{
	//This might look confusing, but if you think of it like this positive is down/left and negitive is up/right it makes sense.
	if (value > 0){ return 0; } 
	
	return value;
}
	
function ScrollUp()
{
	var Elem = document.getElementById("scrollrgn");
	
		ContPos = ContPos - scrollAmmount;
		ContPos = CapContPos(ContPos);
		
		Elem.style.top = ContPos + "px";
}
	
function ScrollDown()
{
	var Elem = document.getElementById("scrollrgn");
	
	ContPos =  ContPos + scrollAmmount;
	ContPos = CapContPos(ContPos);
	
	Elem.style.top = ContPos + "px";
}
	
function AutoScrollUp()
{
	ScrollUp();
	ScrollTimerUP=setTimeout("AutoScrollUp()",scrollTimer);
}
	
function StartScrollUP()
{
	if (!IsScrollingUp)
	{
		IsScrollingUp=1;
		AutoScrollUp();
	}
}

function stopScrollUP()
{
	clearTimeout(ScrollTimerUP);
	IsScrollingUp=0;
}
	
function AutoScrollDown()
{
	ScrollDown();
	ScrollTimerDN=setTimeout("AutoScrollDown()",scrollTimer);
}

function StartScrollDN()
{
	if (!IsScrollingDown)
	{
		IsScrollingDown=1;
		AutoScrollDown();
	}
}

function stopScrollDN()
{
	clearTimeout(ScrollTimerDN);
	IsScrollingDown=0;
}
	
//function ScrollEvent(event)
//{
//}