function changeDivision(n) {
    var selectedDivision = document.getElementById('selectedDivision' + n).value;
    var fragment = document.createDocumentFragment();

    fragment.appendChild(document.getElementById('team' + n));
    console.log("selectedDivision: " + selectedDivision);
    console.log("Team #: " + n);

    if (selectedDivision == 0) {
        document.getElementById('AL_division_1').appendChild(fragment);
        console.log("Added to AL East");
    }
    if (selectedDivision == 1) {
        document.getElementById('AL_division_2').appendChild(fragment);
        console.log("Added to AL Central");
    }
    if (selectedDivision == 2) {
        document.getElementById('AL_division_3').appendChild(fragment);
        console.log("Added to AL West");
    }
    if (selectedDivision == 3) {
        document.getElementById('NL_division_1').appendChild(fragment);
        console.log("Added to NL East");
    }
    if (selectedDivision == 4) {
        document.getElementById('NL_division_2').appendChild(fragment);
        console.log("Added to NL Central");
    }
    if (selectedDivision == 5) {
        document.getElementById('NL_division_3').appendChild(fragment);
        console.log("Added to NL West");
    }
    if (selectedDivision == 6) {
        document.getElementById('TeamsPool').appendChild(fragment);
        console.log("Added to Team Pool");
    }
    if (selectedDivision == 7) {
        document.getElementById('AL_division_4').appendChild(fragment);
        console.log("Added to AL Division 4");
    }
    if (selectedDivision == 8) {
        document.getElementById('NL_division_4').appendChild(fragment);
        console.log("Added to NL Division 4");
    }
}

