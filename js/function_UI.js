/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   UI functions _START_   ********************************/

document.onreadystatechange = loading;
function loading() {
    const loading_bg = document.getElementById("loading-bg");
    const loading_items = document.getElementById("loading-items");
    const left_part = document.getElementById("left-part");
    const right_part = document.getElementById("right-part");
    if (document.readyState === "complete") {
        loading_bg.className = "loading-bg-transform";
        loading_items.className = "loading-items-fadeout";
        // setTimeout(function (){left_part.style.display = "flex"}, 1300);
        // setTimeout(function (){right_part.style.display = "flex"}, 1300);
        setTimeout(function (){document.body.style.overflow = "auto"}, 3000);
    }
    else {
        document.body.style.overflow = "hidden";
        // left_part.style.display = "none";
        // right_part.style.display = "none";
    }
}

/********************************   UI functions _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/