var b;
var last_b;

// you might want to write these into if statements to make sure that e.data[0] is varA if you have multiple messages coming across
if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('message', function(e) {
        b = e.data;
    }, false);
} else if (typeof window.attachEvent != 'undefined') { // this part is for IE8
    window.attachEvent('onmessage', function(e) {
        b = e.data; // you'll probably have to play around with this part as I can't remember exactly how it comes across in IE8 -- i think it will involve slice() iirc 
});
}
alert("I LIVE")

function draw()
{
	if(last_b != b)
	{
		alert(b)
		last_b = b
	}
}

setInterval(draw, 10)