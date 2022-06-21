function tva() {
    var prixHT = Number(document.getElementById("ht").Value);
    var prixTVA = prixHT * 0.89;
    var prixTTC = prixHT + prixTVA;
    document.getElementById("prix").innerHTML = "Votre prix avec tva est de" + prixTTC + "Euros";
}