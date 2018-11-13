// var timeNode = [];
// timeNode[0] = [0, 1]; // 00:01 NightMoon starts (monthly, first Sunday)
// timeNode[1] = [23, 59]; // 23:59 NightMoon ends (monthly, the Saturday after first Sunday)
// timeNode[2] = [3, 0]; // daily quest (daily)
// timeNode[3] = [7, 0]; // weekly events starts (weekly, Thursday)
//                       // raid CD; Mythic(+) CD/box (weekly, Thursday)
//                       // world quest 1; cOA (Champions of Azeroth), opposite (daily)
//                       // 5H (daily)
// timeNode[4] = [15, 0]; // world quest 2 (daily)
// timeNode[5] = [19, 0]; // world quest 3; opposite (daily)
// timeNode[6] = [23, 0]; // world quest 4 (daily)
// timeNode[7] = [4, 0]; // weekly events ends (weekly, Thursday)
// var dayInMs = new Date(1970, 0, 2, 8).getTime();
// Jan. is 0 !!! 8 is for GMT +8:00

/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   initial settings _START_   ********************************/

const secInMs = 1000;
const minInMs = secInMs * 60;
const hrInMs = minInMs * 60;
const dayInMs = hrInMs * 24;

let curr = new Date();
let currT = curr.getTime();

function VersionDate(dateObj) {
    this.date = dateObj;
}
VersionDate.prototype.getDays = function () {
    return Math.floor((currT - this.date.getTime()) / dayInMs) + 1; // The XX days | 第XX天 已过(XX-1)天
};

function RegularCycleEvent(subCycleLength, startTime, periodTimeList, periodNameList) {
    this.subLen = subCycleLength;
    this.startT = startTime;
    this.timeLi = periodTimeList;
    this.nameLi = periodNameList;
}

function IrregularCycleEvent(periodTimeList, periodNameList) {
    this.timeLi = periodTimeList;
    this.nameLi = periodNameList;
}

const ver800Date = new VersionDate(new Date(2018,7,14,7)); // new Date("YYYY,M,D,8:00") does not fit safari
const ver801Date = new VersionDate(new Date(2018,8,6,7));
const theVer800Days = ver800Date.getDays();
const theVer801Days = ver801Date.getDays();

let knowledgeLevel = 0;
let heartPower = [];
heartPower[0] = 300;
for  (let i = 1; i < 9; i++){
    heartPower[i] = heartPower[i - 1] + 50;
}
for  (let i = 9; i < 14; i++){
    heartPower[i] = Math.floor(heartPower[i - 1] * 1.5);
}
heartPower[14] = 7992;
for  (let i = 15; i < 61; i++){
    heartPower[i] = Math.floor(heartPower[i - 1] * 1.3);
}
innerHtml("heartPowerOutput",""); // initial heart power calc's default result with ""

/********************************   initial settings _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/



/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   manual inputs _START_   ********************************/

const warFrontlineDonation = []; // 炼金 铭文 锻造 珠宝 工程 制皮 裁缝 附魔 烹饪
warFrontlineDonation[0] = ["炼金"," 铭文","锻造","珠宝","工程","制皮","裁缝","附魔","烹饪"];
warFrontlineDonation[1] =
    [[20,3,60,15,3,2,1,3,60],
    [20,3,2,15,6,2,1,3,60],
    [20,3,60,15,2,2,1,3,60]];
warFrontlineDonation[2] =
    [["海滨治疗药水","智力战争卷轴","镍铜矿石","全能蓝晶石","霜纹弹药","漩涡战鼓","战旗：自由精神","附魔戒指 - 全能之纹","肥厚腰肉"],
    ["海滨法力药水","耐力战争卷轴","镍铜硬化护蹄","跨界绿铱石","速烤燃爆装置","糙皮骑甲","战旗：迅猛集结","附魔戒指 - 爆击之纹","生烤鲶鱼"],
    ["海滨法力药水","战吼战争卷轴","镍铜矿石","全能蓝晶石","燃炎弹药","旋涡战鼓","战旗：方阵防御","附魔武器 - 坚韧远航","无尽之海鲶鱼"]];
