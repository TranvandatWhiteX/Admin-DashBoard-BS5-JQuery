$(document).ready(function () {
    $("#sidebar").load("./commons/sidebar.html", function () {
        const sidebar = $("#sidebar");
        const links = sidebar.find(".sidebar-link");

        links.each(function () {
            $(this).on("click", function (event) {
                event.preventDefault();
                links.removeClass("active");
                $(this).addClass("active");
            });
        });
        const expandButton = $(".toggle-btn");
        expandButton.on("click", function () {
            $("#sidebar").toggleClass("expand");
            expandButton.find("i").toggleClass("fa-xmark");
        });
        const comment = $("#comment");
        const dashboard = $("#dashboard");
        const user = $("#user-management");
        const file = $("#file-management");
        user.on("click", function () {
            window.location.href = 'user.html';
        });
        file.on("click", function () {
            window.location.href = 'file.html';
        })
        dashboard.on("click", function () {
            window.location.href = 'dashboard.html';
        });
        comment.on("click", function () {
            window.location.href = 'comment.html';
        })
    });
    $("#header").load("./commons/header.html", function () {
        const profile = $('nav .profile');
        const notification = $('nav .notification');
        const imgProfile = profile.find('img');
        const dropdownProfile = profile.find('.profile-link');
        const dropdownNotification = notification.find('.notification-link');

        imgProfile.on("click", function () {
            dropdownProfile.toggleClass('show');
        });

        notification.on("click", function () {
            dropdownNotification.toggleClass('show');
        });

        const logout = $("#logout");
        logout.on("click", function () {
            window.location.href = 'index.html';
        });
    });
});