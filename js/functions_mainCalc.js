/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   main calculate functions _START_   ********************************/

function warFrontlineOutput(camp, startTime){
    let outputStr = "";
    const timeRemain = 7 * dayInMs - (currT - startTime.getTime());

        if (timeRemain > 0) {
            const timeRemainStr = msTrans(timeRemain);
            outputStr += "<strong>" + camp + "进攻中</strong><br>";
            outputStr += "<br>大致剩余时间：" + timeRemainStr + "<br>";
            outputStr += "推算结束时间：" + dateObjToStr(new Date(startTime.getTime() + 7 * dayInMs), 1, 1, 1, 1, 1, 1, "-", ":") + "<br>";
            outputStr += "<br>" + oppoCamp(camp) + "的小伙伴快去打Boss鸭";
        }
        else {
            outputStr += "<strong>" + oppoCamp(camp) + "捐献中</strong><br>";

            if (1) {
                outputStr += "<br>捐献清单收集中……";
            }
            else {
                for (let i = 0; i < 9; i++) {
                    outputStr += "<br>" + warFrontlineDonation[0][i] + " - " + warFrontlineDonationNum[i] + warFrontlineDonationGoods[i];
                }
            }
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

function countDownCalc(eventObj, pos1Shift, pos2ShiftMod, pos2Shift) {
    const err_input = ["ERROR INPUT _CDCalc"];

    // regular cycle event PART
    if (eventObj.constructor === RegularCycleEvent){
        const startT = eventObj.startT;
        const timeLi = eventObj.timeLi;
        const nameLi = eventObj.nameLi;
        let subLen = 0;
        for (let i = 0; i < timeLi.length; i++) {
            subLen += timeLi[i];
        }

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
                return [["即将到来"], msTrans(startT - currT), [new Date(startT)]];
            }
            else {
                if (pos1Shift === undefined) {
                    pos1Shift = 0; // default as 0
                }
                if (pos2ShiftMod === undefined) {
                    pos2ShiftMod = 0; // default as 0
                }
                if (pos2Shift === undefined) {
                    pos2Shift = 0; // default as 0
                }

                let nameOutput = [];
                let pos = [];
                let posTimeStart;
                let posTimeEnd;
                let i;

                for (i = 0; i < nameLi.length; i++) {
                    let deltaMs = currT - startT;
                    pos[0] = Math.floor(deltaMs / (subLen * nameLi[i].length / timeLi.length));
                    deltaMs = deltaMs % (subLen * nameLi[i].length / timeLi.length);
                    pos[1] = Math.floor(deltaMs / subLen);
                    deltaMs = deltaMs % subLen;
                    pos[2] = 0;
                    while (deltaMs - timeLi[pos[2]] > 0) {
                        deltaMs -= timeLi[pos[2]];
                        pos[2] += 1;
                    }

                    // shift part _START_
                    if (pos2ShiftMod === 1) {
                        // 1 is absolute, reset pos2 to 0
                        pos[2] = 0;
                    }
                    pos[2] += pos2Shift;
                    if (pos[2] < 0) {
                        pos[1] -= 1;
                        pos[2] += timeLi.length;
                    }
                    if (pos[2] >= timeLi.length) {
                        pos[2] = pos[2] % timeLi.length;
                        pos[1] += 1;
                    }
                    pos[1] += pos1Shift;
                    if (pos[1] < 0) {
                        pos[0] -= 1;
                        pos[1] += nameLi[i].length / timeLi.length;
                    }
                    if (pos[1] >= nameLi[i].length / timeLi.length) {
                        pos[1] = pos[1] % (nameLi[i].length / timeLi.length);
                        pos[0] += 1;
                    }
                    // shift part _END_

                    nameOutput[i] = nameLi[i][pos[1] * timeLi.length + pos[2]];
                }

                posTimeStart = startT + pos[0] * (subLen * nameLi[i - 1].length / timeLi.length) + pos[1] * subLen;
                for (i = 0; i < pos[2]; i++ ) {
                    posTimeStart += timeLi[i];
                }
                posTimeEnd = posTimeStart + timeLi[i];
                return [nameOutput, msTrans(posTimeEnd - currT), [new Date(posTimeStart), new Date(posTimeEnd)]];
            }
        }
        // calculate part _END_
    }

    // irregular cycle event PART
    else if (eventObj.constructor === IrregularCycleEvent) {
        const timeLi = eventObj.timeLi;
        const nameLi = eventObj.nameLi;

        // error input check _START_
        if (timeLi.length !== nameLi.length) {
            return err_input;
        }
        // error input check _END_

        // calculate part _START_
        let i = 0;
        let k = 0;
        let nameOutput = [];
        let timeOutput = [];
        let periodOutput = [];
        while (currT > timeLi[i]) {
            if (currT < timeLi[i + 1]) {
                nameOutput[k] = nameLi[i * 2 +1];
                timeOutput[k] = msTrans(timeLi[i + 1] - currT);
                periodOutput[k] = [new Date(timeLi[i]), new Date(timeLi[i + 1])];
                k++;
            }
            i += 2;
        }
        nameOutput[k] = nameLi[i];
        timeOutput[k] = msTrans(timeLi[i] - currT);
        periodOutput[k] = [new Date(timeLi[i]), new Date(timeLi[i + 1])];
        return [nameOutput, timeOutput, periodOutput];
        // calculate part _END_
    }

    // error input
    else {
        return err_input;
    }
}

