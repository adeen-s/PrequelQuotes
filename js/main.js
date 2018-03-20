var prevRand = "";
function LoadFile() {
    var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
    var quotes = strRawContents.split("\n");
    document.getElementById('getQuoteBtn').onclick = function() {
        do {
            var random = quotes[Math.floor(Math.random()*quotes.length)];
        } while (random == prevRand || random == "");
        prevRand = random;
        alert(random);
    };
}
