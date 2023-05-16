const $MAT111=document.getElementById("MAT111");
const $MAT112=document.getElementById("MAT112");
const $INF111=document.getElementById("INF111");
const $INF112=document.getElementById("INF112");
const $LIN111=document.getElementById("LIN111");
const $AUD111=document.getElementById("AUD111");
const $MAT121=document.getElementById("MAT121");
const $FIS111=document.getElementById("FIS111");
const $INF121=document.getElementById("INF121");
const $INF122=document.getElementById("INF122");
const $MAT122=document.getElementById("MAT122");
const $LIN121=document.getElementById("LIN121");
const $MAT211=document.getElementById("MAT211");
const $FIS211=document.getElementById("FIS211");
const $INF211=document.getElementById("INF211");
const $INF212=document.getElementById("INF212");
const $MAT212=document.getElementById("MAT212");
const $MAT213=document.getElementById("MAT213");
const $ELT121=document.getElementById("ELT121");
const $MAT221=document.getElementById("MAT221");
const $IEL221=document.getElementById("IEL221");
const $MAT222=document.getElementById("MAT222");
const $ADM221=document.getElementById("ADM221");
const $IEL222=document.getElementById("IEL222");
const $INF221=document.getElementById("INF221");
const $ELT122=document.getElementById("ELT122");
const $INF311=document.getElementById("INF311");
const $INF312=document.getElementById("INF312");
const $MAT311=document.getElementById("MAT311");
const $IEL311=document.getElementById("IEL311");
const $ECO311=document.getElementById("ECO311");
const $INF301=document.getElementById("INF301");
const $ECO321=document.getElementById("ECO321");
const $IEL321=document.getElementById("IEL321");
const $INF321=document.getElementById("INF321");
const $INF322=document.getElementById("INF322");
const $MAT322=document.getElementById("MAT322");
const $IEL411=document.getElementById("IEL411");
const $INF411=document.getElementById("INF411");
const $INF412=document.getElementById("INF412");
const $INF413=document.getElementById("INF413");
const $INF401=document.getElementById("INF401");
const $INF414=document.getElementById("INF414");
const $INF421=document.getElementById("INF421");
const $INF422=document.getElementById("INF422");
const $INF423=document.getElementById("INF423");
const $IEL421=document.getElementById("IEL421");
const $INF424=document.getElementById("INF424");
const $INF511=document.getElementById("INF511");
const $IEL511=document.getElementById("IEL511");
const $DER511=document.getElementById("DER511");
const $INF501=document.getElementById("INF501");
const $OPT003=document.getElementById("OPT003");
const $INF521=document.getElementById("INF521");
const $OPT004=document.getElementById("OPT004");

// #FFA36A color requisito
// #AEEBFF color materia selecionada
function cal1(){
    todoBlanco();
    $MAT111.style.background="#AEEBFF";
}
function algL(){
    todoBlanco();
    $MAT112.style.background="#AEEBFF";
}
function prg1(){
    todoBlanco();
    $INF111.style.background="#AEEBFF";
}
function fund(){
    todoBlanco();
    $INF112.style.background="#AEEBFF";
}
function ingl1(){
    todoBlanco();
    $LIN111.style.background="#AEEBFF";
}
function scont(){
    todoBlanco();
    $AUD111.style.background="#AEEBFF";
}


function cal2(){
    todoBlanco();
    $MAT121.style.background="#AEEBFF";
    $MAT111.style.background="#FFA36A";
}
function fis1(){
    todoBlanco();
    $FIS111.style.background="#AEEBFF";
    $MAT111.style.background="#FFA36A";
}
function prg2(){
    todoBlanco();
    $INF121.style.background="#AEEBFF";
    $INF111.style.background="#FFA36A";
}
function intrSist(){
    todoBlanco();
    $INF122.style.background="#AEEBFF";
    $INF112.style.background="#FFA36A";
}
function estDes(){
    todoBlanco();
    $MAT122.style.background="#AEEBFF";
    $MAT112.style.background="#FFA36A";
}
function ingl2(){
    todoBlanco();
    $LIN121.style.background="#AEEBFF";
    $LIN111.style.background="#FFA36A";
}


function cal3(){
    todoBlanco();
    $MAT211.style.background="#AEEBFF";
    $MAT121.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
}
function fis2(){
    todoBlanco();
    $FIS211.style.background="#AEEBFF";
    $FIS111.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
}
function prg3(){
    todoBlanco();
    $INF211.style.background="#AEEBFF";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}
