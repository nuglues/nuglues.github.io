innerHtml("heartPowerOutput",""); // initial heart power calc's default result with ""

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
emissaryPool[1] = ["340装备","1000能量","特质装","200物资","2000金币"];
var emissaryQuest = new Array(40);
emissaryQuest = emissaryQuest.join("老任还没写,").split(",");
emissaryQuest.lenth = emissaryQuest.lenth - 1;
emissaryQuest.splice(38,0,emissaryPool[0][2],emissaryPool[0][3],emissaryPool[0][4],emissaryPool[0][5],emissaryPool[0][0],emissaryPool[0][1],emissaryPool[0][4],
    emissaryPool[0][3],emissaryPool[0][2],emissaryPool[0][0],emissaryPool[0][1],emissaryPool[0][5],emissaryPool[0][2],emissaryPool[0][4],
    emissaryPool[0][3],emissaryPool[0][0],emissaryPool[0][5],emissaryPool[0][1],emissaryPool[0][3],emissaryPool[0][2],emissaryPool[0][4],
    emissaryPool[0][1]);

var emissaryReward = new Array(40);
emissaryReward = emissaryReward.join("老任还没写,").split(","); // initialise array
emissaryReward.lenth = emissaryReward.lenth - 1; // 批量赋值 https://blog.csdn.net/jackwen110200/article/details/51669578
emissaryReward.splice(38,0,emissaryPool[1][0],emissaryPool[1][1],emissaryPool[1][0],emissaryPool[1][2],emissaryPool[1][3],emissaryPool[1][4],emissaryPool[1][2],
    emissaryPool[1][1],emissaryPool[1][2],emissaryPool[1][4],emissaryPool[1][1],emissaryPool[1][2],emissaryPool[1][0],emissaryPool[1][4],
    emissaryPool[1][1],emissaryPool[1][4],emissaryPool[1][0],emissaryPool[1][1],emissaryPool[1][1],emissaryPool[1][0],emissaryPool[1][1],
    emissaryPool[1][3]);

var worldBoss = [];
worldBoss[0] = ["斯托颂谷地","沃顿","提拉加德海峡","祖达萨","德鲁斯瓦","纳兹米尔"];
worldBoss[1] = ["战争使者耶纳基兹","食沙者克劳洛克","蔚索斯，飞翼台风","基阿拉克","冰雹构造体","提赞"];

var weeklyEventPool = ["争霸艾泽拉斯地下城","宠物对战","时空漫游：大地的裂变","竞技场练习赛","世界任务","时空漫游：熊猫人之谜","战场",
                    "争霸艾泽拉斯地下城","宠物对战","时空漫游：燃烧的远征","竞技场练习赛","世界任务","时空漫游：巫妖王之怒","战场"];

var warFrontlineDonation = []; // 炼金 铭文 锻造 珠宝 工程 制皮 裁缝 附魔 烹饪
warFrontlineDonation[0] = ["炼金"," 铭文","锻造","珠宝","工程","制皮","裁缝","附魔","烹饪"];
warFrontlineDonation[1] = [[20,3,60,15,3,2,1,3,60],
                                    [20,3,2,15,6,2,1,3,60]];
warFrontlineDonation[2] = [["海滨治疗药水","智力战争卷轴","镍铜矿石","全能蓝晶石","霜纹弹药","漩涡战鼓","战旗：自由精神","附魔戒指 - 全能之纹","肥厚腰肉"],
                                    ["海滨法力药水","耐力战争卷轴","镍铜硬化护蹄","跨界绿铱石","速烤燃爆装置","糙皮骑甲","战旗：迅猛集结","附魔戒指 - 爆击之纹","生烤鲶鱼"]];
var warFrontlineDonationNum = checkQuantity(warFrontlineDonation[1][1]);
var warFrontlineDonationGoods = warFrontlineDonation[2][1];

