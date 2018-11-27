/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   UI functions _START_   ********************************/

document.onreadystatechange = loading;
function loading() {
    const loadDiv = document.getElementById("loadDiv");
    if (document.readyState === "complete") {
        loadDiv.className = "loadBgFadeout";
        setTimeout(function (){document.body.style.overflow = "auto"}, 500);
    }
    else {
        document.body.style.overflow = "hidden";
    }
}

/********************************   UI functions _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/