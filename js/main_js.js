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

var dayInMs = new Date(1970, 0, 2, 8).getTime(); // Jan. is 0 !!! 8 is for GMT +8:00
var startDay = {
    ver801: new Date(2018,8,6,7), // new Date("YYYY,M,D,8:00") does not fit safari
    ver810: new Date("2018,11,29,7:00")
};

var mythAffPool = [];
mythAffPool[0] = ["强韧", "残暴"];
mythAffPool[1] = ["血池", "崩裂", "繁盛", "暴怒", "激励"];
mythAffPool[2] = ["死疽", "无常", "震荡", "火山", "重伤", "易爆"];
mythAffPool[3] = ["共生", "收割"];

var mythAffOrder = {
    ver801: [[0, 1],
        [0, 1, 2, 3, 4, 2, 0, 4, 1, 3, 2, 4],
        [0, 1, 2, 0, 1, 3, 4, 5, 2, 3, 5, 4],
        [0]]  /*
    强韧+血池+死疽
    残暴+崩裂+无常
    强韧+繁盛+震荡
    残暴+暴怒+死疽
    强韧+激励+无常
    残暴+繁盛+火山
    强韧+血池+重伤
    残暴+激励+易爆
    强韧+崩裂+震荡
    残暴+暴怒+火山
    强韧+繁盛+易爆
    残暴+激励+重伤 */
};

var emissaryPool = [];
emissaryPool[0] = ["塔兰吉远征队","始祖龟求知者","沃顿奈","艾泽拉斯的勇士","部落战事","赞达拉帝国"];
emissaryPool[1] = ["340装备","600能量","340装备","特质装","200物资","700金币"];
// var emissaryQuest = ["塔兰吉远征队","始祖龟求知者","沃顿奈","艾泽拉斯的勇士","部落战事","赞达拉帝国"];
// the cycle maybe incorrect
var emissaryQuest = new Array(40);
emissaryQuest = emissaryQuest.join("老任还没写,").split(",");
emissaryQuest.lenth = emissaryQuest.lenth - 1;
emissaryQuest.splice(38,0,emissaryPool[0][2],emissaryPool[0][3],emissaryPool[0][4],emissaryPool[0][5],emissaryPool[0][0],emissaryPool[0][1],emissaryPool[0][4],
    emissaryPool[0][3],emissaryPool[0][2],emissaryPool[0][0],emissaryPool[0][1]);

var emissaryReward = new Array(40);
emissaryReward = emissaryReward.join("老任还没写,").split(","); // initialise array
emissaryReward.lenth = emissaryReward.lenth - 1; // 批量赋值 https://blog.csdn.net/jackwen110200/article/details/51669578
emissaryReward.splice(38,0,emissaryPool[1][0],emissaryPool[1][1],emissaryPool[1][2],emissaryPool[1][3],emissaryPool[1][4],emissaryPool[1][5],emissaryPool[1][3],
    emissaryPool[1][1],emissaryPool[1][3],emissaryPool[1][5],emissaryPool[1][1]);

var worldBoss = [];
worldBoss[0] = ["斯托颂谷地","沃顿","提拉加德海峡","祖达萨","德鲁斯瓦","纳兹米尔"];
worldBoss[1] = ["战争使者耶纳基兹","食沙者克劳洛克","蔚索斯，飞翼台风","基阿拉克","冰雹构造体","提赞"];

var weeklyEvent = [];
weeklyEvent[0] = ["时光漫游：熊猫人之谜"];

var warFrontlineDonation = []; // 炼金 铭文 锻造 珠宝 工程 制皮 裁缝 附魔 烹饪
warFrontlineDonation[0] = [ [20,3,60,15,3,2,1,3,60] ];
warFrontlineDonation[1] = [ ["海滨治疗药水","智力战争卷轴","镍铜矿石","全能蓝晶石","霜纹弹药","漩涡战鼓","战旗：自由精神","附魔戒指 - 全能之纹","肥厚腰肉"] ];
warFrontlineDonationNum = checkQuantity(warFrontlineDonation[0][0]);
warFrontlineDonationGoods = warFrontlineDonation[1][0];
/*document.getElementById("war-Frontline-Donation").innerHTML =
    "炼金 - " + warFrontlineDonation[0][0][0] + warFrontlineDonation[1][0][0] +"<br>" +
    "铭文 - " + warFrontlineDonation[0][0][1] + warFrontlineDonation[1][0][1] +"<br>" +
    "锻造 - " + warFrontlineDonation[0][0][2] + warFrontlineDonation[1][0][2] +"<br>" +
    "珠宝 - " + warFrontlineDonation[0][0][3] + warFrontlineDonation[1][0][3] +"<br>" +
    "工程 - " + warFrontlineDonation[0][0][4] + warFrontlineDonation[1][0][4] +"<br>" +
    "制皮 - " + warFrontlineDonation[0][0][5] + warFrontlineDonation[1][0][5] +"<br>" +
    "裁缝 - " + warFrontlineDonation[0][0][6] + warFrontlineDonation[1][0][6] +"<br>" +
    "附魔 - " + warFrontlineDonation[0][0][7] + warFrontlineDonation[1][0][7] +"<br>" +
    "烹饪 - " + warFrontlineDonation[0][0][8] + warFrontlineDonation[1][0][8];
*/