var heartPower = [];
heartPower[0] = 300;
for  (var i = 1; i < 9; i++){
    heartPower[i] = heartPower[i - 1] + 50;
}
for  (var i = 9; i < 14; i++){
    heartPower[i] = Math.floor(heartPower[i - 1] * 1.5);
}
heartPower[14] = 7992;
for  (var i = 15; i < 61; i++){
    heartPower[i] = Math.floor(heartPower[i - 1] * 1.3);
}

// LEG part
var legEmiPool = ["法罗迪斯宫廷","织梦者","高岭部族","瓦拉加尔","堕夜精灵","肯瑞托","守望者","抗魔联军","圣光军团","阿古斯防卫军"];
var legEmiQuest = new Array(45);
legEmiQuest = legEmiQuest.join("老任还没写,").split(",");
legEmiQuest.lenth = legEmiQuest.lenth - 1;
legEmiQuest.splice(43,0,legEmiPool[0],legEmiPool[6],legEmiPool[4],legEmiPool[3],legEmiPool[1],legEmiPool[0],legEmiPool[5],
    legEmiPool[8],legEmiPool[6],legEmiPool[3],legEmiPool[7],legEmiPool[0],legEmiPool[5],legEmiPool[6],legEmiPool[4],
    legEmiPool[3],legEmiPool[9]);

var legWorldBoss1 = [];
legWorldBoss1[0] = ["苏拉玛","苏拉玛","风暴峡湾","风暴峡湾","瓦尔莎拉","瓦尔莎拉","至高岭","至高岭","阿苏纳","阿苏纳","阿苏纳"];
legWorldBoss1[1] = ["魔王纳扎克","鬼母阿娜","尼索格","夺魂者","胡墨格里斯","沙索斯","浮骸","冷血的杜贡","卡拉米尔","凋零者吉姆","勒凡图斯"];

