function select_ariism() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("main_content").innerHTML = this.responseText;
        // console.log(this.responseText);
    }
    xhttp.open("GET", "/assets/ariisms.txt", true);
    xhttp.send();
}