function mainLoop(){
    var loadTime = new Date(); // get current time (full information)

    // For Time Countdown Board
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

    var timeRemain = {
        worldQuestNorm: timeCountdown(cur,[timeNode[3],timeNode[4],timeNode[5],timeNode[6]],1),
        worldQuestCOA: timeCountdown(cur,timeNode[3],1),
        worldQuestOpp: timeCountdown(cur,[timeNode[3],timeNode[5]],1),
        dailyQuest: timeCountdown(cur,timeNode[2],1),

        weeklyThu: timeCountdown(cur,timeNode[3],2),
        weeklyEvent: timeCountdown(cur,[timeNode[7],timeNode[3]],3),

        nightMoon: timeCountdown(cur,timeNode[0],4)
    };

    document.getElementById("wQ-Norm").innerHTML = timeRemain.worldQuestNorm[0];
    document.getElementById("wQ-COA-5H").innerHTML = timeRemain.worldQuestCOA[0];
    document.getElementById("wQ-Opp").innerHTML = timeRemain.worldQuestOpp[0];
    document.getElementById("daily-Quest").innerHTML = timeRemain.dailyQuest[0];

    document.getElementById("weekly-Thu").innerHTML = timeRemain.weeklyThu[0];
    document.getElementById("weekly-Events-State").innerHTML = timeRemain.weeklyEvent[0];
    document.getElementById("weekly-Events-Time").innerHTML = timeRemain.weeklyEvent[1];

    document.getElementById("night-Moon-State").innerHTML = timeRemain.nightMoon[0];
    document.getElementById("night-Moon-Time").innerHTML = timeRemain.nightMoon[1];

    // For Information Board
    var deltaDay = {
        ver801: Math.floor((loadTime.getTime() - startDay.ver801.getTime()) / dayInMs)
    };

    var mythicAffixTurn = Math.floor(deltaDay.ver801 / 7) % 12; // from 0 to 11
    var mythicAffix = mythicAffixCalc(mythicAffixTurn);
    var mythicAffixNext = mythicAffixCalc(mythicAffixTurn + 1);

    document.getElementById("cycleTip-mythAff-0").innerHTML = mythicAffix[0];
    document.getElementById("cycleTip-mythAff-1").innerHTML = mythicAffix[1];
    document.getElementById("cycleTip-mythAff-2").innerHTML = mythicAffix[2];
    document.getElementById("cycleTip-mythAff-3").innerHTML = mythicAffix[3];

    document.getElementById("cycleTip-mythAffNext-0").innerHTML = mythicAffixNext[0];
    document.getElementById("cycleTip-mythAffNext-1").innerHTML = mythicAffixNext[1];
    document.getElementById("cycleTip-mythAffNext-2").innerHTML = mythicAffixNext[2];
    document.getElementById("cycleTip-mythAffNext-3").innerHTML = mythicAffixNext[3];

    // document.getElementById("cycleTip-emQue-0").innerHTML = emissaryQuest[deltaDay.ver801 % 6]; // today
    // document.getElementById("cycleTip-emQue-1").innerHTML = emissaryQuest[(deltaDay.ver801 - 1) % 6]; // yesterday
    // document.getElementById("cycleTip-emQue-2").innerHTML = emissaryQuest[(deltaDay.ver801 - 2) % 6]; // the day before yesterday
    document.getElementById("cycleTip-emQue-0").innerHTML = emissaryQuest[deltaDay.ver801];
    document.getElementById("cycleTip-emQue-1").innerHTML = emissaryQuest[deltaDay.ver801 - 1];
    document.getElementById("cycleTip-emQue-2").innerHTML = emissaryQuest[deltaDay.ver801 - 2];

    document.getElementById("cycleTip-emRe-0").innerHTML = emissaryReward[deltaDay.ver801];
    document.getElementById("cycleTip-emRe-1").innerHTML = emissaryReward[deltaDay.ver801 - 1];
    document.getElementById("cycleTip-emRe-2").innerHTML = emissaryReward[deltaDay.ver801 - 2];
    // document.getElementById("cycleTip-emQue-next").innerHTML = emissaryQuest[(deltaDay.ver801 + 1) % 6]; // tomorrow Stop predicting (maybe restart after I find the real cycle)

    var worldBossTurn = Math.floor(deltaDay.ver801 / 7) % 6; // from 0 to 5
    document.getElementById("cycleTip-worldBoss-Location").innerHTML = worldBoss[0][worldBossTurn];
    document.getElementById("cycleTip-worldBoss-Name").innerHTML = worldBoss[1][worldBossTurn];

    document.getElementById("cycleTip-weeklyEvent").innerHTML = weeklyEvent[0];

    // For goYa!
    if (cur.day == 4 && cur.hour >=7) {
        document.getElementById("diBao").innerHTML = "今天开低保！";
    }
    else{
        document.getElementById("diBao").innerHTML = "";
    }
    document.getElementById("goYa-emExpire-time").innerHTML = timeRemain.worldQuestCOA[0];
    document.getElementById("goYa-emExpire-name").innerHTML = emissaryQuest[deltaDay.ver801 - 2];
    document.getElementById("goYa-weeklyEvent").innerHTML = checkExpire(timeRemain.weeklyEvent[1],timeRemain.weeklyEvent[0]," 周常活动即将结束");
    document.getElementById("goYa-weeklyThu").innerHTML = checkExpire(timeRemain.weeklyThu[0],"no need"," 快去打低保/世界BOSS");
    document.getElementById("goYa-nightMoon").innerHTML = checkExpire(timeRemain.nightMoon[1],timeRemain.nightMoon[0]," 暗月马戏团即将结束");

    // For left div width
    document.documentElement.style.setProperty('--leftDivWidth', leftDivWidAndRightDivHeiCalc()[0]);
    document.documentElement.style.setProperty('--rightSidebarHeight', leftDivWidAndRightDivHeiCalc()[1]);
    document.getElementById("body-scrollWidth").innerHTML = document.body.scrollWidth;

    setTimeout('mainLoop()', 200);
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
    var eventState = -1;
    var addDayTest = 0; // every 24 hrs is a new day!

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
            break;

        case 2:
            h = (node[0] + 23 - cur.hour) % 24;
            d = (10 - cur.day) % 7 + (node[0] + 23 - cur.hour - h) / 24;
            addDayTest = 1;
            break;

        case 3:
            if (cur.day == 4 && cur.hour >= node[0][0] && cur.hour < node[0][1]) {
                h = node[0] - cur.hour - 1;
                eventState = "下次开始";
            }
            else {
                h = (node[0][0] + 23 - cur.hour) % 24;
                d = (10 - cur.day) % 7 + (node[0][0] + 23 - cur.hour - h) / 24;
                addDayTest = 1;
                eventState = "剩余时间";
            }
            break;

        case 4:
            var startDate = (7 - cur.day + cur.date) % 7;
            if (startDate == 0) {
                startDate = 7;
            }
            var endDate = startDate + 7;

            if (cur.date >= startDate && cur.date < endDate) {
                var d = endDate - cur.date - 1;
                var h = (23 - cur.hour) % 24;
                addDayTest = 1;
                eventState = "剩余时间";
            }
            else if (cur.date < startDate) {
                var d = startDate - cur.date - 1;
                var h = (23 - cur.hour) % 24;
                addDayTest = 1;
                eventState = "下次开始";
            }
            else {
                var nextMon1st = new Date(cur.year, cur.month + 1, 1);
                var curMonlast = new Date(cur.year, cur.month + 1, 0);
                var nextStartDate = (8 - nextMon1st.getDay()) % 7;
                if (nextStartDate == 0) {
                    nextStartDate = 7;
                }
                var d = curMonlast.getDate() - cur.date + nextStartDate - 1;
                var h = (23 - cur.hour) % 24;
                addDayTest = 1;
                eventState = "下次开始";
            }
            break;
    }

    h += cur.toNextHour()[0];
    if (addDayTest){
        if (h == 24) {
            d += 1;
            h = 0;
        }
    }
    [h, m, s]=checkTime([h, m, s]);

    if (index < 2){
        return [ h + ":" + m + ":" + s];
    }
    else if(index < 3){
        return [d + "天 " +h + ":" + m + ":" + s];
    }
    else{
        return [eventState, d + "天 " + h + ":" + m + ":" + s];
    }
}