var legWorldBoss2 = [];
legWorldBoss2[0] = ["燃烧废土","燃烧废土","安托兰废土","主母芙努娜loca","索塔纳索尔loca","燃烧废土"];
legWorldBoss2[1] = ["深渊领主维尔姆斯","奥库拉鲁斯","妖女奥露拉黛儿","主母芙努娜","索塔纳索尔","审判官梅托"];

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
        seconds: loadTime.getSeconds(), // 0~59
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

    //document.getElementById("wQ-Norm").innerHTML = timeRemain.worldQuestNorm[0];
    innerHtml("wQ-Norm",timeRemain.worldQuestNorm[0]);
    innerHtml("wQ-COA-5H",timeRemain.worldQuestCOA[0]);
    innerHtml("wQ-Opp",timeRemain.worldQuestOpp[0]);
    innerHtml("daily-Quest",timeRemain.dailyQuest[0]);

    innerHtml("weekly-Thu",timeRemain.weeklyThu[0]);
    innerHtml("weekly-Events-State",timeRemain.weeklyEvent[0]);
    innerHtml("weekly-Events-Time",timeRemain.weeklyEvent[1]);

    innerHtml("night-Moon-State",timeRemain.nightMoon[0]);
    innerHtml("night-Moon-Time",timeRemain.nightMoon[1]);

    // For Information Board
    var deltaDay = {
        ver801: Math.floor((loadTime.getTime() - startDay.ver801.getTime()) / dayInMs)
    };

    var mythicAffixTurn = Math.floor(deltaDay.ver801 / 7) % 12; // from 0 to 11
    var mythicAffix = mythicAffixCalc(mythicAffixTurn);
    var mythicAffixNext = mythicAffixCalc(mythicAffixTurn + 1);

    innerHtml("cycleTip-mythAff-0",mythicAffix[0]);
    innerHtml("cycleTip-mythAff-1",mythicAffix[1]);
    innerHtml("cycleTip-mythAff-2",mythicAffix[2]);
    innerHtml("cycleTip-mythAff-3",mythicAffix[3]);

    innerHtml("cycleTip-mythAffNext-0",mythicAffixNext[0]);
    innerHtml("cycleTip-mythAffNext-1",mythicAffixNext[1]);
    innerHtml("cycleTip-mythAffNext-2",mythicAffixNext[2]);
    innerHtml("cycleTip-mythAffNext-3",mythicAffixNext[3]);

    // document.getElementById("cycleTip-emQue-0").innerHTML = emissaryQuest[deltaDay.ver801 % 6]; // today
    // document.getElementById("cycleTip-emQue-1").innerHTML = emissaryQuest[(deltaDay.ver801 - 1) % 6]; // yesterday
    // document.getElementById("cycleTip-emQue-2").innerHTML = emissaryQuest[(deltaDay.ver801 - 2) % 6]; // the day before yesterday
    innerHtml("cycleTip-emQue-0",emissaryQuest[deltaDay.ver801]);
    innerHtml("cycleTip-emQue-1",emissaryQuest[deltaDay.ver801 - 1]);
    innerHtml("cycleTip-emQue-2",emissaryQuest[deltaDay.ver801 - 2]);

    innerHtml("cycleTip-emRe-0",emissaryReward[deltaDay.ver801]);
    innerHtml("cycleTip-emRe-1",emissaryReward[deltaDay.ver801 - 1]);
    innerHtml("cycleTip-emRe-2",emissaryReward[deltaDay.ver801 - 2]);
    // document.getElementById("cycleTip-emQue-next").innerHTML = emissaryQuest[(deltaDay.ver801 + 1) % 6]; // tomorrow Stop predicting (maybe restart after I find the real cycle)

    var worldBossTurn = Math.floor(deltaDay.ver801 / 7) % 6; // from 0 to 5
    var worldBossTurnNext = Math.floor(deltaDay.ver801 / 7 + 1) % 6;
    innerHtml("cycleTip-worldBoss-Location",worldBoss[0][worldBossTurn]);
    innerHtml("cycleTip-worldBoss-Name",worldBoss[1][worldBossTurn]);
    innerHtml("cycleTip-worldBoss-Location-Next",worldBoss[0][worldBossTurnNext]);
    innerHtml("cycleTip-worldBoss-Name-Next",worldBoss[1][worldBossTurnNext]);

    var weeklyEventTurn = Math.floor(deltaDay.ver801 / 7 - 1) % 14; // weeklyEvent started one week later than world boss
    var weeklyEventTurnNext = Math.floor(deltaDay.ver801 / 7) % 14;
    innerHtml("cycleTip-weeklyEvent",weeklyEventPool[weeklyEventTurn]);
    innerHtml("cycleTip-weeklyEvent-Next",weeklyEventPool[weeklyEventTurnNext]);

    // For war frontline board
    innerHtml("war-Frontline-output",warFrontlineOutput(2, "联盟", new Date(2018,10,1,19,10),cur));

    // For goYa!
    if (cur.day == 4 && cur.hour >=7) {
        innerHtml("diBao","今天开低保！");
    }
    else{
        innerHtml("diBao","");
    }
    innerHtml("goYa-emExpire-time",timeRemain.worldQuestCOA[0]);
    innerHtml("goYa-emExpire-name",emissaryQuest[deltaDay.ver801 - 2]);
    innerHtml("goYa-weeklyEvent",checkExpire(timeRemain.weeklyEvent[1],timeRemain.weeklyEvent[0]," 周常活动即将结束"));
    innerHtml("goYa-weeklyThu",checkExpire(timeRemain.weeklyThu[0],"no need"," 快去打低保/世界BOSS"));
    innerHtml("goYa-nightMoon",checkExpire(timeRemain.nightMoon[1],timeRemain.nightMoon[0]," 暗月马戏团即将结束"));

    // For right sidebar
    innerHtml("rightSidebar-date",cur.year + "-" + checkTime(cur.month + 1) + "-" + checkTime(cur.date));
    innerHtml("rightSidebar-day",dayTrans(cur.day));
    innerHtml("rightSidebar-time",checkTime(cur.hour) + ":" + checkTime(cur.min) + ":" + checkTime(cur.seconds));

    innerHtml("rightSidebar-800Already","8. 0 已开 " + (deltaDay.ver801 + 23) + "天 第" + checkTime(Math.floor((deltaDay.ver801 + 23) / 7 +1)) + "周");
    innerHtml("rightSidebar-800RaidAlready","团本已开 " + deltaDay.ver801 + "天 第" + checkTime(Math.floor(deltaDay.ver801 / 7 + 1)) + "周");

    window.knowledgeLevel = Math.floor(deltaDay.ver801 / 7 + 2);
    innerHtml("rightSidebar-heartLevel",knowledgeLevel + "级");

    // For left div width
    document.documentElement.style.setProperty('--leftDivWidth', leftDivWidAndRightDivHeiCalc()[0]);
    document.documentElement.style.setProperty('--rightSidebarHeight', leftDivWidAndRightDivHeiCalc()[1]);
    document.getElementById("body-scrollWidth").innerHTML = document.body.scrollWidth;

    // For leg tip board

    innerHtml("legTip-emQue-0",legEmiQuest[deltaDay.ver801]);
    innerHtml("legTip-emQue-1",legEmiQuest[deltaDay.ver801 - 1]);
    innerHtml("legTip-emQue-2",legEmiQuest[deltaDay.ver801 - 2]);

    innerHtml("legTip-emQue-time-2",timeRemain.worldQuestCOA[0]);
    innerHtml("legTip-emQue-time-1","1天 "+ timeRemain.worldQuestCOA[0]);
    innerHtml("legTip-emQue-time-0","2天 "+ timeRemain.worldQuestCOA[0]);

    var legWorldBoss1Turn = Math.floor(deltaDay.ver801 / 7) % 11; // from 0 to 5
    var legWorldBoss1TurnNext = Math.floor(deltaDay.ver801 / 7 + 1) % 11;
    var legWorldBoss2Turn = Math.floor(deltaDay.ver801 / 7) % 6; // from 0 to 5
    var legWorldBoss2TurnNext = Math.floor(deltaDay.ver801 / 7 + 1) % 6;
    innerHtml("legTip-worldBoss1-Location",legWorldBoss1[0][legWorldBoss1Turn]);
    innerHtml("legTip-worldBoss1-Name",legWorldBoss1[1][legWorldBoss1Turn]);
    innerHtml("legTip-worldBoss2-Location",legWorldBoss2[0][legWorldBoss2Turn]);
    innerHtml("legTip-worldBoss2-Name",legWorldBoss2[1][legWorldBoss2Turn]);
    innerHtml("legTip-worldBoss1-Location-Next",legWorldBoss1[0][legWorldBoss1TurnNext]);
    innerHtml("legTip-worldBoss1-Name-Next",legWorldBoss1[1][legWorldBoss1TurnNext]);
    innerHtml("legTip-worldBoss2-Location-Next",legWorldBoss2[0][legWorldBoss2TurnNext]);
    innerHtml("legTip-worldBoss2-Name-Next",legWorldBoss2[1][legWorldBoss2TurnNext]);

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

