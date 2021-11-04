<template>
    <v-app id="main">
        <v-main>
            <app-toolbar></app-toolbar>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
export default {
    name: "App",
    components: {
        AppToolbar: () => import("./components/layout/AppToolbar"),
        AppFooter: () => import("./components/layout/AppFooter"),
    },
};
</script>

<style></style>
