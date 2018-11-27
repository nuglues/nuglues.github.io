/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   UI functions _START_   ********************************/

document.onreadystatechange = loading;
function loading() {
    const loadingBg = document.getElementById("loadingBg");
    const loadingItems = document.getElementById("loadingItems");
    const right_part = document.getElementById("right_part");
    if (document.readyState === "complete") {
        loadingBg.className = "loadingBg_Transform";
        loadingItems.className = "loadingItems_Fadeout";
        right_part.className = "right-part_Transform";
        setTimeout(function (){document.body.style.overflow = "auto"}, 500);
    }
    else {
        document.body.style.overflow = "hidden";
    }
}

/********************************   UI functions _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/