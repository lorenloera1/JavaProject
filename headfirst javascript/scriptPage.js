var view= {
    displayMessage: function(msg) {
        var textOutPut = document.getElementById("messageArea");
       textOutPut.innerHTML=msg;
        
    },
    displayHit: function(location){
        var cell=document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location){
        var cell=document.getElementById(location);
        cell.setAttribute("class", "miss");

    }
   
}
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Tap Tap, is this thing on?");