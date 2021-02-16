// ==UserScript==
// @name         学堂在线去微信助手
// @namespace    https://qinlili.bid
// @version      0.1
// @description  自动切换账号密码登录,去除绑定微信,从此无需注册微信也有最佳体验
// @author       琴梨梨
// @match        https://www.xuetangx.com/*
// @icon         https://storagecdn.xuetangx.com/public_assets/xuetangx/xuetangxXImg/logo.ico
// @grant        none
// @run-at        document-idle
// ==/UserScript==

(function() {
    'use strict';
    function CheckAgain(){
        if(document.getElementsByClassName("main view")[0]){
            var targetNode = document.querySelector("#app > div > div.app-main_.appMain > div.loginWrap > div");
            var observer = new MutationObserver(function(){
                if(targetNode.style.display != 'none'){
                    if(document.getElementsByClassName("changeImg")[0]){
                        document.getElementsByClassName("changeImg")[0].click();
                        if(typeof DocumentObserver === "undefined"){AutoSkip();}
                    }
                }
            });
            observer.observe(targetNode, { attributes: true, childList: true });
        }else{
            setTimeout(CheckAgain,500)
        }
    }
    CheckAgain();
    function AutoSkip(){
        var mainArea = document.getElementsByClassName("loginBox")[0];
        var DocumentObserver = new MutationObserver(function() {
            if(document.querySelector("#app > div > div.app-main_.appMain > div.loginWrap > div > div > div.el-dialog__body > div > div.loginBox > div > div > div.loginWechatBinding > button:nth-child(6) > span")){
                if(document.getElementsByClassName("loginWechatBinding")[0].style.display != 'none'){
                    document.querySelector("#app > div > div.app-main_.appMain > div.loginWrap > div > div > div.el-dialog__body > div > div.loginBox > div > div > div.loginWechatBinding > button:nth-child(6) > span").click();
                }
            }
        });
        var DocumentObserverConfig = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        DocumentObserver.observe(mainArea, DocumentObserverConfig);
    }

})();
