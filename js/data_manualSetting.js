/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   manual settings _START_   ********************************/

// 炼金 铭文 锻造 珠宝 工程 制皮 裁缝 附魔 烹饪
const warFrontlineDonation = [];
warFrontlineDonation[0] = ["炼金"," 铭文","锻造","珠宝","工程","制皮","裁缝","附魔","烹饪"];
warFrontlineDonation[1] =
    [[20,3,60,15,3,2,1,3,60],
        [20,3,2,15,6,2,1,3,60],
        [20,3,60,15,2,2,1,3,60],
        [20,3,2,15,6,2,1,3,30],
        [2,3,60,15,3,60,1,3,60],
        [2,3,2,15,2,60,1,3,60]];
warFrontlineDonation[2] =
    [["海滨治疗药水","智力战争卷轴","镍铜矿石","全能蓝晶石","霜纹弹药","漩涡战鼓","战旗：自由精神","附魔戒指 - 全能之纹","肥厚腰肉"],
        ["海滨法力药水","耐力战争卷轴","镍铜硬化护蹄","跨界绿铱石","速烤燃爆装置","糙皮骑甲","战旗：迅猛集结","附魔戒指 - 爆击之纹","生烤鲶鱼"],
        ["海滨法力药水","战吼战争卷轴","镍铜矿石","全能蓝晶石","燃炎弹药","旋涡战鼓","战旗：方阵防御","附魔武器 - 坚韧远航","无尽之海鲶鱼"],
        ["海滨治疗药水","耐力战争卷轴","镍铜硬化马镫","跨界绿依石","速烤爆燃装置","糙皮骑甲","战旗：方阵防御","附魔武器 - 坚韧远航","香料里脊"],
        ["钢肤药水","智力战争卷轴","镍铜矿石","致命橙霞石","霜纹弹药","粗糙皮革","战旗：迅猛集结","附魔戒指 - 爆击之纹","生烤鲶鱼"],
        ["钢肤药水","智力战争卷轴","镍铜硬化马镫","致命橙霞石","燃炎弹药","粗糙皮革","战旗：自由精神","附魔戒指 - 爆击之纹","生烤鲶鱼"]];
const warFrontlineDonationNum = checkQuantity(warFrontlineDonation[1][warFrontlineDonation[1].length-1]);
const warFrontlineDonationGoods = warFrontlineDonation[2][warFrontlineDonation[1].length-1];

const daily0700_RCE = new RegularCycleEvent(
    new Date(2018,7,14,7).getTime(),
    [dayInMs],
    []);
// set daily0700_RCE name list _START_
daily0700_RCE.nameLi =
    [["下一波艾酱任务 | 大使任务 | 5H更新"],
        new Array(theVer800Days + 3).fill("老任还没写"),
        new Array(theVer800Days + 3).fill("老任还没写"),
        new Array(theVer800Days + 3).fill("老任还没写"),
        []];

const BFAEmissaryPool = [];
BFAEmissaryPool[0] = ["塔兰吉远征队","始祖龟求知者","沃顿奈","艾泽拉斯的勇士","部落战事","赞达拉帝国"];
//                        0              1             2           3              4          5
BFAEmissaryPool[1] = ["340装备","1000能量","特质装","200物资","2000金币","始祖龟装备","赞达拉装备","纳兹米尔装备","赞达拉武器","沃顿装备","荣耀战团装备箱"];
//                       0          1         2         3         4          5             6            7             8            9             10

