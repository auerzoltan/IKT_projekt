<template>
    <div id="nav">
        <p class="logo">UberKiralyShop</p>

        <div class="navbar-lg">
            <router-link to="/">Főoldal</router-link>
            <router-link to="/festekek">Festékek</router-link>
            <router-link to="/faanyagok">Faanyagok</router-link>
            <router-link to="/szerszamkatalogus">Szerszámkatalógus</router-link>
            <router-link to="/rolunk">Rólunk</router-link>
            <router-link to="/blog">Blog</router-link>
        </div>
        <div class="navbar-sm">
            <svg
                @click="this.navbarOpen = !this.navbarOpen"
                id="nav-toggle"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                class="bi bi-list"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
            </svg>

            <div class="navbar-float" v-if="this.navbarOpen">
                <router-link to="/">Főoldal</router-link>
                <router-link to="/festekek">Festékek</router-link>
                <router-link to="/faanyagok">Faanyagok</router-link>
                <router-link to="/szerszamkatalogus"
                    >Szerszámkatalógus</router-link
                >
                <router-link to="/rolunk">Rólunk</router-link>
                <router-link to="/blog">Blog</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            navbarOpen: false,
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/global.scss";
#nav {
    z-index: 10;
    padding: 0 5px 0 0;
    background-color: $surface-variant;
    //gap: 5px;
    display: inline-flex;
    align-content: center;
    width: 100%;
    height: 60px;

    .navbar-sm,
    .navbar-lg {
        margin-left: auto;
    }

    .navbar-sm {
        display: none;

        #nav-toggle {
            cursor: pointer;
        }
    }

    .navbar-float {
        position: absolute;
        top: 60px;
        left: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5px;
        width: 100%;
        z-index: 10;
        background-color: darken($color: $surface-variant, $amount: 3);

        & > * {
            padding: 20px 15px;
            align-self: center;
        }
    }

    .navbar-lg {
        display: flex;
        justify-content: flex-end;
        gap: 5px;

        & > * {
            padding: 20px 15px;
            align-self: flex-end;
        }
    }

    .logo {
        //margin: auto 0 auto 0;
        display: flex;
        align-self: center;
        justify-self: center;
        margin-left: 15px;
        font-size: 18px;
        font-weight: 500;
        color: $primary-darken;
    }

    a {
        display: block;
        text-decoration: none;
        color: $primary;
        transition: 0.4s;
        &:hover {
            transition: 0.4s;
            transform: scale(1.1);
            background-color: darken($color: $surface-variant, $amount: 5);
        }
    }
}

@media (max-width: 950px) {
    #nav {
        .navbar-lg {
            display: none;
        }

        .navbar-sm {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0;
            gap: 5px;
        }
    }
}
</style>