function getTokenPrice() {
    let tokenXmlhttp = new XMLHttpRequest();
    tokenXmlhttp.open("get", "https://data.wowtoken.info/snapshot.json");
    tokenXmlhttp.send();
    tokenXmlhttp.onreadystatechange = function () {
        if (tokenXmlhttp.readyState === 4 && tokenXmlhttp.status === 200) {
            const data = JSON.parse(tokenXmlhttp.responseText);
            innerHtml("tokenPrice-1", dateObjToStr(new Date(data.CN.timestamp*1000), 1,1,1,1,1,1,"-",":"));
            innerHtml("tokenPrice-2", data.CN.formatted.buy);
        }
    };

}

function paraGenerator(idList, strList) {
    let i;
    let p = [];
    for (i = 0; i < idList.length; i++) {
        innerHtml(idList[i],"");
        p[i] = [];
        for (let j = 0; j < strList[i].length; j++){
            p[i][j] = document.createElement("p");
            p[i][j].appendChild(document.createTextNode(strList[i][j]));
            document.getElementById(idList[i]).appendChild(p[i][j]);
        }
    }
}

/********************************   main calculate functions data _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/

const paraIdList = [
    "goYa",

    "refresh-daily-name",
    "refresh-daily-time",
    "refresh-weekly-name", "refresh-weekly-time",
    "refresh-monthly-name", "refresh-monthly-time",

    "mythAffix-1",
    "mythAffix-2",
    "BFA-emiss-name",
    "BFA-emiss-reward",
    "BFA-worldBoss-1-zone", "BFA-worldBoss-1-name",
    "BFA-worldBoss-2-zone", "BFA-worldBoss-2-name",
    "weeklyEvent-1", "weeklyEvent-2",

    "LEG-emiss-name",
    "LEG-emiss-reward",
    "LEG-worldBoss-1-zone", "LEG-worldBoss-1-name",
    "LEG-worldBoss-2-zone", "LEG-worldBoss-2-name",
    "LEG-argusElite-1", "LEG-argusElite-2",
    "LEG-argusArchy-1", "LEG-argusArchy-2",

    "LEG-attack-state",
    "LEG-attack-zone",
    "LEG-attack-time",

    "festivalCur-name", "festivalCur-endDate", "festivalCur-time",
    "festivalNext-name", "festivalNext-startDate", "festivalNext-time",
    "garrisonPet1-1",
    "garrisonPet2-1",

    "currentTime-left",
    "currentTime-right",
    "versionDays"];
let paraStrList = [];

/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   main loop _START_   ********************************/