function resetLeague() {
    for (let i = 1; i < 10; i++) {
        console.log("team: " + "team_0" + i);
        var selectedDivision = document.getElementById('selectedDivision_0' + i).value;
        document.getElementById('selectedDivision_0' + i).value = 6;
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById('team_0' + i));
        document.getElementById('TeamsPool').appendChild(fragment);
    }
    for (let i = 10; i < 50; i++) {
        console.log("team: " + "team_0" + i);
        var selectedDivision = document.getElementById('selectedDivision_' + i).value;
        document.getElementById('selectedDivision_' + i).value = 6;
        var fragment = document.createDocumentFragment();
        selectedDivision.value = 6;
        fragment.appendChild(document.getElementById('team_' + i));
        document.getElementById('TeamsPool').appendChild(fragment);
    }
}
function restoreLeague() {
    for (let i = 1; i < 6; i++) {
        console.log("team: " + "team_0" + i);
        var selectedDivision = document.getElementById('selectedDivision_0' + i).value;
        document.getElementById('selectedDivision_0' + i).value = 0;
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById('team_0' + i));
        document.getElementById('AL_division_1').appendChild(fragment);
    }
    for (let i = 6; i < 10; i++) {
        console.log("team: " + "team_0" + i);
        var selectedDivision = document.getElementById('selectedDivision_0' + i).value;
        document.getElementById('selectedDivision_0' + i).value = 1;
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById('team_0' + i));
        document.getElementById('AL_division_2').appendChild(fragment);
    }
    for (let i = 10; i < 11; i++) {
        console.log("team: " + "team_" + i);
        var selectedDivision = document.getElementById('selectedDivision_' + i).value;
        document.getElementById('selectedDivision_' + i).value = 1;
        var fragment = document.createDocumentFragment();
        selectedDivision.value = 6;
        fragment.appendChild(document.getElementById('team_' + i));
        document.getElementById('AL_division_2').appendChild(fragment);
    }
    for (let i = 11; i < 16; i++) {
        console.log("team: " + "team_" + i);
        var selectedDivision = document.getElementById('selectedDivision_' + i).value;
        document.getElementById('selectedDivision_' + i).value = 2;
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById('team_' + i));
        document.getElementById('AL_division_3').appendChild(fragment);
    }
    for (let i = 16; i < 21; i++) {
        console.log("team: " + "team_" + i);
        var selectedDivision = document.getElementById('selectedDivision_' + i).value;
        document.getElementById('selectedDivision_' + i).value = 3;
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById('team_' + i));
        document.getElementById('NL_division_1').appendChild(fragment);
    }
    for (let i = 21; i < 26; i++) {
        console.log("team: " + "team_" + i);
        var selectedDivision = document.getElementById('selectedDivision_' + i).value;
        document.getElementById('selectedDivision_' + i).value = 4;
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById('team_' + i));
        document.getElementById('NL_division_2').appendChild(fragment);
    }
    for (let i = 26; i < 31; i++) {
        console.log("team: " + "team_" + i);
        var selectedDivision = document.getElementById('selectedDivision_' + i).value;
        document.getElementById('selectedDivision_' + i).value = 5;
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById('team_' + i));
        document.getElementById('NL_division_3').appendChild(fragment);
    }
}
function addDivision() {
    var b = document.getElementById('Add_Division_Button');
    for (let i = 1; i < 3; i++) {
        var e = document.getElementById('Extra_Division_' + i);
        if (e.style.display == 'block') {
            e.style.display = 'none';
            removeDivisionSelect();
            b.textContent = "Add Extra Divisions";
            restoreLeague();
        }
        else {
            e.style.display = 'block';
            addDivisionSelect();
            b.textContent = "Remove Extra Divisions";
        }
    }
}
function addDivisionSelect() {
    var divsToHide = document.getElementsByClassName("divisionSelect_7");
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "block";
    }
    var divsToHide = document.getElementsByClassName("divisionSelect_8");
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "block";
    }
}
function removeDivisionSelect() {
    var divsToHide = document.getElementsByClassName("divisionSelect_7");
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
    }
    var divsToHide = document.getElementsByClassName("divisionSelect_8");
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
    }
}
function compactView() {
    var e = document.getElementById('card_teaminfo_sample');
    if (e.style.display == 'none') {
        var divsToHide = document.getElementsByClassName("card-teaminfo");
        for (var i = 0; i < divsToHide.length; i++) {
            divsToHide[i].style.display = "block";
        }
        var changeCardHeight = document.getElementsByClassName("card-main");
        for (var i = 0; i < changeCardHeight.length; i++) {
            changeCardHeight[i].style.height = "62px";
        }
    }
    else {
        var divsToHide = document.getElementsByClassName("card-teaminfo");
        for (var i = 0; i < divsToHide.length; i++) {
            divsToHide[i].style.display = "none";
        }
        var changeCardHeight = document.getElementsByClassName("card-main");
        for (var i = 0; i < changeCardHeight.length; i++) {
            changeCardHeight[i].style.height = "31px";
        }
        var teamedit = document.getElementsByClassName("card-teamedit");
        for (var i = 0; i < teamedit.length; i++) {
            teamedit[i].style.display = "none";
        }
        var dropdown = document.getElementsByClassName("card-dropdown");
        for (var i = 0; i < dropdown.length; i++) {
            dropdown[i].style.display = "none";
        }
        var b = document.getElementById('Edit_Mode_Button');
        b.textContent = "Edit Mode";
        finalizeDivisions();
        finalizeEdits();
    }
}
function alignment1() {
    restoreLeague();
}
function alignment2() {
    restoreLeague();
    document.getElementById('selectedDivision_15').value = 4;
    changeDivision('_15');
}
function alignment3() {
    restoreLeague();
    document.getElementById('selectedDivision_15').value = 4;
    changeDivision('_15');
    document.getElementById('selectedDivision_29').value = 6;
    changeDivision('_29');
    document.getElementById('selectedDivision_03').value = 6;
    changeDivision('_03');
    document.getElementById('selectedDivision_10').value = 0;
    changeDivision('_10');
    document.getElementById('selectedDivision_25').value = 1;
    changeDivision('_25');
}
function editteam(n) {
    var e = document.getElementById("team" + n);

    if (e.className == 'card-main-edit') {
        document.getElementById("team" + n).className = "card-main";
        document.getElementById("editinput" + n).style.display = "none";
        document.getElementById("editcity" + n).contentEditable = "false";
        document.getElementById("editnickname" + n).contentEditable = "false";
        document.getElementById("editest" + n).contentEditable = "false";
        document.getElementById("editlocation" + n).contentEditable = "false";
        document.getElementById("editcity" + n).className = "card-teamname";
        document.getElementById("editnickname" + n).className = "card-teamname";
        document.getElementById("editest" + n).className = "card-teamest";
        document.getElementById("editlocation" + n).className = "card-teamest";

        console.log("team: " + "team" + n + " Removed from Edit Mode");
    }
    else {
        document.getElementById("team" + n).className = "card-main-edit";
        document.getElementById("editinput" + n).style.display = "block";
        document.getElementById("editcity" + n).contentEditable = "true";
        document.getElementById("editnickname" + n).contentEditable = "true";
        document.getElementById("editest" + n).contentEditable = "true";
        document.getElementById("editlocation" + n).contentEditable = "true";
        document.getElementById("editcity" + n).className = "card-teamname-edit";
        document.getElementById("editnickname" + n).className = "card-teamname-edit";
        document.getElementById("editest" + n).className = "card-teamest-edit";
        document.getElementById("editlocation" + n).className = "card-teamest-edit";
        console.log("team: " + "team" + n + " Put in Edit Mode");
    }
}
function editorMode() {
    var e = document.getElementById('card_teamedit_sample');
    if (e.style.display == 'block') {
        var teamedit = document.getElementsByClassName("card-teamedit");
        for (var i = 0; i < teamedit.length; i++) {
            teamedit[i].style.display = "none";
        }
        var dropdown = document.getElementsByClassName("card-dropdown");
        for (var i = 0; i < dropdown.length; i++) {
            dropdown[i].style.display = "none";
        }
        var b = document.getElementById('Edit_Mode_Button');
        b.textContent = "Edit Mode";
        finalizeDivisions();
        finalizeEdits();
    }
    else {
        var teamedit = document.getElementsByClassName("card-teamedit");
        for (var i = 0; i < teamedit.length; i++) {
            teamedit[i].style.display = "block";
        }
        var dropdown = document.getElementsByClassName("card-dropdown");
        for (var i = 0; i < dropdown.length; i++) {
            dropdown[i].style.display = "block";
        }
        var divsToHide = document.getElementsByClassName("card-teaminfo");
        for (var i = 0; i < divsToHide.length; i++) {
            divsToHide[i].style.display = "block";
        }
        var changeCardHeight = document.getElementsByClassName("card-main");
        for (var i = 0; i < changeCardHeight.length; i++) {
            changeCardHeight[i].style.height = "62px";
        }
        var b = document.getElementById('Edit_Mode_Button');
        b.textContent = "Exit Edit Mode";
        editDivisions();
    }
}
function validate(e) {
    const text = e.target.value;
    editorMode();
    alignment3();

}
function changeColor(n) {
    var color = document.getElementById('teamcolor' + n).value;
    document.getElementById("team" + n).style.backgroundColor = color;
    console.log("team: " + "team" + n + " Color Edited");
    console.log("New Color: " + color);
}
function finalizeEdits() {
    for (let n = 1; n < 10; n++) {
        document.getElementById("team_0" + n).className = "card-main";
        document.getElementById("editinput_0" + n).style.display = "none";
        document.getElementById("editcity_0" + n).contentEditable = "false";
        document.getElementById("editnickname_0" + n).contentEditable = "false";
        document.getElementById("editest_0" + n).contentEditable = "false";
        document.getElementById("editlocation_0" + n).contentEditable = "false";
        document.getElementById("editcity_0" + n).className = "card-teamname";
        document.getElementById("editnickname_0" + n).className = "card-teamname";
        document.getElementById("editest_0" + n).className = "card-teamest";
        document.getElementById("editlocation_0" + n).className = "card-teamest";

        console.log("team: " + "team_0" + n + " Edits Finalized");
    }
    for (let n = 10; n < 50; n++) {
        document.getElementById("team_" + n).className = "card-main";
        document.getElementById("editinput_" + n).style.display = "none";
        document.getElementById("editcity_" + n).contentEditable = "false";
        document.getElementById("editnickname_" + n).contentEditable = "false";
        document.getElementById("editest_" + n).contentEditable = "false";
        document.getElementById("editlocation_" + n).contentEditable = "false";
        document.getElementById("editcity_" + n).className = "card-teamname";
        document.getElementById("editnickname_" + n).className = "card-teamname";
        document.getElementById("editest_" + n).className = "card-teamest";
        document.getElementById("editlocation_" + n).className = "card-teamest";

        console.log("team: " + "team_" + n + " Edits Finalized");
    }
}
function editDivisions() {
    document.getElementById("division_label_0").contentEditable = "true";
    document.getElementById("division_label_1").contentEditable = "true";
    document.getElementById("division_label_2").contentEditable = "true";
    document.getElementById("division_label_3").contentEditable = "true";
    document.getElementById("division_label_4").contentEditable = "true";
    document.getElementById("division_label_5").contentEditable = "true";
    document.getElementById("division_label_8").contentEditable = "true";
    document.getElementById("division_label_7").contentEditable = "true";
    var divisionlabel = document.getElementsByClassName("league-division-label");
    for (var i = 0; i < divisionlabel.length; i++) {
        divisionlabel[i].style.border = "solid";
    }
}
function finalizeDivisions() {
    document.getElementById("division_label_0").contentEditable = "false";
    document.getElementById("division_label_1").contentEditable = "false";
    document.getElementById("division_label_2").contentEditable = "false";
    document.getElementById("division_label_3").contentEditable = "false";
    document.getElementById("division_label_4").contentEditable = "false";
    document.getElementById("division_label_5").contentEditable = "false";
    document.getElementById("division_label_8").contentEditable = "false";
    document.getElementById("division_label_7").contentEditable = "false";
    var divisionlabel = document.getElementsByClassName("league-division-label");
    for (var i = 0; i < divisionlabel.length; i++) {
        divisionlabel[i].style.border = "none";
    }
}
function changeDivisionName(n) {
    var x = document.getElementById("division_label" + n).innerHTML;

    var d = document.getElementsByClassName("divisionSelect" + n);
    for (var i = 0; i < d.length; i++) {
        d[i].innerHTML = x;
    }
    console.log("Division name changed");

}
var expansionTeams = 0;
function expandLeague() {
    expansionTeams++;
    if (expansionTeams > 0) {
        var expansionTeam1 = document.getElementById("team_31");
        if (expansionTeam1.style.display = "none") {
            expansionTeam1.style.display = "block";
        }
    }
    if (expansionTeams > 1) {
        var expansionTeam2 = document.getElementById("team_32");
        if (expansionTeam2.style.display = "none") {
            expansionTeam2.style.display = "block";
        }
    }
    if (expansionTeams > 2) {
        var expansionTeam3 = document.getElementById("team_33");
        if (expansionTeam3.style.display = "none") {
            expansionTeam3.style.display = "block";
        }
    }
    if (expansionTeams > 3) {
        var expansionTeam4 = document.getElementById("team_34");
        if (expansionTeam4.style.display = "none") {
            expansionTeam4.style.display = "block";
        }
    }
    if (expansionTeams > 4) {
        var expansionTeam5 = document.getElementById("team_35");
        if (expansionTeam5.style.display = "none") {
            expansionTeam5.style.display = "block";
        }
    }
    if (expansionTeams > 5) {
        var expansionTeam6 = document.getElementById("team_36");
        if (expansionTeam6.style.display = "none") {
            expansionTeam6.style.display = "block";
        }
    }
    if (expansionTeams > 6) {
        var expansionTeam7 = document.getElementById("team_37");
        if (expansionTeam7.style.display = "none") {
            expansionTeam7.style.display = "block";
        }
    }
    if (expansionTeams > 7) {
        var expansionTeam8 = document.getElementById("team_38");
        if (expansionTeam8.style.display = "none") {
            expansionTeam8.style.display = "block";
        }
    }
    if (expansionTeams > 8) {
        var expansionTeam9 = document.getElementById("team_39");
        if (expansionTeam9.style.display = "none") {
            expansionTeam9.style.display = "block";
        }
    }
    if (expansionTeams > 9) {
        var expansionTeam10 = document.getElementById("team_40");
        if (expansionTeam10.style.display = "none") {
            expansionTeam10.style.display = "block";
        }
    }
}
function toggleDarkmode() {
    var n = document.getElementById("darkmodeIcon").name;
    if (n === "moon") {
        var b = document.getElementById("darkmodeIcon");
        b.name = "sunny";
        b.style.color = "snow";
        var l = document.getElementsByClassName("league-division-label");
        for (var i = 0; i < l.length; i++) {
            l[i].style.color = "snow";
        }
        var l = document.getElementsByClassName("league-functions-label");
        for (var i = 0; i < l.length; i++) {
            l[i].style.color = "snow";
        }
        var f = document.getElementsByClassName("functions-buttons");
        for (var i = 0; i < f.length; i++) {
            f[i].style.color = "snow";
            f[i].style.border = "2px solid snow";
        }
        var t = document.getElementById("toolbarText");
        t.style.color = "snow";
    }
    else {
        var b = document.getElementById("darkmodeIcon");
        b.name = "moon";
        b.style.color = "black";
        var l = document.getElementsByClassName("league-division-label");
        for (var i = 0; i < l.length; i++) {
            l[i].style.color = "black";
        }
        var l = document.getElementsByClassName("league-functions-label");
        for (var i = 0; i < l.length; i++) {
            l[i].style.color = "black";
        }
        var f = document.getElementsByClassName("functions-buttons");
        for (var i = 0; i < f.length; i++) {
            f[i].style.color = "black";
            f[i].style.border = "2px solid black";
        }
        var t = document.getElementById("toolbarText");
        t.style.color = "black";
    }
    var body = document.body;
    body.classList.toggle("body-dark");
}