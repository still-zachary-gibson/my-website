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
  const cool_thoing = ( (await fetch('sample.txt', {mode: "same-origin"})).text() );
	console.log(cool_thoing)
}

getSampleText()

//tch('Message.html', {mode: "no-cors"}).then(x => alert(x.text()))

//imageUrlToFile('Message.html')
