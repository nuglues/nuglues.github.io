function goTop() {
    window.scrollBy(-30, -30);
    t = setTimeout('goTop()', 20);
    if (document.documentElement.scrollTop + document.documentElement.scrollLeft< 1) {
        clearTimeout(t);
    }
}