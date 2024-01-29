<script setup>
import krNav from '../components/krNav.vue'
</script>
<template>
    <krNav/>
</template>

<style scoped>
@font-face {
    font-family: 'CaviarDreams';
    src: url('https://res.hypermoe.com/data/font/CaviarDreams_Bold.ttf');
}

.pink {
  text-decoration: none;
  color: hsla(345, 100%, 75%, 1);
  transition: 0.4s;
}
.full-page{
    display: block;
    width: 100%;
    min-height: 100vh;
}
.pic-cover{
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position-x: center;
}
.full-mask{
    background-image: linear-gradient(rgb(50, 50, 50), rgba(50, 50, 50, 0.15));
    position: absolute;
    width: 100%;
    height: 100vh;
}
.valign {
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
}
.cover-header {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
}
.logo {
    font-family: CaviarDreams;
    display: block;
    margin: 0 2rem 0 0;
    font-size: 50px;
    color: white;
}
.chntitle {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

.engtitle {
    font-size: 1.2rem;
    color: white;
}

.greetings .chntitle,
.greetings .engtitle {
    text-align: left;
}

@media screen and (max-width:1024px) {
    .rc {
        line-height: 1.5;
    }
    .logo {
        margin: 0 auto 2rem;
        font-size: 23px;
    }
}
@media all and (min-width: 1024px) {
    .cover-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 2rem;
    }
    .rc {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }
    .rc .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>