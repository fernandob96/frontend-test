<template>
    <div class="position-fixed p-2 cont-header w-100">
    <b-nav>
        
        <n-link to="/" class="p-0 m-2">Home</n-link>
    
        <n-link to="/focusable-input" class="p-0 m-2">Input components</n-link>

        <n-link to="/voting-list/5" class="p-0 m-2">Voting List</n-link>

        <n-link to="/register-form" class="p-0 m-2">Register Form</n-link>
 
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

