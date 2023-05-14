'use strict';

// const propsList = document.querySelectorAll('.props__list');
const propsItem = document.querySelectorAll('.props__item_four');
const items = document.querySelectorAll('.item');
const itemTitles = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');
const content = document.querySelectorAll('.content');
const itemImage = document.querySelectorAll('.item__image');
const itemTwoFalse = document.querySelectorAll('.item_six .props__item_two');
const itemTwoTrue = document.querySelectorAll('.item_two .props__item_two');
const ads = document.querySelector('.ads');

propsItem[2].after(propsItem[5]);
const cloneList = propsList[3].cloneNode(true);
propsList[3].replaceWith(propsList[4]);
content[4].append(cloneList);
const cloneTitle1 = itemTitles[1].cloneNode(true);
const cloneTitle2 = itemTitles[3].cloneNode(true);
const cloneTitle3 = itemTitles[4].cloneNode(true);

itemTitles[1].remove();
itemTitles[3].remove();
itemTitles[4].remove();

propsList[2].prepend(cloneTitle2);
propsList[5].prepend(cloneTitle1);
itemImage[4].after(cloneTitle3);

itemTwoTrue[7].after(itemTwoFalse[1]);
itemTwoTrue[7].after(itemTwoFalse[0]);

ads.remove();

items[3].after(items[0]);

