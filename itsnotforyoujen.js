// ==UserScript==
// @name     ItsNotForYouJen
// @version  1
// @grant    none
// @match    https://twitter.com/home
// ==/UserScript==



(function() {
    'use strict';

    function hideForYou() {
        const links = Array.from(document.querySelectorAll('a')).slice(0, 20);
        links.forEach(link => {
            const spans = link.querySelectorAll('span');
            spans.forEach(span => {
                if (span.innerHTML.trim() === 'For you') {
                    let parentDiv = link.closest('div');
                    if (parentDiv) {
                        parentDiv.style.display = 'none';
                    }
                }
            });
        });
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                hideForYou();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    windows.onload = hideForYou;

    window.addEventListener('popstate', function() {
        hideForYou();
    });
})();