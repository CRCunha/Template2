function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function data() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = d.getSeconds();
    var el = document.querySelector('.data-info');
    var ap;
    if (h > 12) {
        ap = 'PM';
    } else {
        ap = "AM";
    }

    el.innerHTML = h + " : " + m + " : " + ap;
}