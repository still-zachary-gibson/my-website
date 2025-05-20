function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function handleScore(file) {
	const reader = new FileReader();
    reader.onload = handleFileLoad;
    reader.readAsText(file);
}

function handleFileLoad(event) {
//download("test.txt", event.target.result)

	alert(event.target.result)
}

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

	await fetch('savedMessages.txt', {mode: "same-origin", method: "POST", body: thingToSave})
}

//tch('Message.html', {mode: "no-cors"}).then(x => alert(x.text()))

//imageUrlToFile('Message.html')
