'use strict';

/**
* Bank Notes
* @param {float} amountToGive
*/

var banknotes = function banknotes(amountToGive) {	
  this.amountToGive = amountToGive ;
}
    
banknotes.prototype.giveBack = function() {
    
  
  document.write("you need to give ");

if (this.amountToGive>= 50) {
  var i = 0;
  
  while(this.amountToGive >= 50 ) {
    this.amountToGive -= 50;
    i++;
  }
      document.write(i + " banknote(s) of 50, ");
}


if (this.amountToGive>= 20) {
  var j = 0;
  
  while(this.amountToGive >= 20 ) {
    this.amountToGive -= 20;
    j++;
  }
    if (j>0) {
      document.write(j + " banknote(s) of 20, ");
    }
  }

if (this.amountToGive>= 10) {
  var k = 0;

  while(this.amountToGive >= 10 ) {
    this.amountToGive -= 10;
    k++;
  }	
    if (k>0) {
      document.write(k + " banknote(s) of 10, ");
    }
}


if (this.amountToGive>= 5) {
  var l = 0;

  while(this.amountToGive >= 5 ) {
    this.amountToGive -= 5;
    l++;
  }
    if (l>0) {
      document.write(l + " banknote(s) of 5, ");
    }
}

if (this.amountToGive>= 2) {
  var m = 0;
  while(this.amountToGive >= 2 ) {
    this.amountToGive -= 2;
    m++;
  }  
    if (m>0) {
      document.write(m + " coin(s) of 2, ");
    }
}

if (this.amountToGive>= 1) {
  var n = 0;
  while(this.amountToGive >= 1 ) {
    this.amountToGive -= 1;
    n++;
  }
    if (n>0) {
      document.write(n + " coin(s) of 1, ");
    }
}

if (this.amountToGive>= 0.5) {
  var o = 0;

  while(this.amountToGive >= 0.5 ) { 
    this.amountToGive -= 0.5;
    o++;
  }
    if (o>0) {
      document.write(o + "coin(s) of 0.5, ");
    }
}

if (this.amountToGive>= 0.2) {
  var p = 0;
  while(this.amountToGive >= 0.2 ) { 
    this.amountToGive -= 0.2;
    p++;
  } 
    if (p>0) {
      document.write(p + "coin(s) of 0.2,");
    }
}

if (this.amountToGive>= 0.1) {
  var q = 0;

  while(this.amountToGive >= 0.1 ) { 
    this.amountToGive -= 0.1;
    q++;
  }
    if (q>0) {
      document.write(q + "coin(s) of 0.1.");
    }
}


}


  var y = prompt("Enter a Value", "0");
  var num1 = parseFloat(y);
  var banknotes = new banknotes(num1);
  banknotes.giveBack();
 