const BFAEmissRewrite = [];
BFAEmissRewrite[0] =
    [BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][4],BFAEmissaryPool[0][5],BFAEmissaryPool[0][0],BFAEmissaryPool[0][1],BFAEmissaryPool[0][4],
        BFAEmissaryPool[0][3],BFAEmissaryPool[0][2],BFAEmissaryPool[0][0],BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][2],BFAEmissaryPool[0][4],
        BFAEmissaryPool[0][3],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],BFAEmissaryPool[0][1],BFAEmissaryPool[0][3],BFAEmissaryPool[0][2],BFAEmissaryPool[0][4],
        BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][0],BFAEmissaryPool[0][4],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][0],
        BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][4],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],
        BFAEmissaryPool[0][1],BFAEmissaryPool[0][4],BFAEmissaryPool[0][3],BFAEmissaryPool[0][2],BFAEmissaryPool[0][0],BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],
        BFAEmissaryPool[0][4],BFAEmissaryPool[0][3],BFAEmissaryPool[0][2],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],BFAEmissaryPool[0][1],BFAEmissaryPool[0][3],
        BFAEmissaryPool[0][4],BFAEmissaryPool[0][2],BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][0],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],
        BFAEmissaryPool[0][4],BFAEmissaryPool[0][1],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][4],
        BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][0],BFAEmissaryPool[0][2],BFAEmissaryPool[0][4],BFAEmissaryPool[0][3],BFAEmissaryPool[0][1],
        BFAEmissaryPool[0][5],BFAEmissaryPool[0][0],BFAEmissaryPool[0][4],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][1],BFAEmissaryPool[0][0],
        BFAEmissaryPool[0][5],BFAEmissaryPool[0][2],BFAEmissaryPool[0][4],BFAEmissaryPool[0][3],BFAEmissaryPool[0][5],BFAEmissaryPool[0][0],BFAEmissaryPool[0][1],
        BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][4],BFAEmissaryPool[0][1],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],BFAEmissaryPool[0][3],
        BFAEmissaryPool[0][2],BFAEmissaryPool[0][4],BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][0],BFAEmissaryPool[0][3],BFAEmissaryPool[0][4],
        BFAEmissaryPool[0][2],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],BFAEmissaryPool[0][1],BFAEmissaryPool[0][4],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],
        BFAEmissaryPool[0][5],BFAEmissaryPool[0][1],BFAEmissaryPool[0][0],BFAEmissaryPool[0][4],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][1],
        BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][4],BFAEmissaryPool[0][0],BFAEmissaryPool[0][1],
        BFAEmissaryPool[0][5],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3],BFAEmissaryPool[0][4],BFAEmissaryPool[0][0],BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],
        BFAEmissaryPool[0][4],BFAEmissaryPool[0][3],BFAEmissaryPool[0][2],BFAEmissaryPool[0][1],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],BFAEmissaryPool[0][3],
        BFAEmissaryPool[0][2],BFAEmissaryPool[0][4],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5],BFAEmissaryPool[0][1],BFAEmissaryPool[0][2],BFAEmissaryPool[0][4],
        BFAEmissaryPool[0][3],BFAEmissaryPool[0][1],BFAEmissaryPool[0][0],BFAEmissaryPool[0][5]];
