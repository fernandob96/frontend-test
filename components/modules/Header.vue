<template>
    <div class="position-fixed p-2 cont-header w-100">
    <b-nav>
        <b-nav-item>
            <n-link to="/">Home</n-link>
        </b-nav-item>
        <b-nav-item>
            <n-link to="/focusable-input">Input components</n-link>
        </b-nav-item>
        <b-nav-item>
            <n-link to="/voting-list/5">Voting List</n-link>
        </b-nav-item>
        <b-nav-item>
            <n-link to="/register-form">Register Form</n-link>
        </b-nav-item>
    </b-nav>
    </div>
</template>
<style>
.cont-header{
    -webkit-box-shadow: 0px 3px 5px 0px rgba(230,230,230,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(230,230,230,1);
    box-shadow: 0px 3px 5px 0px rgba(230,230,230,1);
    top: 0;

    z-index: 9999999;
}
.cont-header a{
    text-decoration: none!important;
}
</style>