function mainLoop() {
    curr = new Date();
    currT = curr.getTime();

    // const timeShift = dayInMs*7; // for test
    // currT += timeShift;
    // curr = new Date(currT);

    // pretreatment for festival
    let festivalPre = countDownCalc(festival_IrCE);
    let festivalOn = [];
    festivalOn[0] = [];festivalOn[1] = [];festivalOn[2] = [];
    let festivalNext = [];
    festivalNext[0] = [];festivalNext[1] = [];festivalNext[2] = [];
    if (festivalPre[0].length === 1) {
        festivalPre[0][1] = festivalPre[0][0];
        festivalPre[1][1] = festivalPre[1][0];
        festivalPre[2][1] = festivalPre[2][0];
        festivalPre[0][0] = "当前无节日";
        festivalPre[1][0] = "";
        festivalPre[2][0] = "";
    }
    let i_fes;
    for (i_fes = 0; i_fes < festivalPre[0].length - 1; i_fes++) {
        festivalOn[0][i_fes] = festivalPre[0][i_fes];
        festivalOn[1][i_fes] = dateObjToStr(festivalPre[2][i_fes][1],0,1,1,1,1,0,"-",":");
        festivalOn[2][i_fes] = festivalPre[1][i_fes];
    }
    festivalNext[0] = festivalPre[0][i_fes];
    festivalNext[1] = dateObjToStr(festivalPre[2][i_fes][0],0,1,1,1,1,0,"-",":");
    festivalNext[2] = festivalPre[1][i_fes];


    paraStrList = [
        // goYa _START_ -- 4*1
        [ goYaShow(countDownCalc(daily0700_RCE)[1], "no need", " " + countDownCalc(daily0700_RCE, -2)[0][1] + " 大使任务要过期了"),
            goYaShow(countDownCalc(weeklyEvent_RCE)[1], countDownCalc(weeklyEvent_RCE)[0][0], " 周常活动即将结束"),
            goYaShow(countDownCalc(weeklyThu0700_RCE)[1], "no need", " 快去打低保/世界BOSS"),
            goYaShow(countDownCalc(nightMoon_IrCE)[1][0], countDownCalc(nightMoon_IrCE)[0][0], " 暗月马戏团即将结束") ],
        // goYa _END_

        // CD board _START_ -- 4*2 + 2*2 + 1*2
        [ countDownCalc(worldQuestNorm_RCE)[0][0], countDownCalc(daily0700_RCE)[0][0], countDownCalc(worldQuestOppo_RCE)[0][0], countDownCalc(dailyQuest_RCE)[0][0] ],
        [ countDownCalc(worldQuestNorm_RCE)[1], countDownCalc(daily0700_RCE)[1], countDownCalc(worldQuestOppo_RCE)[1], countDownCalc(dailyQuest_RCE)[1] ],
        [ countDownCalc(weeklyThu0700_RCE)[0][0], countDownCalc(weeklyEvent_RCE)[0][0] ], [ countDownCalc(weeklyThu0700_RCE)[1], countDownCalc(weeklyEvent_RCE)[1] ],
        [ countDownCalc(nightMoon_IrCE)[0][0] ], [ countDownCalc(nightMoon_IrCE)[1][0] ],
        // CD board _END_

        // Info board _START_ -- 1 + 1 + 3*2 + 1*2 + 1*2 + 1 + 1
        [ countDownCalc(weeklyThu0700_RCE)[0][1] ],
        [ countDownCalc(weeklyThu0700_RCE, 1)[0][1] ],
        [ countDownCalc(daily0700_RCE, -2)[0][1], countDownCalc(daily0700_RCE, -1)[0][1], countDownCalc(daily0700_RCE)[0][1] ],
        [ countDownCalc(daily0700_RCE, -2)[0][2], countDownCalc(daily0700_RCE, -1)[0][2], countDownCalc(daily0700_RCE)[0][2] ],
        [ countDownCalc(weeklyThu0700_RCE)[0][2] ], [ countDownCalc(weeklyThu0700_RCE)[0][3] ],
        [ countDownCalc(weeklyThu0700_RCE, 1)[0][2] ], [ countDownCalc(weeklyThu0700_RCE, 1)[0][3] ],
        [ countDownCalc(weeklyEvent_RCE)[0][1] ],
        [ countDownCalc(weeklyEvent_RCE, 1)[0][1] ],
        // Info board _END_

        // LEG board _START_ -- 3*2 + 2*2 + 2*2 + 1*2 + 1*2 + 1*2
        [ countDownCalc(daily0700_RCE, -2)[0][3], countDownCalc(daily0700_RCE, -1)[0][3], countDownCalc(daily0700_RCE)[0][3] ],
        [ countDownCalc(daily0700_RCE)[1], countDownCalc(daily0700_RCE, 1)[1], countDownCalc(daily0700_RCE, 2)[1] ],
        [ countDownCalc(weeklyThu0700_RCE)[0][4], countDownCalc(weeklyThu0700_RCE)[0][6] ], [ countDownCalc(weeklyThu0700_RCE)[0][5], countDownCalc(weeklyThu0700_RCE)[0][7] ],
        [ countDownCalc(weeklyThu0700_RCE, 1)[0][4], countDownCalc(weeklyThu0700_RCE, 1)[0][6] ], [ countDownCalc(weeklyThu0700_RCE, 1)[0][5], countDownCalc(weeklyThu0700_RCE, 1)[0][7] ],
        [ countDownCalc(argusEliteChange_RCE)[0][0] ], [ countDownCalc(argusEliteChange_RCE)[1] ],
        [ "本周考古", "下周考古" ], [ countDownCalc(weeklyThu0700_RCE)[0][8], countDownCalc(weeklyThu0700_RCE, 1)[0][8] ],
        // LEG board _END_

        // Attack board _START_ --
        [ countDownCalc(LEGAttack_RCE)[0][0], dateObjToStr(countDownCalc(LEGAttack_RCE, 0, 1, 1)[2][0],0,1,1,1,1,0,"-",":"), dateObjToStr(countDownCalc(LEGAttack_RCE, 1, 1, 1)[2][0],0,1,1,1,1,0,"-",":"), dateObjToStr(countDownCalc(LEGAttack_RCE, 2, 1, 1)[2][0],0,1,1,1,1,0,"-",":"), dateObjToStr(countDownCalc(LEGAttack_RCE, 3, 1, 1)[2][0],0,1,1,1,1,0,"-",":") ],
        [ "剩余时间", countDownCalc(LEGAttack_RCE)[0][1], countDownCalc(LEGAttack_RCE, 1, 1, 0)[0][1], countDownCalc(LEGAttack_RCE, 2, 1, 0)[0][1], countDownCalc(LEGAttack_RCE, 3, 1, 0)[0][1] ],
        [ countDownCalc(LEGAttack_RCE)[1], dateObjToStr(countDownCalc(LEGAttack_RCE, 0, 1, 1)[2][1],0,1,1,1,1,0,"-",":"), dateObjToStr(countDownCalc(LEGAttack_RCE, 1, 1, 1)[2][1],0,1,1,1,1,0,"-",":"), dateObjToStr(countDownCalc(LEGAttack_RCE, 2, 1, 1)[2][1],0,1,1,1,1,0,"-",":"), dateObjToStr(countDownCalc(LEGAttack_RCE, 3, 1, 1)[2][1],0,1,1,1,1,0,"-",":") ],
        // Attack board _END_

        // Other info board _START_ --
        festivalOn[0], festivalOn[1], festivalOn[2],
        [festivalNext[0]], [festivalNext[1]], [festivalNext[2]],
        [ countDownCalc(daily0700_RCE)[0][4] ],
        [ countDownCalc(daily0700_RCE, 1)[0][4] ],
        // Other info board _END_

        // right side bar _START_ -- 2*2 + 2*1
        [ "北京时间", dayTrans(curr.getDay()) ],
        [ dateObjToStr(curr,1,1,1,0,0,0,"-"," "), dateObjToStr(curr,0,0,0,1,1,1," ",":") ],
        [ "8. 0 已开 第" + theVer800Days + "天 第" + checkTime(Math.floor((theVer800Days - 1) / 7 + 1)) + "周", "团本已开 第" + theVer801Days + "天 第" + checkTime(Math.floor((theVer801Days - 1) / 7 + 1)) + "周" ]
        // right side bar _END_
    ];

    // goYa!
    if (curr.getDay() === 4 && curr.getHours() >=7) {
        innerHtml("diBao","今天开低保！");
    }
    else{
        innerHtml("diBao", "");
    }
    if (countDownCalc(LEGAttack_RCE)[0][0] === "当前入侵中") {
        innerHtml("LEGAttack", countDownCalc(LEGAttack_RCE)[1] + " " + countDownCalc(LEGAttack_RCE)[0][1] + " " + "军团入侵即将结束" + "<br>");
    }
    else {
        innerHtml("LEGAttack", "");
    }

    // For war frontline board | 1-contribute 2-attack
    innerHtml("war-Frontline-output",warFrontlineOutput("联盟", new Date(2018,10,23,19,0)));

    // wow token
    getTokenPrice();

    // right side bar _START_
    knowledgeLevel = Math.floor((theVer801Days - 1) / 7 + 2);
    innerHtml("rightSidebar-heartLevel",knowledgeLevel + "级");
    // right side bar _END_

    paraGenerator(paraIdList, paraStrList);

    setTimeout('mainLoop()', 500);
}

/********************************   main loop _END_   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>**/