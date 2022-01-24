// console.log(document.querySelector(".plus"));
// console.log(document.getElementsByClassName("plus"));
//add quantity
var btnAddTag = document.getElementsByClassName("plus");
// console.log(btnAddTag);
for (let i = 0; i < btnAddTag.length; i++) {
  btnAddTag[i].addEventListener("click", increment);
}
function increment(event) {
  // target win saret evenement !!!!!!!!!!!!!!!!!; bch ta3ref inta win !!! position !!!!!!!
  var btnplus = event.target;
  //   console.log(btnplus);
  var divelemnt = btnplus.parentElement;
  //   console.log(divelemnt);
  var quantitytag = divelemnt.querySelector("p");
  //   console.log(quantitytag);
  var quantity = quantitytag.innerHTML;
  //   console.log(quantity);
  quantity++;
  //   console.log(quantity);
  quantitytag.innerHTML = quantity;
  var trTag = divelemnt.parentElement.parentElement;
  //   console.log(trTag);
  var priceTag = trTag.querySelector(".Price");
  //   console.log(priceTag);
  var unitpriceTag = trTag.querySelector(".unitPrice");
  //   console.log(unitpriceTag);
  var price = priceTag.innerHTML;
  //   console.log(price);
  var unitprice = unitpriceTag.innerHTML;
  //   console.log(unitprice);
  price = unitprice * quantity;
  //   console.log(price);
  priceTag.innerHTML = price;
}
// total price
var checktag = document.getElementsByClassName("check");
// console.log(checktag);
for (let i = 0; i < checktag.length; i++) {
  checktag[i].addEventListener("click", totalprix);
}
function totalprix(e) {
  var tot = Number(document.getElementById("total").innerHTML);
  //   console.log(tot);
  var price = Number(
    e.target.parentElement.parentElement.querySelector(".Price").innerHTML
  );
  //console.log(price);

  if (e.target.checked) {
    tot += price;
    console.log(tot);
  } else {
    tot -= price;
    console.log(tot);
  }
  document.getElementById("total").innerHTML = tot;
}