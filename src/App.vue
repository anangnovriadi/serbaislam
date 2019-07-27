<template>
    <div id="app">
        <b-navbar toggleable="sm" class="pl-5 pr-5 nav-white shadow p-2">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
                <!-- <b-navbar-brand><i class="fas fa-home"></i></b-navbar-brand> -->
                <b-navbar-nav>
                    <b-nav-item><router-link to="/"><i class="fas fa-home"></i> Home</router-link></b-nav-item>
                    <b-nav-item><router-link to="/"><i class="fas fa-bell"></i> Jadwal Sholat</router-link></b-nav-item>
                    <b-nav-item><router-link to="/quran"><i class="fas fa-book-open"></i> Quran</router-link></b-nav-item>
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