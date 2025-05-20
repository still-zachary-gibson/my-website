async function imageUrlToFile(imageUrl) {
    try {
        const response = await fetch(imageUrl,
	{
	mode: "no-cors",
	}
);
	alert(response.ok)
        if (!response.ok) {
            throw new Error(`Failed to fetch image (status ${response.status})`);
        }
        const blob = await response.blob();
        const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
        const file = new File([blob], filename, { type: blob.type });
        return file;
    } catch (error) {
        alert('Error:' + error);
        throw error;
    }
}

alert("ugh")

imageUrlToFile('http://localhost:3000/../Images/Battleship.png')