'use strict';

import './main.scss';

const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});


$(document).ready(function () {
    $('#search-icon').click(function () {
        $('.hide-item').toggleClass('nav-link__hide')
        // $('.search-form').addClass('active')
        // $('.close').addClass('active')
    })
    // $('#close').click(function () {
    //   $('.hide-item').remove('nav-link__hide')
    //   $('.search-form').remove('active')
    //   $('.close').remove('active')
    // })
})