const warFrontlineDonationNum = checkQuantity(warFrontlineDonation[1][2]);
const warFrontlineDonationGoods = warFrontlineDonation[2][2];

const daily0700_RCE = new RegularCycleEvent(
    dayInMs,
    new Date(2018,7,14,7).getTime(),
    [dayInMs],
    []);
// set daily0700_RCE name list _START_
daily0700_RCE.nameLi =
    [["下一波艾酱任务 | 大使任务 | 5H更新"],
        new Array(theVer800Days + 3).fill("老任还没写"),
        new Array(theVer800Days + 3).fill("老任还没写"),
        new Array(theVer800Days + 3).fill("老任还没写")];

const BFAEmissaryPool = [];
BFAEmissaryPool[0] = ["塔兰吉远征队","始祖龟求知者","沃顿奈","艾泽拉斯的勇士","部落战事","赞达拉帝国"];
//                          0               1           2           3               4           5
BFAEmissaryPool[1] = ["340装备","1000能量","特质装","200物资","2000金币"];
//                      0           1           2       3           4

const BFAEmissRewrite = [];
BFAEmissRewrite[0] =
    [BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][4],BFAEmissaryPool[0][5],BFAEmissaryPool[0][0],BFAEmissaryPool[0][1],BFAEmissaryPool[0][4],
        BFAEmissaryPool[0][3],BFAEmissaryPool[0][2],BFAEmissaryPool[0][0],BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][2],BFAEmissaryPool[0][4],
        BFAEmissaryPool[0][3],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],BFAEmissaryPool[0][1],BFAEmissaryPool[0][3],BFAEmissaryPool[0][2],BFAEmissaryPool[0][4],
        BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][0],BFAEmissaryPool[0][4],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][0],
        BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][2]];
BFAEmissRewrite[1] =
    [BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],BFAEmissaryPool[1][0],BFAEmissaryPool[1][2],BFAEmissaryPool[1][3],BFAEmissaryPool[1][4],BFAEmissaryPool[1][2],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][4],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][0],BFAEmissaryPool[1][4],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][4],BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],BFAEmissaryPool[1][1],BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],
        BFAEmissaryPool[1][3],BFAEmissaryPool[1][0],BFAEmissaryPool[1][2],BFAEmissaryPool[1][2],BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][3],BFAEmissaryPool[1][2]];

const LEGEmissaryPool = ["法罗迪斯宫廷","织梦者","高岭诸族","瓦拉加尔","堕夜精灵","肯瑞托","守望者","抗魔联军","圣光军团","阿古斯防卫军"];
//                              0           1       2           3           4           5       6       7           8           9
const LEGEmissRewrite =
    ["","","","","",LEGEmissaryPool[0],LEGEmissaryPool[6],
        LEGEmissaryPool[4],LEGEmissaryPool[3],LEGEmissaryPool[1],LEGEmissaryPool[0],LEGEmissaryPool[5],LEGEmissaryPool[8],LEGEmissaryPool[6],
        LEGEmissaryPool[3],LEGEmissaryPool[7],LEGEmissaryPool[0],LEGEmissaryPool[5],LEGEmissaryPool[6],LEGEmissaryPool[4],LEGEmissaryPool[3],
        LEGEmissaryPool[9],LEGEmissaryPool[5],LEGEmissaryPool[1],LEGEmissaryPool[2],LEGEmissaryPool[4],LEGEmissaryPool[3],LEGEmissaryPool[1],
        LEGEmissaryPool[7],LEGEmissaryPool[0],LEGEmissaryPool[6]];

const unRecordDays = 61;
for (let i = 0; i < BFAEmissRewrite[0].length; i++) {
    daily0700_RCE.nameLi[1][i + unRecordDays] = BFAEmissRewrite[0][i];
    daily0700_RCE.nameLi[2][i + unRecordDays] = BFAEmissRewrite[1][i];
    daily0700_RCE.nameLi[3][i + unRecordDays] = LEGEmissRewrite[i];
}
// set daily0700_RCE name list _END_

