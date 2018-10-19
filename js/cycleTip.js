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

var emissaryQuest = ["塔兰吉远征队","始祖龟求知者","沃顿奈","艾泽拉斯的勇士","部落战事","赞达拉帝国"];
var emissaryReward = new Array(40);
emissaryReward = emissaryReward.join("老任还没写,").split(",");
emissaryReward.lenth = emissaryReward.lenth - 1; // 批量赋值 https://blog.csdn.net/jackwen110200/article/details/51669578
emissaryReward.splice(38,0,"340装备","600能量","340装备","特质装","200物资","700金币");

function cycleTip() {
    var loadTime = new Date();
    var deltaDay = {
        ver801: Math.floor((loadTime.getTime() - startDay.ver801.getTime()) / dayInMs)
    };

    var mythicAffix = [];
    var mythicAffixTurn = Math.floor(deltaDay.ver801 / 7) % 12; // from 0 to 11
    mythicAffix[0] = mythAffPool[0][mythAffOrder.ver801[0][mythicAffixTurn % 2]];
    mythicAffix[1] = mythAffPool[1][mythAffOrder.ver801[1][mythicAffixTurn % 12]];
    mythicAffix[2] = mythAffPool[2][mythAffOrder.ver801[2][mythicAffixTurn % 12]];
    mythicAffix[3] = mythAffPool[3][mythAffOrder.ver801[3][0]];
    var mythicAffixNext = [];
    mythicAffixNext[0] = mythAffPool[0][mythAffOrder.ver801[0][(mythicAffixTurn+1) % 2]];
    mythicAffixNext[1] = mythAffPool[1][mythAffOrder.ver801[1][(mythicAffixTurn+1) % 12]];
    mythicAffixNext[2] = mythAffPool[2][mythAffOrder.ver801[2][(mythicAffixTurn+1) % 12]];
    mythicAffixNext[3] = mythAffPool[3][mythAffOrder.ver801[3][0]];


    document.getElementById("cycleTip-mythAff-0").innerHTML = mythicAffix[0];
    document.getElementById("cycleTip-mythAff-1").innerHTML = mythicAffix[1];
    document.getElementById("cycleTip-mythAff-2").innerHTML = mythicAffix[2];
    document.getElementById("cycleTip-mythAff-3").innerHTML = mythicAffix[3];

    document.getElementById("cycleTip-mythAffNext-0").innerHTML = mythicAffixNext[0];
    document.getElementById("cycleTip-mythAffNext-1").innerHTML = mythicAffixNext[1];
    document.getElementById("cycleTip-mythAffNext-2").innerHTML = mythicAffixNext[2];
    document.getElementById("cycleTip-mythAffNext-3").innerHTML = mythicAffixNext[3];

    document.getElementById("cycleTip-emQue-0").innerHTML = emissaryQuest[deltaDay.ver801 % 6]; // today
    document.getElementById("cycleTip-emQue-1").innerHTML = emissaryQuest[(deltaDay.ver801 - 1) % 6]; // yesterday
    document.getElementById("cycleTip-emQue-2").innerHTML = emissaryQuest[(deltaDay.ver801 - 2) % 6]; // the day before yesterday

    document.getElementById("cycleTip-emRe-0").innerHTML = emissaryReward[deltaDay.ver801];
    document.getElementById("cycleTip-emRe-1").innerHTML = emissaryReward[deltaDay.ver801 - 1];
    document.getElementById("cycleTip-emRe-2").innerHTML = emissaryReward[deltaDay.ver801 - 2];

    document.getElementById("cycleTip-emQue-next").innerHTML = emissaryQuest[(deltaDay.ver801 + 1) % 6]; // tomorrow

    setTimeout('cycleTip()', 900);
}