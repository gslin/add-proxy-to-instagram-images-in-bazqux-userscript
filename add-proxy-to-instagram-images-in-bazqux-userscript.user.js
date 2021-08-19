// ==UserScript==
// @name         Add BazQux's proxy for Instagram images
// @namespace    https://github.com/gslin/add-proxy-to-instagram-images-in-bazqux-userscript
// @version      0.20210818.0
// @description  Use BazQux's proxy for preventing from cdninstagram.com's same-origin issue
// @author       Gea-Suan Lin <gslin@gslin.org>
// @match        https://bazqux.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(() => {
    'use strict';

    const r = /^https:\/\/[^\.]+\.cdninstagram\.com\//;
    const proxy_url = 'https://imageproxy.pimg.tw/resize?url=';

    let ob = new window.MutationObserver(events => {
        events.forEach(ev => {
            ev.addedNodes.forEach(node => {
                let imgs = document.getElementsByTagName('img');
                for (let img of imgs) {
                    if (img.src.match(r)) {
                        img.src = proxy_url + encodeURIComponent(img.src);
                    }
                }
            });
        });
    });

    ob.observe(document, {
        childList: true,
        subtree: true,
    });
})();
