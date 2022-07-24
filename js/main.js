var elTextarea = document.querySelector(".textarea");
var elForm = document.querySelector(".form")
var elParagraphInfo = document.querySelector(".info");
var elHeadingResult = document.querySelector(".longWord");
var elButton = document.querySelector(".button");
var elBody = document.querySelector("body");

elForm.addEventListener("submit", function(func){
  func.preventDefault();
  var empty = "";
  if(elTextarea.value.length != 0){
    function textArea(text){
      var result = text.split(" ");
      for(i = 0; i < result.length; i++){
        if(result[i].length > empty.length){
          empty = result[i];
        }
      }
      return empty;
    }
    elParagraphInfo.textContent = "Kiritilgan matndagi eng uzun so'z: \n "
    elHeadingResult.innerHTML = textArea(elTextarea.value);
    elBody.style.backgroundColor = "lightgreen"
  }
  else{
    elTextarea.placeholder = "Ma'lumot kiritilmadi, qayta kiriting..."
  }

});