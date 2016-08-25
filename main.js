ready(function(){

  function betterFont(node){
    if(!(node instanceof Element)){
      return false;
    }
    var regexCJ = /[\u4e00-\u9fa5]+|[\u0800-\u4e00]+/;
    var style = window.getComputedStyle(node);
    if(node.innerText.match(regexCJ) && parseFloat(style.fontSize) == 14){
      var lh = style.lineHeight;
      node.style.fontSize = '13.4px';
      node.style.lineHeight = lh;
    }
    if(node.children && node.children.length){
      Array.from(node.children).forEach(function(childNode) {
        betterFont(childNode);
      });
    }
  }

  document.addEventListener("DOMNodeInserted", function(e) {
    betterFont(e.target);
  }, false);

  betterFont(document.body);

});