BFAEmissRewrite[1] =
    [BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],BFAEmissaryPool[1][0],BFAEmissaryPool[1][2],BFAEmissaryPool[1][3],BFAEmissaryPool[1][4],BFAEmissaryPool[1][2],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][4],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][0],BFAEmissaryPool[1][4],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][4],BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],BFAEmissaryPool[1][1],BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],
        BFAEmissaryPool[1][3],BFAEmissaryPool[1][0],BFAEmissaryPool[1][2],BFAEmissaryPool[1][2],BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][3],BFAEmissaryPool[1][2],BFAEmissaryPool[1][1],BFAEmissaryPool[1][0],BFAEmissaryPool[1][2],BFAEmissaryPool[1][2],
        BFAEmissaryPool[1][4],BFAEmissaryPool[1][2],BFAEmissaryPool[1][1],BFAEmissaryPool[1][4],BFAEmissaryPool[1][4],BFAEmissaryPool[1][3],BFAEmissaryPool[1][2],
        BFAEmissaryPool[1][2],BFAEmissaryPool[1][1],BFAEmissaryPool[1][3],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][4],BFAEmissaryPool[1][1],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][0],BFAEmissaryPool[1][4],BFAEmissaryPool[1][3],BFAEmissaryPool[1][4],BFAEmissaryPool[1][4],BFAEmissaryPool[1][1],
        BFAEmissaryPool[1][0],BFAEmissaryPool[1][3],BFAEmissaryPool[1][2],BFAEmissaryPool[1][4],BFAEmissaryPool[1][4],BFAEmissaryPool[1][1],BFAEmissaryPool[1][3],
        BFAEmissaryPool[1][5],BFAEmissaryPool[1][6],BFAEmissaryPool[1][7],BFAEmissaryPool[1][2],BFAEmissaryPool[1][3],BFAEmissaryPool[1][1],BFAEmissaryPool[1][3],
        BFAEmissaryPool[1][2],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][4],BFAEmissaryPool[1][1],BFAEmissaryPool[1][5],BFAEmissaryPool[1][1],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][1],BFAEmissaryPool[1][6],BFAEmissaryPool[1][4],BFAEmissaryPool[1][3],
        BFAEmissaryPool[1][8],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][5],BFAEmissaryPool[1][2],BFAEmissaryPool[1][8],BFAEmissaryPool[1][1],
        BFAEmissaryPool[1][9],BFAEmissaryPool[1][10],BFAEmissaryPool[1][4],BFAEmissaryPool[1][3],BFAEmissaryPool[1][8],BFAEmissaryPool[1][1],BFAEmissaryPool[1][10],
        BFAEmissaryPool[1][2],BFAEmissaryPool[1][2],BFAEmissaryPool[1][8],BFAEmissaryPool[1][3],BFAEmissaryPool[1][3],BFAEmissaryPool[1][8],BFAEmissaryPool[1][1],
        BFAEmissaryPool[1][4],BFAEmissaryPool[1][5],BFAEmissaryPool[1][3],BFAEmissaryPool[1][10],BFAEmissaryPool[1][9],BFAEmissaryPool[1][1],BFAEmissaryPool[1][4],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][4],BFAEmissaryPool[1][1],BFAEmissaryPool[1][10],BFAEmissaryPool[1][3],BFAEmissaryPool[1][4],
	    BFAEmissaryPool[1][6],BFAEmissaryPool[1][3],BFAEmissaryPool[1][1],BFAEmissaryPool[1][10],BFAEmissaryPool[1][7],BFAEmissaryPool[1][1],BFAEmissaryPool[1][1],
    	BFAEmissaryPool[1][4],BFAEmissaryPool[1][1],BFAEmissaryPool[1][1],BFAEmissaryPool[1][4],BFAEmissaryPool[1][8],BFAEmissaryPool[1][8],BFAEmissaryPool[1][1],
    	BFAEmissaryPool[1][2],BFAEmissaryPool[1][1],BFAEmissaryPool[1][4],BFAEmissaryPool[1][4],BFAEmissaryPool[1][4],BFAEmissaryPool[1][2],BFAEmissaryPool[1][3],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][2]];

