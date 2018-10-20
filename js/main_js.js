var loadTime = new Date(); // get current time (full information)

var timeNode = [];
timeNode[0] = [0, 1]; // 00:01 NightMoon starts (monthly, first Sunday)
timeNode[1] = [23, 59]; // 23:59 NightMoon ends (monthly, the Saturday after first Sunday)
timeNode[2] = [3, 0]; // daily quest (daily)
timeNode[3] = [7, 0]; // weekly events starts (weekly, Thursday)
                      // raid CD; Mythic(+) CD/box (weekly, Thursday)
                      // world quest 1; cOA (Champions of Azeroth), opposite (daily)
                      // 5H (daily)
timeNode[4] = [15, 0]; // world quest 2 (daily)
timeNode[5] = [19, 0]; // world quest 3; opposite (daily)
timeNode[6] = [23, 0]; // world quest 4 (daily)
timeNode[7] = [4, 0]; // weekly events ends (weekly, Thursday)





function mainLoop(){
    var cur = {
        // cur is short for 'current (time)', actually same as 'Date'
        // toNextHour -- time to next hour [hrs,mins,secs]
        year: loadTime.getFullYear(),
        month: loadTime.getMonth(), // 0~11
        date: loadTime.getDate(), // 1~31
        day: loadTime.getDay(), // 0~6 Sun~Sat
        hour: loadTime.getHours(), // 0~23
        min: loadTime.getMinutes(), // 0~59
        Seconds: loadTime.getSeconds(), // 0~59
        toNextHour: function () {
            var mCur = loadTime.getMinutes();
            var sCur = loadTime.getSeconds();
            var s = (3600 - mCur * 60 - sCur) % 60;
            var m = (3600 - mCur * 60 - sCur - s) / 60;
            var h = 0;
            if (m === 60) {
                h = 1;
                m = 0;
            }
            return [h, m, s];
        }
    };

    timeRemain = {
        worldQuestNorm: timeCountdown(cur,[timeNode[3],timeNode[4],timeNode[5],timeNode[6]],1),
        worldQuestCOA: timeCountdown(cur,timeNode[3],1),
        worldQuestOpp: timeCountdown(cur,[timeNode[3],timeNode[5]],1),
        dailyQuest: timeCountdown(cur,timeNode[2],1)
    };

    document.getElementById("wQ-norm").innerHTML = timeRemain.worldQuestNorm.slice(3);
    document.getElementById("wQ-cOA-5H").innerHTML = timeRemain.worldQuestCOA.slice(3);
    document.getElementById("wQ-opp").innerHTML = timeRemain.worldQuestOpp.slice(3);
    document.getElementById("daily-quest").innerHTML = timeRemain.dailyQuest.slice(3);

    loadTime.setMilliseconds(1000);
    setTimeout('mainLoop()', 1000);
}

function timeCountdown(cur, node, index) {
    // cur is current time
    // node comes from timeNode
    // index is from 0~4 , represents four ways for different loop type
    // 1: type: time dot(daily); heading for next dot after cross the current one; returns ["str: d(always 0) h:m:s"]
    // 2: type: time dot(weekly); heading for next dot after cross the current one; returns ["str: d h:m:s"]
    // 3: type: time period (weekly); judge whether current time is on event; returns ["str1:剩余时间/下次开始", "str2: d h:m:s"]; for weeklyEvent
    // 4: type: time period (monthly); for nightMoon
    // 0: blank for test (maybe)

    // index 1: dailyQuest, daily 0300; worldQuest, daily 0700(cOA, oppo) 1500 1900(oppo) 2300; weeklyThu, weekly Thu. 0700
    // index 2: weeklyThu, weekly Thu. 0700
    // index 3: weeklyEvents, weekly starts Thu 0700 | ends Thu 0400;
    // index 4: nightMoon, monthly starts first Sun. 0001 | ends next Sat. 2358; but I make it Sun.000000~Sat.235959 here, may cause tiny error

    var d = 0;
    var h = -1;
    var m = cur.toNextHour()[1];
    var s = cur.toNextHour()[2];
    
    switch (index) {
        case 1:
            if (node[0].length == undefined){
                h = (node[0] + 23 - cur.hour) % 24;
            }
            else {
                for (var i = 1; i < node.length; i++) {
                    if (cur.hour >= node[i - 1][0] && cur.hour < node[i][0]) {
                        h = node[i][0] - cur.hour - 1;
                        break;
                    }
                }
                if (h == -1){
                    h = (node[0][0] + 23 - cur.hour) % 24;
                }
            }
            h += cur.toNextHour()[0];
            break;

        case 2:
            break;
    }



    [h, m, s]=checkTime([h, m, s]);
    //alert(d+h+m);
    return d + "天 " + h + ":" + m + ":" + s;
}

function checkTime(arr) {
    // add front 0 for numbers less than 10
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            arr[i] = "0" + arr[i];
        }
    }
    return arr;
}

function goTop() {
    window.scrollBy(-30, -30);
    var t = setTimeout('goTop()', 20);
    if (document.documentElement.scrollTop + document.documentElement.scrollLeft < 1) {
        clearTimeout(t);
    }
}