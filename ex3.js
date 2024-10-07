

// document.getElementById("but").addEventListener("click", changeParagraphText);
function changeParagraphText() {
    document.getElementById("textParagraph").innerHTML = "The paragraph text has been changed!";
}        function changeDivColor() {
    document.getElementById("colorDiv").style.backgroundColor = "blue";
}        function toggleParagraph() {
    const paragraph = document.getElementById("toggleParagraph");
    if (paragraph.style.display === "none") 
        {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}        function addListItem() {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("myList").appendChild(newItem);
}        function changeImageSource() {
    document.getElementById("myImage").src = "Untitled.jpeg";
}        function countParagraphs() {
    const paragraphs = document.getElementsByTagName("p");
    alert("Number of paragraphs: " + paragraphs.length);
}        function deleteListItem() {
    const list = document.getElementById("myList");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}