function warFrontlineOutput(index, camp, startTime, cur){
    // index = 1:contributing; index = 2:attacking last for 7 days
    switch (index) {
        case 1:
            var outputStr = "<strong>" + camp + "捐献中</strong><br>";
            //outputStr += "捐献清单收集中……" + "<br>";

            for (var i = 0; i < 9; i++) {
                outputStr += "<br>" + warFrontlineDonation[0][i] + " - " + warFrontlineDonationNum[i] + warFrontlineDonationGoods[i];
            }
            break;
        case 2:
            var timeRemainInSec;
            if (cur.month == startTime.getMonth()){
                timeRemainInSec = 7 * dayInMs / 1000 -
                    ( ((cur.date * 24 + cur.hour) * 60 + cur.min) * 60 + cur.seconds - ((startTime.getDate() * 24 + startTime.getHours()) * 60 + startTime.getMinutes()) * 60 - startTime.getSeconds() );
            }
            else{
                timeRemainInSec = 7 * dayInMs / 1000 -
                    ( (( new Date(startTime.getFullYear(),startTime.getMonth(),startTime.getDate() + 1,startTime.getHours(),startTime.getMinutes(),startTime.getSeconds()).getDate() * 24 + startTime.getHours()) * 60 + startTime.getMinutes()) * 60 + startTime.getSeconds() - ((cur.date * 24 + cur.hour) * 60 + cur.min) * 60 - cur.seconds );
            }

            var timeRemainStr = Math.floor(timeRemainInSec / dayInMs * 1000) + "天 ";
            timeRemainInSec -= Math.floor(timeRemainInSec / dayInMs * 1000) * dayInMs / 1000;
            timeRemainStr += checkTime(Math.floor(timeRemainInSec / 3600)) + ":";
            timeRemainInSec -= Math.floor(timeRemainInSec / 3600) * 3600;
            timeRemainStr += checkTime(Math.floor(timeRemainInSec / 60)) + ":";
            timeRemainInSec -= Math.floor(timeRemainInSec / 60) * 60;
            timeRemainStr += checkTime(timeRemainInSec);
            var outputStr = "<strong>" + camp + "进攻中</strong><br>";
            outputStr += "剩余时间：" + timeRemainStr + "<br>";
            outputStr += "<br>" + oppoCamp(camp) + "的小伙伴快去打Boss鸭";
            break;
    }
    return outputStr;
}