function talf(){
    todoBlanco();
    $INF212.style.background="#AEEBFF";
    $INF122.style.background="#FFA36A";
    $INF112.style.background="#FFA36A";
}
function teoProb(){
    todoBlanco();
    $MAT212.style.background="#AEEBFF";
    $MAT122.style.background="#FFA36A";
    $MAT112.style.background="#FFA36A";
}
function grafos(){
    todoBlanco();
    $MAT213.style.background="#AEEBFF";
    $MAT122.style.background="#FFA36A";
    $MAT112.style.background="#FFA36A";
}
function lider(){
    todoBlanco();
    $ELT121.style.background="#1bf037";
}


function cal4(){
    todoBlanco();
    $MAT221.style.background="#AEEBFF";
    $MAT211.style.background="#FFA36A";
    $MAT121.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
}
function senales(){
    todoBlanco();
    $IEL221.style.background="#AEEBFF";
    $FIS211.style.background="#FFA36A";
    $FIS111.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
}
function analNum(){
    todoBlanco();
    $MAT222.style.background="#AEEBFF";
    $MAT212.style.background="#FFA36A";
    $MAT213.style.background="#FFA36A";
    $MAT122.style.background="#FFA36A";
    $MAT112.style.background="#FFA36A";
}
function admOrg(){
    todoBlanco();
    $ADM221.style.background="#AEEBFF";
    $AUD111.style.background="#FFA36A";
}
function arquCom(){
    todoBlanco();
    $IEL222.style.background="#AEEBFF";
    $INF212.style.background="#FFA36A";
    $INF122.style.background="#FFA36A";
    $INF112.style.background="#FFA36A";
}
function prg4(){
    todoBlanco();
    $INF221.style.background="#AEEBFF";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}
function metoInves(){
    todoBlanco();
    $ELT122.style.background="#1bf037";
}

// semestre 5
function baseD1(){
    todoBlanco();
    $INF311.style.background="#AEEBFF";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}
function analSist(){
    todoBlanco();
    $INF312.style.background="#AEEBFF";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
}
function invstOpe(){
    todoBlanco();
    $MAT311.style.background="#AEEBFF";
    $MAT221.style.background="#FFA36A";
    $MAT222.style.background="#FFA36A";
    $MAT211.style.background="#FFA36A";
    $MAT212.style.background="#FFA36A";
    $MAT213.style.background="#FFA36A";
    $MAT121.style.background="#FFA36A";
    $MAT122.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
    $MAT112.style.background="#FFA36A";
}
function redes1(){
    todoBlanco();
    $IEL311.style.background="#AEEBFF";
    $IEL221.style.background="#FFA36A";
    $IEL222.style.background="#FFA36A";
    $FIS211.style.background="#FFA36A";
    $INF212.style.background="#FFA36A";
    $FIS111.style.background="#FFA36A";
    $INF122.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
    $INF112.style.background="#FFA36A";
}
function ecoGene(){
    todoBlanco();
    $ECO311.style.background="#AEEBFF";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
}
function taller1(){
    todoBlanco();
    $INF301.style.background="#AEEBFF";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}


//semestre 6
function preEvalu(){
    todoBlanco();
    $ECO321.style.background="#AEEBFF";
    $ECO311.style.background="#FFA36A";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
}
function redes2(){
    todoBlanco();
    $IEL321.style.background="#AEEBFF";
    $IEL311.style.background="#FFA36A";
    $IEL221.style.background="#FFA36A";
    $IEL222.style.background="#FFA36A";
    $FIS211.style.background="#FFA36A";
    $INF212.style.background="#FFA36A";
    $FIS111.style.background="#FFA36A";
    $INF122.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
    $INF112.style.background="#FFA36A";
}
function baseD2(){
    todoBlanco();
    $INF321.style.background="#AEEBFF";
    $INF311.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}
function analSist2(){
    todoBlanco();
    $INF322.style.background="#AEEBFF";
    $INF312.style.background="#FFA36A";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
}
function invstOpe2(){
    todoBlanco();
    $MAT322.style.background="#AEEBFF";
    $MAT311.style.background="#FFA36A";
    $MAT221.style.background="#FFA36A";
    $MAT222.style.background="#FFA36A";
    $MAT211.style.background="#FFA36A";
    $MAT212.style.background="#FFA36A";
    $MAT213.style.background="#FFA36A";
    $MAT121.style.background="#FFA36A";
    $MAT122.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
    $MAT112.style.background="#FFA36A";
}


