'use strict';

module.exports = Franz => {
  function getMessages() {
    let directCount   = 0;
    let indirectCount = 0;

    const elements = document.querySelectorAll('header#manager-header > nav.cu-nav-icons > a.cu-nav-icons__item > cu-notifications-alert > div.cu-notification-alert__box > i.cu-icon.cu-notification-alert__dot');

    if (elements) {
      directCount = elements.length;
    }
    Franz.setBadge(directCount, indirectCount);
  }

  Franz.loop(getMessages);
};