/********************************   manual inputs _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/



/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   set other data (cycle events) _START_   ********************************/

const worldQuestNorm_RCE = new RegularCycleEvent(
    dayInMs,
    new Date(2018,7,14,7).getTime(),
    [hrInMs * 8, hrInMs * 4, hrInMs * 4, hrInMs * 8],
    [new Array(4).fill("下一波世界任务")]);

const worldQuestOppo_RCE = new RegularCycleEvent(
    dayInMs,
    new Date(2018,7,14,7).getTime(),
    [hrInMs * 12, hrInMs * 12],
    [new Array(2).fill("下一波对面地图世界任务")]);


const dailyQuest_RCE = new RegularCycleEvent(
    dayInMs,
    new Date(2018,7,14,3).getTime(),
    [dayInMs],
    [["下一次日常刷新"]]);

const weeklyThu0700_RCE = new RegularCycleEvent(
    dayInMs * 7,
    new Date(2018,8,6,7).getTime(),
    [dayInMs * 7],
    []);

const weeklyEvent_RCE = new RegularCycleEvent(
    dayInMs * 7,
    new Date(2018,8,13,7).getTime(), // weeklyEvent started one week later than world boss
    [dayInMs * 7 - hrInMs * 3, hrInMs * 3],
    []);

const nightMoon_IrCE = new IrregularCycleEvent(
    [new Date(2018,10,4,0,1).getTime(),new Date(2018,10,10,23,59).getTime(),
        new Date(2018,11,2,0,1).getTime(),new Date(2018,11,8,23,59).getTime()],

    ["暗月马戏团下次开始","暗月马戏团剩余时间",
        "暗月马戏团下次开始","暗月马戏团剩余时间"]
);

// set weeklyEvent_RCE name list _START_
const weeklyEventPool = ["争霸艾泽拉斯地下城","尚未开始","宠物对战","尚未开始","时空漫游：大地的裂变","尚未开始","竞技场练习赛","尚未开始","世界任务","尚未开始","时空漫游：熊猫人之谜","尚未开始","战场","尚未开始",
    "争霸艾泽拉斯地下城","尚未开始","宠物对战","尚未开始","时空漫游：燃烧的远征","尚未开始","竞技场练习赛","尚未开始","世界任务","尚未开始","时空漫游：巫妖王之怒","尚未开始","战场","尚未开始"];

weeklyEvent_RCE.nameLi =
    [["周常活动剩余时间","周常活动下次开始"],
        weeklyEventPool];
// set weeklyEvent_RCE name list _END_

// set weeklyThu0700_RCE name list _START_
const mythAffixPool = [];
mythAffixPool[0] = ["强韧", "残暴"];
mythAffixPool[1] = ["血池", "崩裂", "繁盛", "暴怒", "激励"];
mythAffixPool[2] = ["死疽", "无常", "震荡", "火山", "重伤", "易爆"];
mythAffixPool[3] = ["共生", "收割"];