//semestre 7
function redes3(){
    todoBlanco();
    $IEL411.style.background="#AEEBFF";
    $IEL321.style.background="#FFA36A";
    $IEL311.style.background="#FFA36A";
    $IEL221.style.background="#FFA36A";
    $IEL222.style.background="#FFA36A";
    $FIS211.style.background="#FFA36A";
    $INF212.style.background="#FFA36A";
    $FIS111.style.background="#FFA36A";
    $INF122.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
    $INF112.style.background="#FFA36A";
}
function baseD3(){
    todoBlanco();
    $INF411.style.background="#AEEBFF";
    $INF321.style.background="#FFA36A";
    $INF311.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}
function ingSoft(){
    todoBlanco();
    $INF412.style.background="#AEEBFF";
    $INF322.style.background="#FFA36A";
    $INF312.style.background="#FFA36A";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
}
function tecMult(){
    todoBlanco();
    $INF413.style.background="#AEEBFF";
    $INF301.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}
function taller2(){
    todoBlanco();
    $INF401.style.background="#AEEBFF";
    $INF301.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}
function optat(){
    todoBlanco();
    $INF414.style.background="#AEEBFF";
    $INF301.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}


//semestre 8
function intlArtf(){
    todoBlanco();
    $INF421.style.background="#AEEBFF";
    $INF412.style.background="#FFA36A";
    $INF322.style.background="#FFA36A";
    $INF312.style.background="#FFA36A";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
    $MAT322.style.background="#FFA36A";
    $MAT311.style.background="#FFA36A";
    $MAT221.style.background="#FFA36A";
    $MAT222.style.background="#FFA36A";
    $MAT211.style.background="#FFA36A";
    $MAT212.style.background="#FFA36A";
    $MAT213.style.background="#FFA36A";
    $MAT121.style.background="#FFA36A";
    $MAT122.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
    $MAT112.style.background="#FFA36A";
}
function ingSoft2(){
    todoBlanco();
    $INF422.style.background="#AEEBFF";
    $INF412.style.background="#FFA36A";
    $INF322.style.background="#FFA36A";
    $INF312.style.background="#FFA36A";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
}
function tectPrgRed(){
    todoBlanco();
    $INF423.style.background="#AEEBFF";
    $INF411.style.background="#FFA36A";
    $INF321.style.background="#FFA36A";
    $INF311.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}
function labSegRed(){
    todoBlanco();
    $IEL421.style.background="#AEEBFF";
    $IEL411.style.background="#FFA36A";
    $IEL321.style.background="#FFA36A";
    $IEL311.style.background="#FFA36A";
    $IEL221.style.background="#FFA36A";
    $IEL222.style.background="#FFA36A";
    $FIS211.style.background="#FFA36A";
    $INF212.style.background="#FFA36A";
    $FIS111.style.background="#FFA36A";
    $INF122.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
    $INF112.style.background="#FFA36A";
}
function optat2(){
    todoBlanco();
    $INF424.style.background="#AEEBFF";
    $INF414.style.background="#FFA36A";
    $INF301.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}


//semestre 9
function robt(){
    todoBlanco();
    $INF511.style.background="#AEEBFF";
    $INF421.style.background="#FFA36A";
    $INF412.style.background="#FFA36A";
    $INF322.style.background="#FFA36A";
    $INF312.style.background="#FFA36A";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
    $MAT322.style.background="#FFA36A";
    $MAT311.style.background="#FFA36A";
    $MAT221.style.background="#FFA36A";
    $MAT222.style.background="#FFA36A";
    $MAT211.style.background="#FFA36A";
    $MAT212.style.background="#FFA36A";
    $MAT213.style.background="#FFA36A";
    $MAT121.style.background="#FFA36A";
    $MAT122.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
    $MAT112.style.background="#FFA36A";
}
function tranzVozVideo(){
    todoBlanco();
    $IEL511.style.background="#AEEBFF";
    $IEL421.style.background="#FFA36A";
    $IEL411.style.background="#FFA36A";
    $IEL321.style.background="#FFA36A";
    $IEL311.style.background="#FFA36A";
    $IEL221.style.background="#FFA36A";
    $IEL222.style.background="#FFA36A";
    $FIS211.style.background="#FFA36A";
    $INF212.style.background="#FFA36A";
    $FIS111.style.background="#FFA36A";
    $INF122.style.background="#FFA36A";
    $MAT111.style.background="#FFA36A";
    $INF112.style.background="#FFA36A";
}
function legisl(){
    todoBlanco();
    $DER511.style.background="#AEEBFF";
    $INF422.style.background="#FFA36A";
    $INF412.style.background="#FFA36A";
    $INF322.style.background="#FFA36A";
    $INF312.style.background="#FFA36A";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
}
function taller3(){
    todoBlanco();
    $INF501.style.background="#AEEBFF";
    $INF401.style.background="#FFA36A";
    $INF301.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}
