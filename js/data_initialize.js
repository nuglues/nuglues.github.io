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

function RegularCycleEvent(startTime, periodTimeList, periodNameList) {
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