function mythicAffixCalc(turn) {
    return [ mythAffPool[0][mythAffOrder.ver801[0][turn % 2]],
        mythAffPool[1][mythAffOrder.ver801[1][turn % 12]],
        mythAffPool[2][mythAffOrder.ver801[2][turn % 12]],
        mythAffPool[3][mythAffOrder.ver801[3][0]] ];
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

function checkQuantity(arr) {
    // add front space for numbers less than 10, then add back space
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            arr[i] = "&nbsp;&nbsp;" + arr[i] + "&nbsp;";
        }
        else{
            arr[i] = arr[i] + "&nbsp;";
        }
    }
    return arr;
}

function checkExpire(timeStr,state,str) {
    var d = timeStr.slice(0,1);
    if (d == "0" && state != "下次开始") {
        // use != "下次开始" because weekly-Thu does not have state
        return timeStr.slice(3) + str  + "<br>";
    }
    else{
        return "";
    }
}

function goTop() {
    window.scrollBy(-30, -30);
    var t = setTimeout('goTop()', 20);
    if (document.documentElement.scrollTop + document.documentElement.scrollLeft < 1) {
        clearTimeout(t);
    }
}

function leftDivWidAndRightDivHeiCalc() {
    return [document.body.scrollWidth - 240 + "px", window.innerHeight - 200 + "px"] // padding owns 10 + 10 px and 10 + 10 px
}

rightSidebarWidth = "200px";
document.getElementById("right-sidebarWidth").innerHTML = rightSidebarWidth;
document.documentElement.style.setProperty('--rightSidebarWidth', rightSidebarWidth);