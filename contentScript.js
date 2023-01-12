console.log("Medium filter no member article filter enabled added!!!!");

setInterval(function () {
  let elements = document.querySelectorAll("div.h.k.ik.je.jf.bp");
  if (elements.length > 0) {
    let first = elements[0];
    removePaidArticles(first);
  }
}, 1000);

function removePaidArticles(element) {
  let pathNode = [];
  for (let i = 0; i < 11; i++) {
    pathNode.push(element);
    element = element.parentNode;
  }
  pathNode.forEach((ele) => ele.remove());
}
