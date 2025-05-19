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

function draw()
{
	if(last_b != b)
	{
		switch(b[0]) {
			case "dark_mode":
				if(b[1] == true)
				{
					bg.style.backgroundColor = "black"
					info.style.color = "white"
					gname.style.color = "white"
					document.body.style.backgroundColor = "darkgrey"
				}
				else
				{
					bg.style.backgroundColor = "white"
					info.style.color = "black"
					gname.style.color = "black"
					document.body.style.backgroundColor = "lightgrey"
				}
			break
			case "resize":
				if(b[1][0][1] == true && b[1][0][3] == false && b[1][0][4] == false && b[1][0][0]*b[1][0][2] > 10)
				{
					GameFrame.style.width = (400 + ((b[1][0][0]*b[1][0][2])-10)*24) + "px"
				}
				else
				{
					GameFrame.style.width = "400px"
				}
				if(b[1][1] > 20)
				{
					GameFrame.style.height = (820 + (b[1][1]-20)*20) + "px"
				}
				else
				{
					GameFrame.style.height = "820px"
				}
			break
			case "child":
				alert(b)
			break
		}
		last_b = b
	}
}

setInterval(draw, 10)