var nameAcc;
var level;
var idAcc;
var tier;
var rank;
var wins;
var loses;


var id;
var nombre;
var alias;
var lugarNacimiento;
var imagen;

function searchSummoner() {
    let summName = document.getElementById("nomInvocador").value;
    var request = new XMLHttpRequest();
    request.open('GET', 'https://superheroapi.com/api/122106821030230357/search/' + summName, true);
    request.onload = function () {

        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(this.response);
            console.log(data);
            id = data.id;
            nombre = data.name;
            idAcc = data.id;  

            }
            else {
                console.log('error');
            }
        
    }
    request.send();
    window.location.href = "index3.html" + "#" + nameAcc
    + "#" + level + "#" + idAcc + "#" + tier +
    "#" + rank + "#" + wins + "#" + loses;
}

function MostrarJSON() {
    var JSON1 = {
        nameAcc,
        level,
        tier,
        rank,
        wins,
        loses,
    };
    var JSONString = JSON.stringify(JSON1);
    alert(JSONString);
}

function MostrarXML() {
    var xmlContent = '<DatosInvocador>' + '<NombreInvocador>' + nameAcc + '</NombreInvocador>' +
        '<Nivel>' + level + '</Nivel>' +
        '<Division>' + tier + '</Division>' +
        '<Liga>' + rank + '</Liga>' +
        '<Victorias>' + wins + '</Victorias>' +
        '<Derrotas>' + loses + '</Derrotas>' + '</DatosInvocador>';;

    var parser = new DOMParser();
    var xmlTransformado = parser.parseFromString(xmlContent, 'text/xml');
    var xmlVisible = new XMLSerializer().serializeToString(xmlTransformado);
    alert(xmlVisible);
}
window.onload = function() {
    var hashParams = window.location.hash.substring(1).split("#");
    var nameAcc = hashParams[0];
    var level = hashParams[1];
    var idAcc = hashParams[2];
    var tier = hashParams[3];
    var rank = hashParams[4];
    var wins = hashParams[5];
    var loses = hashParams[6];

    console.log("Nombre: " + nameAcc);
    console.log("Nivel: " + level);
    console.log("ID de Invocador: " + idAcc);
    console.log("Tier: " + tier);
    console.log("Rank: " + rank);
    console.log("Victorias: " + wins);
    console.log("Derrotas: " + loses);
};