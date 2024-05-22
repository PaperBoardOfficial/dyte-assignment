// ==UserScript==
// @name         Fix the Dyte
// @namespace    http://tampermonkey.net/
// @version      2024-05-22
// @description  Fix the factorial function
// @author       You
// @match        https://debugmedyte.vercel.app/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vercel.app
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
  
    function waitForElement(selector, callback) {
      const element = document.querySelector(selector);
      if (element) callback(element);
      else setTimeout(() => waitForElement(selector, callback), 500);
    }
  
    function factorial(n) {
      return n != 1 ? n * factorial(n - 1) : 1;
    }
  
    function generateStars(n) {
      let stars = "";
      for (let i = 0; i < n; i++) {
        const top = Math.floor(Math.random() * 100);
        const right = Math.floor(Math.random() * 100);
        const width = Math.floor(Math.random() * 2) + 1;
        const height = width;
        const animationDuration = [9, 13][Math.floor(Math.random() * 2)];
  
        stars += `<div class='stars' style='top:${top}%; right:${right}%; width:${width}px; height:${height}px; animation: twinkling ${animationDuration}s infinite; box-shadow: 0px 0px 1vw rgba(255, 255, 255, 0.2);'></div>`;
      }
      return stars;
    }
  
    waitForElement("button", function (button) {
      button.onclick = function () {
        waitForElement('input[type="number"]', function (input) {
          let inputValue = Math.min(parseInt(input.value), 6);
          const factorialValue = factorial(inputValue);
  
          waitForElement("div.card > :nth-child(6)", function (refDiv) {
            refDiv.remove();
            const newDiv = document.createElement("div");
            newDiv.textContent = factorialValue;
            const parent = document.querySelector("div.card");
            parent.insertBefore(newDiv, parent.children[5]);
          });
  
          const stars = generateStars(factorialValue);
          waitForElement("#demo", function (demoDiv) {
            demoDiv.innerHTML = stars;
          });
        });
      };
    });
  })();