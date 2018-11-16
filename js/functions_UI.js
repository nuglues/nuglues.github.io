/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   UI functions _START_   ********************************/

let rightSidebarWidth = 200;
let rightSidebarHeight = 400;

function leftDivWidAndRightDivHeiCalc() {
    return [document.body.scrollWidth - rightSidebarWidth - 40 + "px", window.innerHeight - rightSidebarHeight + "px"] // padding owns 10 + 10 px and 10 + 10 px
}

document.documentElement.style.setProperty('--rightSidebarWidth', rightSidebarWidth + "px");

function blockAdjust() {
    document.documentElement.style.setProperty('--leftDivWidth', leftDivWidAndRightDivHeiCalc()[0]);
    document.documentElement.style.setProperty('--rightSidebarHeight', leftDivWidAndRightDivHeiCalc()[1]);
    setTimeout('blockAdjust()', 50);
}


function goTop() {
    window.scrollBy(-30, -30);
    let t = setTimeout('goTop()', 10);
    if (document.documentElement.scrollTop + document.documentElement.scrollLeft < 1) {
        clearTimeout(t);
    }
}

document.onreadystatechange = loading;
function loading() {
    const loadDiv = document.getElementById("loadDiv");
    if (document.readyState === "complete") {
        loadDiv.className = "loadBgFadeout";
        //loadDiv.style.display = "none";
        document.body.style.overflow = "auto";
    }
    else {
        loadDiv.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

/********************************   UI functions _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/