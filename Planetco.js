var river = document.getElementById("river1");
var trees = document.getElementById("tree1");
var crops = document.getElementById("crops1");
var mountains = document.getElementById("mountains1");
var gold = document.getElementById("gold1");
var butterflies = document.getElementById("butterflies1");
var pickeditems = [];
total = 0;
var userwon = document.getElementById("userwon1");
var userlost = document.getElementById("userlost1")

river.addEventListener("click", additem);
trees.addEventListener("click", additem);
crops.addEventListener("click", additem);
mountains.addEventListener("click", additem);
gold.addEventListener("click", additem);
butterflies.addEventListener("click", additem);


function additem(event) {
    total += 350;
    document.getElementById("itembought1").innerHTML = "river";

}


document.getElementById("purchase1").addEventListener("click", runPurchase);

function runPurchase() {
    document.getElementById("gamesection").classList.add("hidden");

    document.getElementById("spent1").innerHTML = total;

    document.getElementById("gooditem").innerHTML = "river";

    if(total <= 500) {
        userwon.classList.remove("hidden");
    } else {
        userlost.classList.remove("hidden");
    }

    document.getElementById("purchase1").classList.add("hidden");

}


