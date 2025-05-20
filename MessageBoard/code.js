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

async function imageUrlToFile(imageUrl) {
    try {
        const response = await fetch(imageUrl, {mode: "no-cors"})
	alert(response)
        const blob = await response.blob();
        const filename = "lol"
        const file = new File([blob], filename, { type: blob.type });
	//download("test.txt", file)
	alert(file)
	handleScore(file)
        return file;
    } catch (error) {
        alert('Error:' + error);
        throw error;
    }
}

alert("ugh")

async function getSampleText() {
  const cool_thoing = ( (await fetch('savedMessages.txt', {mode: "same-origin"})).text() );
	cool_thoing.then(result => {
    // Handle the successful result here
    const messages = JSON.parse(result)
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

//tch('Message.html', {mode: "no-cors"}).then(x => alert(x.text()))

//imageUrlToFile('Message.html')