const mythAffixOrder = {
    ver801: [
        mythAffixPool[0][0] + " + " + mythAffixPool[1][0] + " + " + mythAffixPool[2][0] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][1] + " + " + mythAffixPool[1][1] + " + " + mythAffixPool[2][1] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][0] + " + " + mythAffixPool[1][2] + " + " + mythAffixPool[2][2] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][1] + " + " + mythAffixPool[1][3] + " + " + mythAffixPool[2][0] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][0] + " + " + mythAffixPool[1][4] + " + " + mythAffixPool[2][1] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][1] + " + " + mythAffixPool[1][2] + " + " + mythAffixPool[2][3] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][0] + " + " + mythAffixPool[1][0] + " + " + mythAffixPool[2][4] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][1] + " + " + mythAffixPool[1][4] + " + " + mythAffixPool[2][5] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][0] + " + " + mythAffixPool[1][1] + " + " + mythAffixPool[2][2] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][1] + " + " + mythAffixPool[1][3] + " + " + mythAffixPool[2][3] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][0] + " + " + mythAffixPool[1][2] + " + " + mythAffixPool[2][5] + " + " + mythAffixPool[3][0],
        mythAffixPool[0][0] + " + " + mythAffixPool[1][4] + " + " + mythAffixPool[2][4] + " + " + mythAffixPool[3][0]]
    /*
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

const BFAWorldBossPool = [];
BFAWorldBossPool[0] = ["斯托颂谷地","沃顿","提拉加德海峡","祖达萨","德鲁斯瓦","纳兹米尔"];
BFAWorldBossPool[1] = ["战争使者耶纳基兹","食沙者克劳洛克","蔚索斯，飞翼台风","基阿拉克","冰雹构造体","提赞"];

const LEGWorldBoss1Pool = [];
LEGWorldBoss1Pool[0] = ["苏拉玛","苏拉玛","风暴峡湾","风暴峡湾","瓦尔莎拉","瓦尔莎拉","至高岭","至高岭","阿苏纳","阿苏纳","阿苏纳"];
LEGWorldBoss1Pool[1] = ["魔王纳扎克","鬼母阿娜","尼索格","夺魂者","胡墨格里斯","沙索斯","浮骸","冷血的杜贡","卡拉米尔","凋零者吉姆","勒凡图斯"];

const LEGWorldBoss2Pool = [];
LEGWorldBoss2Pool[0] = ["燃烧废土","燃烧废土","安托兰废土","克罗库恩","索塔纳索尔loca","燃烧废土"];
LEGWorldBoss2Pool[1] = ["深渊领主维尔姆斯","奥库拉鲁斯","妖女奥露拉黛儿","主母芙努娜","索塔纳索尔","审判官梅托"];

weeklyThu0700_RCE.nameLi =
    [["下一次周CD更新 | 低保"],
        mythAffixOrder.ver801,
        BFAWorldBossPool[0],
        BFAWorldBossPool[1],
        LEGWorldBoss1Pool[0],
        LEGWorldBoss1Pool[1],
        LEGWorldBoss2Pool[0],
        LEGWorldBoss2Pool[1]];
// set weeklyThu0700_RCE name list _END_

/********************************   set other data _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/



/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   main calculate functions _START_   ********************************/

function warFrontlineOutput(index, camp, startTime){
    // index = 1:contributing; index = 2:attack last for 7 days
    let outputStr = "";
    switch (index) {
        case 1:
            outputStr += "<strong>" + camp + "捐献中</strong><br>";
            //outputStr += "<br>捐献清单收集中……" + "<br>";

            for (let i = 0; i < 9; i++) {
                outputStr += "<br>" + warFrontlineDonation[0][i] + " - " + warFrontlineDonationNum[i] + warFrontlineDonationGoods[i];
            }
            break;
        case 2:
            const timeRemain = 7 * dayInMs - (currT - startTime.getTime());
            const timeRemainStr = msTrans(timeRemain);
            outputStr += "<strong>" + camp + "进攻中</strong><br>";
            outputStr += "<br>剩余时间：" + timeRemainStr + "<br>";
            outputStr += "<br>" + oppoCamp(camp) + "的小伙伴快去打Boss鸭";
            break;
    }
    return outputStr;
}

