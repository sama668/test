"use strict";
$(document).ready(function () {
    var floatNav = $('.float-nav');
    var mainContent = $('.main-content');
    var search = $('.search');
    var adBox = $('#adBox');


    var androidKade = {
        init: function () {
            this.search();
            this.app();
            this.game();
            this.rom();
            this.news();
            this.tutorial();
            this.group();
            this.store()

        },
        search: function () {

            search.on('click mouseover', function (e) {
                $(this).parent().find('.active').removeClass('active').css('background', '');
                $('.menuBox').hide();
                $('.main-content').css('border-top', '');
                adBox.hide();
                $('#searchBox').show();

            })
        },
        menuView: function (color, dom) {
            $('.menuBox').hide();
            dom.parent().find('.active').removeClass('active').css('background', '');
            dom.addClass('active').css('background', color);
            $('.main-content').css('border-top', '10px solid ' + color);
        },
        game: function () {
            $('.game').on('click mouseover', function (e) {
                androidKade.menuView('#001050', $(this));
                adBox.hide();
                $('#game').show();
            })

        },
        app: function () {
            $('.app').on('click mouseover', function (e) {
                androidKade.menuView('#658092', $(this))
                adBox.hide();
                $('#game').show();
            })

        },
        rom: function () {
            $('.rom').on('click mouseover', function (e) {
                androidKade.menuView('#3f5ca9', $(this));
                adBox.hide();
                $('#game').show();
            })

        },
        news: function () {
            $('.news').on('click mouseover', function (e) {
                androidKade.menuView('#1aa1e1', $(this));
                adBox.hide();
                $('#game').show();
            })

        },
        tutorial: function () {
            $('.tutorial').on('click mouseover', function (e) {
                androidKade.menuView('#fb8521', $(this));
                adBox.hide();
                $('#game').show();
            })

        },
        group: function () {
            $('.group').on('click mouseover', function (e) {
                androidKade.menuView('#ce5043', $(this));
                adBox.hide();
                $('#game').show();
            })

        },
        store: function () {
            $('.store').on('click mouseover', function (e) {
                androidKade.menuView('#b7cb41', $(this));
                adBox.hide();
                $('#game').show();
            })

        }


    }

    androidKade.init();


    floatNav.on('click', function (e) {
        $(this).toggleClass('closed');
        e.stopPropagation();
        e.preventDefault();
    });

    mainContent.on('click', function () {
        if (!floatNav.hasClass('closed')) floatNav.addClass('closed');
    });
});