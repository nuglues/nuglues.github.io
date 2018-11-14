/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   manual settings _START_   ********************************/

// 炼金 铭文 锻造 珠宝 工程 制皮 裁缝 附魔 烹饪
const warFrontlineDonation = [];
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
        BFAEmissaryPool[0][1],BFAEmissaryPool[0][5],BFAEmissaryPool[0][2],BFAEmissaryPool[0][3]];
BFAEmissRewrite[1] =
    [BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],BFAEmissaryPool[1][0],BFAEmissaryPool[1][2],BFAEmissaryPool[1][3],BFAEmissaryPool[1][4],BFAEmissaryPool[1][2],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][4],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],BFAEmissaryPool[1][0],BFAEmissaryPool[1][4],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][4],BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],BFAEmissaryPool[1][1],BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],
        BFAEmissaryPool[1][3],BFAEmissaryPool[1][0],BFAEmissaryPool[1][2],BFAEmissaryPool[1][2],BFAEmissaryPool[1][0],BFAEmissaryPool[1][1],BFAEmissaryPool[1][2],
        BFAEmissaryPool[1][1],BFAEmissaryPool[1][3],BFAEmissaryPool[1][2],BFAEmissaryPool[1][1]];

const LEGEmissaryPool = ["法罗迪斯宫廷","织梦者","高岭诸族","瓦拉加尔","堕夜精灵","肯瑞托","守望者","抗魔联军","圣光军团","阿古斯防卫军"];
//                              0           1       2           3           4           5       6       7           8           9
const LEGEmissRewrite =
    ["","","","","",LEGEmissaryPool[0],LEGEmissaryPool[6],
        LEGEmissaryPool[4],LEGEmissaryPool[3],LEGEmissaryPool[1],LEGEmissaryPool[0],LEGEmissaryPool[5],LEGEmissaryPool[8],LEGEmissaryPool[6],
        LEGEmissaryPool[3],LEGEmissaryPool[7],LEGEmissaryPool[0],LEGEmissaryPool[5],LEGEmissaryPool[6],LEGEmissaryPool[4],LEGEmissaryPool[3],
        LEGEmissaryPool[9],LEGEmissaryPool[5],LEGEmissaryPool[1],LEGEmissaryPool[2],LEGEmissaryPool[4],LEGEmissaryPool[3],LEGEmissaryPool[1],
        LEGEmissaryPool[7],LEGEmissaryPool[0],LEGEmissaryPool[6],LEGEmissaryPool[8]];

const unRecordDays = 61;
for (let i = 0; i < BFAEmissRewrite[0].length; i++) {
    daily0700_RCE.nameLi[1][i + unRecordDays] = BFAEmissRewrite[0][i];
    daily0700_RCE.nameLi[2][i + unRecordDays] = BFAEmissRewrite[1][i];
    daily0700_RCE.nameLi[3][i + unRecordDays] = LEGEmissRewrite[i];
}
// set daily0700_RCE name list _END_

/********************************   manual settings _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/