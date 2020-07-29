function openForm1() {
    document.getElementById("openSellForm").style.display = "block";
    document.getElementById("closeSellForm").style.display = "none";
  }
  
  function closeForm1() {
    document.getElementById("openSellForm").style.display = "none";
    document.getElementById("closeSellForm").style.display = "block";
  }

  function openForm2() {
    document.getElementById("openBuyForm").style.display = "block";
    document.getElementById("closeBuyForm").style.display = "none";
  }
  
  function closeForm2() {
    document.getElementById("openBuyForm").style.display = "none";
    document.getElementById("closeBuyForm").style.display = "block";
  }

  function openForm3() {
    document.getElementById("openRentalForm").style.display = "block";
    document.getElementById("closeRentalForm").style.display = "none";
  }
  
  function closeForm3() {
    document.getElementById("openRentalForm").style.display = "none";
    document.getElementById("closeRentalForm").style.display = "block";
  }

  function openForm4() {
    document.getElementById("openInvestorForm").style.display = "block";
    document.getElementById("closeInvestorForm").style.display = "none";
  }
  
  function closeForm4() {
    document.getElementById("openInvestorForm").style.display = "none";
    document.getElementById("closeInvestorForm").style.display = "block";
  }

  function myMenu() {
      var x = document.getElementById("mainNav");
      if (x.className === "navBar") {
          x.className += " responsive";
      } else {
          x.className = "navBar";
      }
    }