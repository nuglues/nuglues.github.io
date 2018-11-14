/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   UI functions _START_   ********************************/

let rightSidebarWidth = 200;

function leftDivWidAndRightDivHeiCalc() {
    return [document.body.scrollWidth - rightSidebarWidth - 40 + "px", window.innerHeight - 200 + "px"] // padding owns 10 + 10 px and 10 + 10 px
}

innerHtml("right-sidebarWidth", rightSidebarWidth + "px");
document.documentElement.style.setProperty('--rightSidebarWidth', rightSidebarWidth + "px");

function goTop() {
    window.scrollBy(-30, -30);
    let t = setTimeout('goTop()', 10);
    if (document.documentElement.scrollTop + document.documentElement.scrollLeft < 1) {
        clearTimeout(t);
    }
}

/********************************   UI functions _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/