function isLegal_heartPowerCalc(curL, curP, aimL) {
    if (curL >= aimL){return 0;}
    if (Math.floor(curL) < curL || Math.floor(curP) < curP || Math.floor(aimL) < aimL){return 0;}
    if (curL < 1 || curL > 59 || curP < 0 || aimL > 60){return 0;}
    if (curP > 1000) {
        for (let i = 0; i < knowledgeLevel; i++) {
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

function heartPowerCalc() {
    let curHeartLevel = document.getElementById("heartLevelInput");
    let curHeartPower = document.getElementById("heartPowerInput");
    let aimLevel = document.getElementById("aimLevelInput");
    curHeartLevel = Number(curHeartLevel.value);
    curHeartPower = Number(curHeartPower.value);
    aimLevel = Number(aimLevel.value);

    let output;
    if (isLegal_heartPowerCalc(curHeartLevel, curHeartPower, aimLevel)) {
        let curPList = [];
        let needP = 0;
        for (let i = curHeartLevel; i < aimLevel; i++) {
            // heartPower[0] is already been placed by 300 as initial number, so the number of level is exactly the same with order, no need to - 1
            if (heartPower[i] <= 1000) {
                curPList[i] = heartPower[i];
            }
            else {
                curPList[i] = heartPower[i];
                for (let j = 0; j < knowledgeLevel; j++) {
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

function countDownCalc(eventObj, subseq) {
    const err_input = ["ERROR INPUT _CDCalc"];

    // regular cycle event PART
    if (eventObj.constructor === RegularCycleEvent){
        let subLen = eventObj.subLen;
        let startT = eventObj.startT;
        let timeLi = eventObj.timeLi;
        let nameLi = eventObj.nameLi;

        // error input check _START_
        if (
            nameLi[0].length % timeLi.length !== 0
            // || XXXXXXXXXXXXXX
        ) {
             return err_input;
        }
        // error input check _END_

        // calculate part _START_
        else {
            if (currT < startT) {
                return ["即将到来", msTrans(startT - currT)];
            }
            else {
                if (subseq === undefined) {
                    subseq =0; // default as 0
                }

                let nameOutput = [];
                let leftMs;
                let deltaMsInSub;
                let k;
                for (let i = 0; i < nameLi.length; i++) {
                    deltaMsInSub = (currT - startT + subseq * subLen) % (subLen * nameLi[i].length / timeLi.length);
                    let j = Math.floor(deltaMsInSub / subLen);
                    deltaMsInSub = deltaMsInSub % subLen;
                    k = 0;
                    while (deltaMsInSub - timeLi[k] > 0) {
                        deltaMsInSub -= timeLi[k];
                        k += 1;
                    }
                    nameOutput[i] = nameLi[i][j * timeLi.length + k];
                }
                leftMs = timeLi[k] - deltaMsInSub;
                return [nameOutput, msTrans(leftMs)];
            }
        }
        // calculate part _END_
    }

    // irregular cycle event PART
    else if (eventObj.constructor === IrregularCycleEvent) {
        let timeLi = eventObj.timeLi;
        let nameLi = eventObj.nameLi;

        // error input check _START_
        if (timeLi.length !== nameLi.length) {
            return err_input;
        }
        // error input check _END_

        // calculate part _START_
        for (let i = 0; i < timeLi.length; i++) {
            if (currT < timeLi[i]) {
                return [nameLi[i], msTrans(timeLi[i] - currT)];
            }
        }
        // calculate part _END_
    }

    // error input
    else {
        return err_input;
    }
}

/********************************   main calculate functions data _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/



/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   UI functions _START_   ********************************/

let rightSidebarWidth = 200;

function leftDivWidAndRightDivHeiCalc() {
    return [document.body.scrollWidth - rightSidebarWidth - 40 + "px", window.innerHeight - 200 + "px"] // padding owns 10 + 10 px and 10 + 10 px
}

innerHtml("right-sidebarWidth", rightSidebarWidth + "px");
document.documentElement.style.setProperty('--rightSidebarWidth', rightSidebarWidth + "px");

function goTop() {
    window.scrollBy(-30, -30);
    let t = setTimeout('goTop()', 10);
    if (document.documentElement.scrollTop + document.documentElement.scrollLeft < 1) {
        clearTimeout(t);
    }
}

/********************************   UI functions _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/



/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   small functions _START_   ********************************/

function msTrans(ms) {
    if (ms < 0) {
        return "ERROR INPUT _msTrans";
    }
    else {
        let output_str = "";

        let day = Math.floor(ms / dayInMs);
        ms -= day*dayInMs;
        let hr = checkTime(Math.floor(ms / hrInMs));
        ms -= hr*hrInMs;
        let min = checkTime(Math.floor(ms / minInMs));
        ms -= min*minInMs;
        let sec = checkTime(Math.floor(ms / secInMs));

        if (day > 0) {
            output_str += day + "天 ";
        }
        output_str += hr + ":" + min + ":" + sec;

        return output_str;
    }
}

function goYaShow(timeLeft, eventName, extraStr) {
    const d = timeLeft.slice(1,2);
    const n = eventName.slice(-4);
    if (d !== "天" && n !== "下次开始") {
        return timeLeft + extraStr  + "<br>";
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

/********************************   small functions _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/



/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   main loop _START_   ********************************/

function mainLoop() {
    curr = new Date();
    currT = curr.getTime();

    // goYa!
    if (curr.getDay() === 4 && curr.getHours() >=7) {
        innerHtml("diBao","今天开低保！");
    }
    else{
        innerHtml("diBao","");
    }
    innerHtml("goYa-1",goYaShow(countDownCalc(daily0700_RCE)[1], "no need", " " + countDownCalc(daily0700_RCE, -2)[0][1] + " 大使任务要过期了"));
    innerHtml("goYa-2",goYaShow(countDownCalc(weeklyEvent_RCE)[1], countDownCalc(weeklyEvent_RCE)[0][0], " 周常活动即将结束"));
    innerHtml("goYa-3",goYaShow(countDownCalc(weeklyThu0700_RCE)[1], "no need", " 快去打低保/世界BOSS"));
    innerHtml("goYa-4",goYaShow(countDownCalc(nightMoon_IrCE)[1], countDownCalc(nightMoon_IrCE)[0], " 暗月马戏团即将结束"));

    // CD board _START_
    innerHtml("CDBoard-day-1-1",countDownCalc(worldQuestNorm_RCE)[0][0]);
    innerHtml("CDBoard-day-1-2",countDownCalc(worldQuestNorm_RCE)[1]);
    innerHtml("CDBoard-day-2-1",countDownCalc(daily0700_RCE)[0][0]);
    innerHtml("CDBoard-day-2-2",countDownCalc(daily0700_RCE)[1]);
    innerHtml("CDBoard-day-3-1",countDownCalc(worldQuestOppo_RCE)[0][0]);
    innerHtml("CDBoard-day-3-2",countDownCalc(worldQuestOppo_RCE)[1]);
    innerHtml("CDBoard-day-4-1",countDownCalc(dailyQuest_RCE)[0][0]);
    innerHtml("CDBoard-day-4-2",countDownCalc(dailyQuest_RCE)[1]);

    innerHtml("CDBoard-week-1-1",countDownCalc(weeklyThu0700_RCE)[0][0]);
    innerHtml("CDBoard-week-1-2",countDownCalc(weeklyThu0700_RCE)[1]);
    innerHtml("CDBoard-week-2-1",countDownCalc(weeklyEvent_RCE)[0][0]);
    innerHtml("CDBoard-week-2-2",countDownCalc(weeklyEvent_RCE)[1]);

    innerHtml("CDBoard-month-1-1",countDownCalc(nightMoon_IrCE)[0]);
    innerHtml("CDBoard-month-1-2",countDownCalc(nightMoon_IrCE)[1]);
    // CD board _END_

    // Info board _START_
    innerHtml("InfoBoard-mythAff-1",countDownCalc(weeklyThu0700_RCE)[0][1]);
    innerHtml("InfoBoard-mythAff-2",countDownCalc(weeklyThu0700_RCE, +1)[0][1]);

    innerHtml("InfoBoard-emiss-1-1",countDownCalc(daily0700_RCE, -2)[0][1]);
    innerHtml("InfoBoard-emiss-1-2",countDownCalc(daily0700_RCE, -2)[0][2]);
    innerHtml("InfoBoard-emiss-2-1",countDownCalc(daily0700_RCE, -1)[0][1]);
    innerHtml("InfoBoard-emiss-2-2",countDownCalc(daily0700_RCE, -1)[0][2]);
    innerHtml("InfoBoard-emiss-3-1",countDownCalc(daily0700_RCE)[0][1]);
    innerHtml("InfoBoard-emiss-3-2",countDownCalc(daily0700_RCE)[0][2]);

    innerHtml("InfoBoard-worldBoss-1-1",countDownCalc(weeklyThu0700_RCE)[0][2]);
    innerHtml("InfoBoard-worldBoss-1-2",countDownCalc(weeklyThu0700_RCE)[0][3]);
    innerHtml("InfoBoard-worldBoss-2-1",countDownCalc(weeklyThu0700_RCE, 1)[0][2]);
    innerHtml("InfoBoard-worldBoss-2-2",countDownCalc(weeklyThu0700_RCE, 1)[0][3]);

    innerHtml("InfoBoard-weeklyEvent-1",countDownCalc(weeklyEvent_RCE)[0][1]);
    innerHtml("InfoBoard-weeklyEvent-2",countDownCalc(weeklyEvent_RCE, 1)[0][1]);
    // Info board _END_

    // LEG board _START_
    innerHtml("LEGBoard-emiss-1-1",countDownCalc(daily0700_RCE, -2)[0][3]);
    innerHtml("LEGBoard-emiss-1-2",countDownCalc(daily0700_RCE)[1]);
    innerHtml("LEGBoard-emiss-2-1",countDownCalc(daily0700_RCE, -1)[0][3]);
    innerHtml("LEGBoard-emiss-2-2","1天 " + countDownCalc(daily0700_RCE)[1]);
    innerHtml("LEGBoard-emiss-3-1",countDownCalc(daily0700_RCE)[0][3]);
    innerHtml("LEGBoard-emiss-3-2","2天 " + countDownCalc(daily0700_RCE)[1]);

    innerHtml("LEGBoard-worldBoss-1-1",countDownCalc(weeklyThu0700_RCE)[0][4]);
    innerHtml("LEGBoard-worldBoss-1-2",countDownCalc(weeklyThu0700_RCE)[0][5]);
    innerHtml("LEGBoard-worldBoss-2-1",countDownCalc(weeklyThu0700_RCE)[0][6]);
    innerHtml("LEGBoard-worldBoss-2-2",countDownCalc(weeklyThu0700_RCE)[0][7]);
    innerHtml("LEGBoard-worldBoss-3-1",countDownCalc(weeklyThu0700_RCE, 1)[0][4]);
    innerHtml("LEGBoard-worldBoss-3-2",countDownCalc(weeklyThu0700_RCE, 1)[0][5]);
    innerHtml("LEGBoard-worldBoss-4-1",countDownCalc(weeklyThu0700_RCE, 1)[0][6]);
    innerHtml("LEGBoard-worldBoss-4-2",countDownCalc(weeklyThu0700_RCE, 1)[0][7]);
    // LEG board _END_

    // For war frontline board | 1-contribute 2-attack
    innerHtml("war-Frontline-output",warFrontlineOutput(2, "部落", new Date(2018,10,12,19,20)));

    // right side bar _START_
    innerHtml("rightSidebar-date",curr.getFullYear() + "-" + checkTime(curr.getMonth() + 1) + "-" + checkTime(curr.getDate()));
    innerHtml("rightSidebar-day",dayTrans(curr.getDay()));
    innerHtml("rightSidebar-time",checkTime(curr.getHours()) + ":" + checkTime(curr.getMinutes()) + ":" + checkTime(curr.getSeconds()));

    innerHtml("rightSidebar-the800days","8. 0 已开 第" + theVer800Days + "天 第" + checkTime(Math.floor((theVer800Days - 1) / 7 + 1)) + "周");
    innerHtml("rightSidebar-the801days", "团本已开 第" + theVer801Days + "天 第" + checkTime(Math.floor((theVer801Days - 1) / 7 + 1)) + "周");

    knowledgeLevel = Math.floor((theVer801Days - 1) / 7 + 2);
    innerHtml("rightSidebar-heartLevel",knowledgeLevel + "级");

    document.documentElement.style.setProperty('--leftDivWidth', leftDivWidAndRightDivHeiCalc()[0]);
    document.documentElement.style.setProperty('--rightSidebarHeight', leftDivWidAndRightDivHeiCalc()[1]);
    innerHtml("body-scrollWidth", document.body.scrollWidth);
    // right side bar _END_


    setTimeout('mainLoop()', 200);
}

/********************************   main loop _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/