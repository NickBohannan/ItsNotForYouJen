// ==UserScript==
// @name         Remove For You Tab
// @version      2
// @grant        none
// @match        https://x.com/*
// ==/UserScript==

(function () {
  'use strict';

  function removeForYouTab() {
    const tabs = document.querySelectorAll('[role="tab"]');

    tabs.forEach(tab => {
      const text = tab.textContent.trim();

      if (text === 'For you') {
        tab.style.display = 'none';
      }

      if (text === 'Following') {
        tab.textContent = 'Following (correct timeline)';
      }
    });
  }

  // Run immediately
  removeForYouTab();

  // Observe dynamic changes (SPA behavior)
  const observer = new MutationObserver(() => {
    removeForYouTab();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();
