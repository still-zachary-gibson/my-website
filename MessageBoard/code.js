async function getSampleText() {
  const cool_thoing = ( (await fetch('savedMessages.txt', {mode: "same-origin"})).text() );
	cool_thoing.then(result => {
    // Handle the successful result here
    	messages = JSON.parse(result)
	for(var i = 0; i < messages.length; i++)
	{
		messages[i].date = new Date(messages[i].date)
		const test = document.createElement('div');
		const time = (messages[i].date.getHours() >= 12) ? "PM" : "AM"
		const hour = (messages[i].date.getHours() > 12) ? messages[i].date.getHours()-12 : messages[i].date.getHours()
		const minutes = (messages[i].date.getMinutes() >= 10) ? messages[i].date.getMinutes() : "0" + messages[i].date.getMinutes()
		test.innerHTML = messages[i].sender + ": " + messages[i].message + " - " + hour + ":" + minutes + " " + time + " " + (messages[i].date.getMonth()+1) + "/" + messages[i].date.getDate() + " " + messages[i].date.getFullYear()
		messa.appendChild(test)
	}
  })
}

getSampleText()

function pause()
{
	if(high_score_name.value == "" || high_score_input.value == "")
	{alert("EMPTY FIELDS!!!"); return;}

	const NewThing = {}
	NewThing.name = high_score_name.value
	NewThing.message = high_score_input.value
	NewThing.date = new Date()

	messages.push(NewThing)

	high_score_name.value = ""
	high_score_input.value = ""

	const thingToSave = JSON.stringify(messages)

	fetch('savedMessages.txt', {mode: "same-origin", method: "POST", body: thingToSave})

	alert("It doesn't work, this was a waste of 3 hours. I don't like the taste of air anymore.")

	//getSampleText()
}
