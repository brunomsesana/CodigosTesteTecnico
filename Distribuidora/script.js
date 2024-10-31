const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const Outros = 19849.53;

let soma = SP + RJ + MG + ES + Outros;
let porcento = soma / 100;
let porcentoSP = SP / porcento;
let porcentoRJ = RJ / porcento;
let porcentoMG = MG / porcento;
let porcentoES = ES / porcento;
let porcentoOutros = Outros / porcento;

alert("SP: " + porcentoSP + "% / RJ: " + porcentoRJ + "% / MG: " + porcentoMG + "% / ES: " + porcentoES + "% / Outros: " + porcentoOutros + "%")