<template>
    <div id="app">
        <b-navbar toggleable="sm" class="pl-5 pr-5" type="light" variant="light" >
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-brand>Home</b-navbar-brand>
                <b-navbar-nav>
                    <b-nav-item><router-link to="/">Jadwal Sholat</router-link></b-nav-item>
                    <b-nav-item><router-link to="/quran">Jadwal Sholat</router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<style>
  @import './assets/css/custom.css';
  @import './assets/fontawesome/css/all.css';
</style>