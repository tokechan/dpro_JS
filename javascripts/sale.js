const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = priceElement.value;
  const number = numberElement.value;
  let purchase = {
    price: parseInt(price),
    number: parseInt(number),
  };

  let newPurchase = true;

  purchases.forEach((item) => {
    if(item.price === purchase.price) {
        newPurchase = false;
    }
  })

  if (purchases.length < 1 || newPurchase) {
    purchases.push(purchase);
  } else {
        for (let i = 0; i < purchase.length; i++) {
        if(purchase[i].price === purchase.price) {
           purchases[i].number += purchase.number;
    }
  }
}
  window.alert(`${display()}\n小計は${subtotal()}円です`);
  priceElement.value = "";
  numberElement.value = "";     
};



function display() {
    // let string = "";
    // for (let i = 0; i < purchases.length; i++) {
    //     string += `${purchases[i].price}円が${purchases[i].number}点\n`;
    // }
    // return string;
    return purchases.map(purchase => {
        return `${purchase.price}円が${purchase.number}点`
    }).join("\n")
};

function subtotal() {
    // let sum = 0;
    // for (let i = 0; i < purchases.length; i++) {
    //     sum += purchases[i].price * purchases[i].number;
    // }
    // return sum;
    return purchases.reduce((prev, purchase) => {
        return prev + purchase.price * purchase.number 
    }, 0);
};

function calc() {
  const sum = subtotal();
  const postage = calcPostageFormPurchase(sum);
  window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  priceElement.value = "";
  numberElement.value ="";
}



  function calcPostageFormPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
      return 0;
    } else if (sum < 2000) {
      return 500;
    } else {
      return 250;
    }
  }


function sleep() {
    console.log("sleep start");
    const startTime = new Date();
    while(true) {
            if(new Date() - startTime > 5000) {
            console.log("sleep end");
            return;
        }
    }
}
console.log("process start");
sleep();
console.log("process end");

console.log(new Date);


