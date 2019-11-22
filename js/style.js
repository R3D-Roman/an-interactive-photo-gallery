
baguetteBox.run(".gallery", {
  overlayBackgroundColor: "black",
  buttons: "auto",
  ignoreClass: "ignore"
      });
  


  
  // Filter Search
const input = document.querySelector("#input");
input.addEventListener("keyup", function () {
  const inputSearch = input.value.toUpperCase();
  const filter = document.querySelectorAll(".col");
  let a;
  for (let i = 0; i < filter.length; i++) {
    a = filter[i].querySelectorAll("a")[0];
    if (a.getAttribute("data-caption").toUpperCase().indexOf(inputSearch) > -1) {
      filter[i].style.display = "";
      a.classList.remove("ignore");
      baguetteBox.run(".gallery", {
        overlayBackgroundColor: "black",
        buttons: "auto",
        ignoreClass: "ignore"
            });
    } else {
      a.classList.add("ignore");
      filter[i].style.display = "none";
      baguetteBox.run(".gallery", {
        overlayBackgroundColor: "black",
        buttons: "auto",
        ignoreClass: "ignore"
            });
    }
  }
});
input.value = "";






















// LightBox
// baguetteBox.run(".gallery", {
//   overlayBackgroundColor: "black",
//   buttons: "auto"
// });

  
  // Filter Search
// const input = document.querySelector("#input");
// input.addEventListener("keyup", function () {
//   const inputSearch = input.value.toUpperCase();
//   const filter = document.querySelectorAll(".col");
//   let a;
//   for (let i = 0; i < filter.length; i++) {
//     a = filter[i].querySelectorAll("a")[0];
//     if (a.getAttribute("data-caption").toUpperCase().indexOf(inputSearch) > -1) {
//       filter[i].style.display = "";
//     } else {
//       filter[i].style.display = "none";
//     }
//   }
// });
// input.value = "";
