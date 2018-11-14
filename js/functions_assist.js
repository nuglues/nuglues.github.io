/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   assist functions _START_   ********************************/

function msTrans(ms) {
    if (ms < 0) {
        return "ERROR INPUT _msTrans";
    }
    else {
        let output_str = "";

        const day = Math.floor(ms / dayInMs);
        ms -= day*dayInMs;
        const hr = checkTime(Math.floor(ms / hrInMs));
        ms -= hr*hrInMs;
        const min = checkTime(Math.floor(ms / minInMs));
        ms -= min*minInMs;
        const sec = checkTime(Math.floor(ms / secInMs));

        if (day > 0) {
            output_str += day + "天 ";
        }
        output_str += hr + ":" + min + ":" + sec;

        return output_str;
    }
}

function goYaShow(timeLeft, eventName, extraStr) {
    const d = timeLeft.slice(-10,-9);
    const n = eventName.slice(-4);
    if (d !== "天" && n !== "下次开始") {
        return timeLeft + extraStr;
    }
    else {
        return "";
    }
}

function checkTime(arr) {
    // add front 0 for numbers less than 10
    if (typeof(arr) === "number"){
        if (arr < 10){
            arr = "0" + arr;
        }
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 10) {
                arr[i] = "0" + arr[i];
            }
        }
    }
    return arr;
}

function checkQuantity(arr) {
    // add front space for numbers less than 10, then add back space
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            arr[i] = "&nbsp;&nbsp;" + arr[i] + "&nbsp;";
        }
        else{
            arr[i] = arr[i] + "&nbsp;";
        }
    }
    return arr;
}

function oppoCamp(campStr){
    if (campStr === "联盟"){
        return "部落";
    }
    else if(campStr === "部落"){
        return "联盟";
    }
    else{
        return "error input";
    }
}

function dayTrans (day) {
    switch (day) {
        case 1:
            return "星期一";
        case 2:
            return "星期二";
        case 3:
            return "星期三";
        case 4:
            return "星期四";
        case 5:
            return "星期五";
        case 6:
            return "星期六";
        case 0:
            return "星期日";
        default:
            return "error input";
    }
}

function innerHtml(id,str) {
    document.getElementById(id).innerHTML = str;
}

/********************************   assist functions _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/