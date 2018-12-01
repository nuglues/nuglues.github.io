/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   set other data (cycle events) _START_   ********************************/

/**<<<<<<<<<<<<<<<<<<<<   regular cycle events _START_   **********************/

const worldQuestNorm_RCE = new RegularCycleEvent(
    new Date(2018,7,14,7).getTime(),
    [hrInMs * 8, hrInMs * 4, hrInMs * 4, hrInMs * 8],
    [new Array(4).fill("下一波世界任务")]);

const worldQuestOppo_RCE = new RegularCycleEvent(
    new Date(2018,7,14,7).getTime(),
    [hrInMs * 12, hrInMs * 12],
    [new Array(2).fill("下一波对面地图世界任务")]);

const dailyQuest_RCE = new RegularCycleEvent(
    new Date(2018,7,14,3).getTime(),
    [dayInMs],
    [["下一次日常刷新"]]);

const argusEliteChange_RCE = new RegularCycleEvent(
    new Date(2018,8,6,7).getTime(),
    [hrInMs * 4, hrInMs * 4, hrInMs * 4, hrInMs * 4, hrInMs * 4, hrInMs * 4],
    [new Array(6).fill("阿古斯稀有下次换班")]);

const weeklyThu0700_RCE = new RegularCycleEvent(
    new Date(2018,8,6,7).getTime(),
    [dayInMs * 7],
    []);

const weeklyEvent_RCE = new RegularCycleEvent(
    new Date(2018,8,13,7).getTime(), // weeklyEvent started one week later than world boss
    [dayInMs * 7 - hrInMs * 3, hrInMs * 3],
    []);

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
        mythAffixPool[0][1] + " + " + mythAffixPool[1][4] + " + " + mythAffixPool[2][4] + " + " + mythAffixPool[3][0]]
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
LEGWorldBoss2Pool[0] = ["燃烧废土","燃烧废土","安托兰废土","克罗库恩","玛凯雷","安托兰废土"];
LEGWorldBoss2Pool[1] = ["深渊领主维尔姆斯","奥库拉鲁斯","妖女奥露拉黛儿","主母芙努娜","索塔纳索尔","审判官梅托"];

const LEGArchyPool = [
    "乌达维斯的晶化之眼", "星光道标", "星光道标", "瑞苏之矛", "瑞苏之矛",
    "苏拉玛珠宝头冠", "苏拉玛珠宝头冠", "小鬼传送器", "小鬼传送器", "黑鸦钥匙", "黑鸦钥匙",
    "小虫图金斯", "小虫图金斯", "斯卡拉克斯碎片", "斯卡拉克斯碎片", "珍石颈带", "珍石颈带",
    "壮年玛诺洛斯之血", "壮年玛诺洛斯之血", "纳萨拉斯学院钥匙", "纳萨拉斯学院钥匙",
    "玛凯雷的紫色群山", "玛凯雷的紫色群山", "艾特洛之魂", "艾特洛之魂", "乌达维斯的晶化之眼"];


weeklyThu0700_RCE.nameLi =
    [["下一次周CD更新 | 低保"],
        mythAffixOrder.ver801,
        BFAWorldBossPool[0],
        BFAWorldBossPool[1],
        LEGWorldBoss1Pool[0],
        LEGWorldBoss1Pool[1],
        LEGWorldBoss2Pool[0],
        LEGWorldBoss2Pool[1],
        LEGArchyPool];
// set weeklyThu0700_RCE name list _END_


const LEGAttack_RCE = new RegularCycleEvent(
    new Date(2018,0,1,8).getTime(),
    [hrInMs * 12.5, hrInMs * 6],
    [["下次入侵", "当前入侵中"],
    ["至高岭", "至高岭", "风暴峡湾", "风暴峡湾", "至高岭", "至高岭",
        "瓦尔莎拉", "瓦尔莎拉", "阿苏纳", "阿苏纳", "风暴峡湾", "风暴峡湾",
        "瓦尔莎拉", "瓦尔莎拉", "至高岭", "至高岭", "阿苏纳", "阿苏纳",
        "瓦尔莎拉", "瓦尔莎拉", "风暴峡湾", "风暴峡湾", "阿苏纳", "阿苏纳"]]);

/**********************   regular cycle events _END_   >>>>>>>>>>>>>>>>>>>>**/



/**<<<<<<<<<<<<<<<<<<<<   irregular cycle events _START_   **********************/

// night moon monthly _START_
const nightMoon_IrCE = new IrregularCycleEvent(
    [new Date(2018,10,4,0,1).getTime(),new Date(2018,10,10,23,59).getTime(),
        new Date(2018,11,2,0,1).getTime(),new Date(2018,11,8,23,59).getTime(),
        new Date(2019,0,6,0,1).getTime(),new Date(2019,0,12,23,59).getTime(),
        new Date(2019,1,3,0,1).getTime(),new Date(2019,1,9,23,59).getTime(),
        new Date(2019,2,3,0,1).getTime(),new Date(2019,2,9,23,59).getTime(),
        new Date(2019,3,7,0,1).getTime(),new Date(2019,3,13,23,59).getTime(),
        new Date(2019,4,5,0,1).getTime(),new Date(2019,4,11,23,59).getTime(),
        new Date(2019,5,2,0,1).getTime(),new Date(2019,5,8,23,59).getTime(),
        new Date(2019,6,7,0,1).getTime(),new Date(2019,6,13,23,59).getTime(),
        new Date(2019,7,4,0,1).getTime(),new Date(2019,7,10,23,59).getTime(),
        new Date(2019,8,1,0,1).getTime(),new Date(2019,8,7,23,59).getTime(),
        new Date(2019,9,6,0,1).getTime(),new Date(2019,9,12,23,59).getTime(),
        new Date(2019,10,3,0,1).getTime(),new Date(2019,10,9,23,59).getTime(),
        new Date(2019,11,1,0,1).getTime(),new Date(2019,11,7,23,59).getTime()],

    new Array(28).fill("暗月马戏团剩余时间"));

for (let i = 0; i < nightMoon_IrCE.timeLi.length; i += 2) {
    nightMoon_IrCE.nameLi[i] = "暗月马戏团下次开始";
}
// night moon monthly _END_

// festival _START_
const festival_IrCE = new IrregularCycleEvent(
    [new Date(2018,10,19,10,0).getTime(),new Date(2018,10,26,9,0).getTime(),
        new Date(2018,11,16,10,0).getTime(),new Date(2019,0,2,6,0).getTime(),
        new Date(2019,0,28,10,0).getTime(),new Date(2019,1,11,10,0).getTime(),
        new Date(2019,1,5,10,0).getTime(),new Date(2019,1,19,10,0).getTime(),
        new Date(2019,3,22,10,0).getTime(),new Date(2019,3,29,10,0).getTime(),
        new Date(2019,3,29,10,0).getTime(),new Date(2019,4,6,10,0).getTime(),
        new Date(2019,5,21,10,0).getTime(),new Date(2019,6,5,10,0).getTime(),
        new Date(2019,8,20,10,0).getTime(),new Date(2019,9,6,10,0).getTime(),
        new Date(2019,9,18,10,0).getTime(),new Date(2019,10,1,11,0).getTime()],
    ["感恩节", "感恩节", "冬幕节", "冬幕节", "春节", "春节","情人节","情人节","复活节","复活节",
        "儿童周","儿童周","仲夏火焰节","仲夏火焰节","美酒节","美酒节","万圣节","万圣节"]
);
// festival _END_

/**********************   irregular cycle events _END_   >>>>>>>>>>>>>>>>>>>>**/

/********************************   set other data _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/