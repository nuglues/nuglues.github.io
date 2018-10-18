function goTop() {
    window.scrollBy(0, -30);
    t = setTimeout('goTop()', 20);
    if (document.documentElement.scrollTop < 1) {
        clearTimeout(t);
    }
}