function heartPowerCalc() {
    var curHeartLevel = document.getElementById("heartLevelInput");
    var curHeartPower = document.getElementById("heartPowerInput");
    var aimLevel = document.getElementById("aimLevelInput");
    curHeartLevel = Number(curHeartLevel.value);
    curHeartPower = Number(curHeartPower.value);
    aimLevel = Number(aimLevel.value);

    var output;
    if (isLegal_heartPowerCalc(curHeartLevel, curHeartPower, aimLevel)) {
        var curPList = [];
        var needP = 0;
        for (var i = curHeartLevel; i < aimLevel; i++) {
            // heartPower[0] is already been placed by 300 as initial number, so the number of level is exactly the same with order, no need to - 1
            if (heartPower[i] <= 1000) {
                curPList[i] = heartPower[i];
            }
            else {
                curPList[i] = heartPower[i];
                for (var j = 0; j < knowledgeLevel; j++) {
                    curPList[i] = Math.floor(curPList[i] / 1.3);
                    if (curPList[i] <= 1000){
                        curPList[i] = 1000;
                        break;
                    }
                }
            }
            needP += curPList[i];
        }
        output = "还需 " + (needP - curHeartPower) + " 能量";
    }
    else{
        output = "无效输入";
    }
    innerHtml("heartPowerOutput", output);
}

function isLegal_heartPowerCalc(curL, curP, aimL) {
    if (curL >= aimL){return 0;}
    if (Math.floor(curL) < curL || Math.floor(curP) < curP || Math.floor(aimL) < aimL){return 0;}
    if (curL < 1 || curL > 59 || curP < 0 || aimL > 60){return 0;}
    if (curP > 1000) {
        for (var i = 0; i < knowledgeLevel; i++) {
            curP = Math.floor(curP / 1.3);
            if (curP <= 1000){
                curP = 1000;
                break;
            }
        }
    }
    if ((heartPower[curL] - curP) / heartPower[curL] < -0.01){return 0;}
    return 1;
}

function oppoCamp(campStr){
    if (campStr == "联盟"){
        return "部落";
    }
    else if(campStr == "部落"){
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

function checkTime(arr) {
    // add front 0 for numbers less than 10
    if (typeof(arr) == "number"){
        if (arr < 10){
            arr = "0" + arr;
        }
    }
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

function innerHtml(id,str) {
    document.getElementById(id).innerHTML = str;
}

rightSidebarWidth = "200px";
document.getElementById("right-sidebarWidth").innerHTML = rightSidebarWidth;
document.documentElement.style.setProperty('--rightSidebarWidth', rightSidebarWidth);