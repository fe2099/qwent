import * as flsFunctions from "./modules/webp-support.js";
flsFunctions.isWebp();

import * as swiper from './modules/swiper.js';

function multiplier(element, value) {
    const e = document.querySelector(`.${element}`);
    for (let i = 0; i < (value - 1); i++ ) {
        e.parentNode.append(e.cloneNode(true));
    }
}

multiplier('item_theme_01', 5)
// multiplier('item_theme_02', 10)
multiplier('item_theme_03', 5)
multiplier('item_theme_04', 5)
multiplier('item_theme_05', 5)
multiplier('item_theme_06', 5)
multiplier('item_theme_07', 5)
multiplier('item_theme_08', 5)
multiplier('item_theme_09', 3)
multiplier('tabs__item', 7)
multiplier('faq__item', 5)
multiplier('certificates__item', 5)
multiplier('partners__item', 5)