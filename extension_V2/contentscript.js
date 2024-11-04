async function scan() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    xhr.open("GET", "http://127.0.0.1:5000/scrapeClassify", true);
    xhr.onload = function() {
        text = xhr.responseText;
        return text
    }
    // text = xhr.responseText;
    // // text = JSON.parse(xhr.responseText);
    // // for (var i = 0; i < text.length; i++) {
    // //     console.log(text[i]);}
    //     console.log(text);
    //     xhr.send();
    
}