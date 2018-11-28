/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   UI functions _START_   ********************************/

document.onreadystatechange = loading;
function loading() {
    const loading_bg = document.getElementById("loading-bg");
    const loading_items = document.getElementById("loading-items");
    //const right_part = document.getElementById("right_part");
    if (document.readyState === "complete") {
        loading_bg.className = "loading-bg-transform";
        loading_items.className = "loading-items-fadeout";
        //right_part.className = "right-part_Transform";
        setTimeout(function (){document.body.style.overflow = "auto"}, 3000);
    }
    else {
        document.body.style.overflow = "hidden";
    }
}

/********************************   UI functions _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/