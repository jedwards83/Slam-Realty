/*Unfortunate DRY Javascript for the buttons to open forms Still working how to build a proper call for unique forms in one function*/
function openSellerContactForm() {
    if(window.screen.width <=600) {
        true
        }
        else {
    document.getElementById("openSellForm").style.display = "block";
    document.getElementById("closeSellForm").style.display = "none";
  }
}
  function closeSellerContactForm() {
    document.getElementById("openSellForm").style.display = "none";
    document.getElementById("closeSellForm").style.display = "block";
  }

  function openBuyerContactForm() {
    if(window.screen.width <=600){
        true
        }
        else {
    document.getElementById("openBuyForm").style.display = "block";
    document.getElementById("closeBuyForm").style.display = "none";
  }
}
  function closeBuyerContactForm() {
    document.getElementById("openBuyForm").style.display = "none";
    document.getElementById("closeBuyForm").style.display = "block";
  }

  function openRenterContactForm() {
    if(window.screen.width <=600){
        true
        }
        else {
    document.getElementById("openRentalForm").style.display = "block";
    document.getElementById("closeRentalForm").style.display = "none";
  }
}
  function closeRenterContactForm() {
    document.getElementById("openRentalForm").style.display = "none";
    document.getElementById("closeRentalForm").style.display = "block";
  }

  function openInvestorContactForm() {
    if(window.screen.width <=600){
        true
        }
        else {
    document.getElementById("openInvestorForm").style.display = "block";
    document.getElementById("closeInvestorForm").style.display = "none";
  }
}  

  function closeInvestorContactForm() {
    document.getElementById("openInvestorForm").style.display = "none";
    document.getElementById("closeInvestorForm").style.display = "block";
  }

  /*Responsive NavBar*/

  function myMenu() {
      var x = document.getElementById("mainNav");
      if (x.className === "navBar") {
          x.className += " responsive";
      } else {
          x.className = "navBar";
      }
    }