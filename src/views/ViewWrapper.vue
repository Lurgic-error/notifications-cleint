<template>
    <div class="view-wrapper">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-container>
                <b-navbar-brand href="/" class="text-capitalize">Vandu notifications</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="/subscribe">Subscribe</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

            </b-container>
        </b-navbar>

        <router-view keep-alive transition transition-mode="out-in"> </router-view>
    </div>
</template>

<script>
    export default {

        name: "view-wrapper"
    }
</script>

<style lang="scss" scoped>
    .view-wrapper {
        height: 100%;
    }
</style>