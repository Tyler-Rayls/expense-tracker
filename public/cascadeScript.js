var subjectObject = {
    "Payment Method": {
      ["Chase Sapphire",
      "Chase Unlimited",
      "Delta SkyMiles Amex"]
    },
    "Category": {
      ["Gas", "Grocery", "Travel", "Dining", "Other"]
    },
    "Month":{
      ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    }

  }
  window.onload = function() {
    var subjectSel = document.getElementById("category");
    var topicSel = document.getElementById("options");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
  } 