const LEGEmissaryPool = ["法罗迪斯宫廷","织梦者","高岭诸族","瓦拉加尔","堕夜精灵","肯瑞托","守望者","抗魔联军","圣光军团","阿古斯防卫军"];
//                              0           1       2           3           4           5       6       7           8           9
const LEGEmissRewrite =
    ["","","","","",LEGEmissaryPool[0],LEGEmissaryPool[6],
        LEGEmissaryPool[4],LEGEmissaryPool[3],LEGEmissaryPool[1],LEGEmissaryPool[0],LEGEmissaryPool[5],LEGEmissaryPool[8],LEGEmissaryPool[6],
        LEGEmissaryPool[3],LEGEmissaryPool[7],LEGEmissaryPool[0],LEGEmissaryPool[5],LEGEmissaryPool[6],LEGEmissaryPool[4],LEGEmissaryPool[3],
        LEGEmissaryPool[9],LEGEmissaryPool[5],LEGEmissaryPool[1],LEGEmissaryPool[2],LEGEmissaryPool[4],LEGEmissaryPool[3],LEGEmissaryPool[1],
        LEGEmissaryPool[7],LEGEmissaryPool[0],LEGEmissaryPool[6],LEGEmissaryPool[8],LEGEmissaryPool[3],LEGEmissaryPool[9],LEGEmissaryPool[7],
        LEGEmissaryPool[0],LEGEmissaryPool[8],LEGEmissaryPool[2],LEGEmissaryPool[4],LEGEmissaryPool[7],LEGEmissaryPool[5],LEGEmissaryPool[0],
        LEGEmissaryPool[4],LEGEmissaryPool[3],LEGEmissaryPool[2],LEGEmissaryPool[0],LEGEmissaryPool[9],LEGEmissaryPool[5],LEGEmissaryPool[2],
        LEGEmissaryPool[4],LEGEmissaryPool[6],LEGEmissaryPool[9],LEGEmissaryPool[7],LEGEmissaryPool[5],LEGEmissaryPool[4],LEGEmissaryPool[6],
        LEGEmissaryPool[2],LEGEmissaryPool[9],LEGEmissaryPool[5],LEGEmissaryPool[0],LEGEmissaryPool[8],LEGEmissaryPool[2],LEGEmissaryPool[4],
        LEGEmissaryPool[9],LEGEmissaryPool[5],LEGEmissaryPool[1],LEGEmissaryPool[3],LEGEmissaryPool[2],LEGEmissaryPool[8],LEGEmissaryPool[7],
        LEGEmissaryPool[1],LEGEmissaryPool[9],LEGEmissaryPool[6],LEGEmissaryPool[3],LEGEmissaryPool[2],LEGEmissaryPool[9],LEGEmissaryPool[0],
        LEGEmissaryPool[5],LEGEmissaryPool[3],LEGEmissaryPool[2],LEGEmissaryPool[8],LEGEmissaryPool[9],LEGEmissaryPool[0],LEGEmissaryPool[1],
        LEGEmissaryPool[3],LEGEmissaryPool[8],LEGEmissaryPool[2],LEGEmissaryPool[5],LEGEmissaryPool[1],LEGEmissaryPool[9],LEGEmissaryPool[3],
        LEGEmissaryPool[8],LEGEmissaryPool[2],LEGEmissaryPool[7],LEGEmissaryPool[9],LEGEmissaryPool[5],LEGEmissaryPool[3],LEGEmissaryPool[8],
        LEGEmissaryPool[6],LEGEmissaryPool[5],LEGEmissaryPool[0],LEGEmissaryPool[7],LEGEmissaryPool[2],LEGEmissaryPool[4],LEGEmissaryPool[3],
        LEGEmissaryPool[7],LEGEmissaryPool[9],LEGEmissaryPool[0],LEGEmissaryPool[2],LEGEmissaryPool[6],LEGEmissaryPool[4],LEGEmissaryPool[0],
        LEGEmissaryPool[5],LEGEmissaryPool[9],LEGEmissaryPool[6],LEGEmissaryPool[4],LEGEmissaryPool[8],LEGEmissaryPool[7],LEGEmissaryPool[5],
	    LEGEmissaryPool[9],LEGEmissaryPool[2],LEGEmissaryPool[4],LEGEmissaryPool[3],LEGEmissaryPool[1],LEGEmissaryPool[9],LEGEmissaryPool[5],
    	LEGEmissaryPool[2],LEGEmissaryPool[6],LEGEmissaryPool[4],LEGEmissaryPool[9],LEGEmissaryPool[0],LEGEmissaryPool[1],LEGEmissaryPool[4],
    	LEGEmissaryPool[8],LEGEmissaryPool[6],LEGEmissaryPool[9],LEGEmissaryPool[1],LEGEmissaryPool[7],LEGEmissaryPool[3],LEGEmissaryPool[2],
        LEGEmissaryPool[4],LEGEmissaryPool[1],LEGEmissaryPool[0],LEGEmissaryPool[5]];

const unRecordDays = 61;

for (let i = 0; i < BFAEmissRewrite[0].length; i++) {
    daily0700_RCE.nameLi[1][i + unRecordDays] = BFAEmissRewrite[0][i];
    daily0700_RCE.nameLi[2][i + unRecordDays] = BFAEmissRewrite[1][i];
    daily0700_RCE.nameLi[3][i + unRecordDays] = LEGEmissRewrite[i];
}

const garrisonPet = ["三傻鸟", "亡灵羊", "冰火元素", "鬣蜥人", "火凤凰", "三机械", "缝合二世",
    "三谜团", "暗黑三人组", "双野猪", "萝卜软泥", "大嘴鸟", "幼苗夫妻", "戈隆兄弟", "三虫子"];
daily0700_RCE.nameLi[4] = garrisonPet;
// set daily0700_RCE name list _END_

/********************************   manual settings _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/