function optat3(){
    todoBlanco();
    $OPT003.style.background="#AEEBFF";
    $INF424.style.background="#FFA36A";
    $INF414.style.background="#FFA36A";
    $INF301.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}


//semestre 10
function auditoria(){
    todoBlanco();
    $INF521.style.background="#AEEBFF";
    $DER511.style.background="#FFA36A";
    $INF422.style.background="#FFA36A";
    $INF412.style.background="#FFA36A";
    $INF322.style.background="#FFA36A";
    $INF312.style.background="#FFA36A";
    $ADM221.style.background="#FFA36A";
    $AUD111.style.background="#FFA36A";
}
function optat4(){
    todoBlanco();
    $OPT004.style.background="#AEEBFF";
    $OPT003.style.background="#FFA36A";
    $INF424.style.background="#FFA36A";
    $INF414.style.background="#FFA36A";
    $INF301.style.background="#FFA36A";
    $INF221.style.background="#FFA36A";
    $INF211.style.background="#FFA36A";
    $INF121.style.background="#FFA36A";
    $INF111.style.background="#FFA36A";
}


function todoBlanco(){
    // location.reload();
    // TABLA.load();
    $MAT111.style.background="rgba(255, 0, 0, 0)";
    $MAT112.style.background="rgba(255, 0, 0, 0)";
    $INF111.style.background="rgba(255, 0, 0, 0)";
    $INF112.style.background="rgba(255, 0, 0, 0)";
    $LIN111.style.background="rgba(255, 0, 0, 0)";
    $AUD111.style.background="rgba(255, 0, 0, 0)";
    $MAT121.style.background="rgba(255, 0, 0, 0)";
    $FIS111.style.background="rgba(255, 0, 0, 0)";
    $INF121.style.background="rgba(255, 0, 0, 0)";
    $INF122.style.background="rgba(255, 0, 0, 0)";
    $MAT122.style.background="rgba(255, 0, 0, 0)";
    $LIN121.style.background="rgba(255, 0, 0, 0)";
    $MAT211.style.background="rgba(255, 0, 0, 0)";
    $FIS211.style.background="rgba(255, 0, 0, 0)";
    $INF211.style.background="rgba(255, 0, 0, 0)";
    $INF212.style.background="rgba(255, 0, 0, 0)";
    $MAT212.style.background="rgba(255, 0, 0, 0)";
    $MAT213.style.background="rgba(255, 0, 0, 0)";
    $ELT121.style.background="rgba(255, 0, 0, 0)";
    $MAT221.style.background="rgba(255, 0, 0, 0)";
    $IEL221.style.background="rgba(255, 0, 0, 0)";
    $MAT222.style.background="rgba(255, 0, 0, 0)";
    $ADM221.style.background="rgba(255, 0, 0, 0)";
    $IEL222.style.background="rgba(255, 0, 0, 0)";
    $INF221.style.background="rgba(255, 0, 0, 0)";
    $ELT122.style.background="rgba(255, 0, 0, 0)";
    $INF311.style.background="rgba(255, 0, 0, 0)";
    $INF312.style.background="rgba(255, 0, 0, 0)";
    $MAT311.style.background="rgba(255, 0, 0, 0)";
    $IEL311.style.background="rgba(255, 0, 0, 0)";
    $ECO311.style.background="rgba(255, 0, 0, 0)";
    $INF301.style.background="rgba(255, 0, 0, 0)";
    $ECO321.style.background="rgba(255, 0, 0, 0)";
    $IEL321.style.background="rgba(255, 0, 0, 0)";
    $INF321.style.background="rgba(255, 0, 0, 0)";
    $INF322.style.background="rgba(255, 0, 0, 0)";
    $MAT322.style.background="rgba(255, 0, 0, 0)";
    $IEL411.style.background="rgba(255, 0, 0, 0)";
    $INF411.style.background="rgba(255, 0, 0, 0)";
    $INF412.style.background="rgba(255, 0, 0, 0)";
    $INF413.style.background="rgba(255, 0, 0, 0)";
    $INF401.style.background="rgba(255, 0, 0, 0)";
    $INF414.style.background="rgba(255, 0, 0, 0)";
    $INF421.style.background="rgba(255, 0, 0, 0)";
    $INF422.style.background="rgba(255, 0, 0, 0)";
    $INF423.style.background="rgba(255, 0, 0, 0)";
    $IEL421.style.background="rgba(255, 0, 0, 0)";
    $INF424.style.background="rgba(255, 0, 0, 0)";
    $INF511.style.background="rgba(255, 0, 0, 0)";
    $IEL511.style.background="rgba(255, 0, 0, 0)";
    $DER511.style.background="rgba(255, 0, 0, 0)";
    $INF501.style.background="rgba(255, 0, 0, 0)";
    $OPT003.style.background="rgba(255, 0, 0, 0)";
    $INF521.style.background="rgba(255, 0, 0, 0)";
    $OPT004.style.background="rgba(255, 0, 0, 0)";
}
function Notroncal(){
    todoBlanco();
    $ELT121.style.background="#1bf037";
    $ELT122.style.background="#1bf037";
}
function troncal(){
    todoBlanco();
    $MAT111.style.background="#AEEBFF";
    $MAT112.style.background="#AEEBFF";
    $INF111.style.background="#AEEBFF";
    $INF112.style.background="#AEEBFF";
    $LIN111.style.background="#AEEBFF";
    $AUD111.style.background="#AEEBFF";
    $MAT121.style.background="#AEEBFF";
    $FIS111.style.background="#AEEBFF";
    $INF121.style.background="#AEEBFF";
    $INF122.style.background="#AEEBFF";
    $MAT122.style.background="#AEEBFF";
    $LIN121.style.background="#AEEBFF";
    $MAT211.style.background="#AEEBFF";
    $FIS211.style.background="#AEEBFF";
    $INF211.style.background="#AEEBFF";
    $INF212.style.background="#AEEBFF";
    $MAT212.style.background="#AEEBFF";
    $MAT213.style.background="#AEEBFF";
    $MAT221.style.background="#AEEBFF";
    $IEL221.style.background="#AEEBFF";
    $MAT222.style.background="#AEEBFF";
    $ADM221.style.background="#AEEBFF";
    $IEL222.style.background="#AEEBFF";
    $INF221.style.background="#AEEBFF";
    $INF311.style.background="#AEEBFF";
    $INF312.style.background="#AEEBFF";
    $MAT311.style.background="#AEEBFF";
    $IEL311.style.background="#AEEBFF";
    $ECO311.style.background="#AEEBFF";
    $INF301.style.background="#AEEBFF";
    $ECO321.style.background="#AEEBFF";
    $IEL321.style.background="#AEEBFF";
    $INF321.style.background="#AEEBFF";
    $INF322.style.background="#AEEBFF";
    $MAT322.style.background="#AEEBFF";
    $IEL411.style.background="#AEEBFF";
    $INF411.style.background="#AEEBFF";
    $INF412.style.background="#AEEBFF";
    $INF413.style.background="#AEEBFF";
    $INF401.style.background="#AEEBFF";
    $INF414.style.background="#AEEBFF";
    $INF421.style.background="#AEEBFF";
    $INF422.style.background="#AEEBFF";
    $INF423.style.background="#AEEBFF";
    $IEL421.style.background="#AEEBFF";
    $INF424.style.background="#AEEBFF";
    $INF511.style.background="#AEEBFF";
    $IEL511.style.background="#AEEBFF";
    $DER511.style.background="#AEEBFF";
    $INF501.style.background="#AEEBFF";
    $OPT003.style.background="#AEEBFF";
    $INF521.style.background="#AEEBFF";
    $OPT004.style.background="#AEEBFF";
}