
function DownloadFileText(){
    var textcontent = document.getElementById("textareaID").value;
    var downloadableLink = document.createElement('a');
    downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
    downloadableLink.download = "myFile" + ".txt";
    document.body.appendChild(downloadableLink);
    downloadableLink.click();
    document.body.removeChild(downloadableLink);
}

function eraseText() {
    document.getElementById("textareaID").value = "";
}

function loadFileFromLocal() {
    var file = document.getElementById("myFile").files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var textArea = document.getElementById("textareaID");
        textArea.value = e.target.result;
    }
    reader.readAsText(file);
}