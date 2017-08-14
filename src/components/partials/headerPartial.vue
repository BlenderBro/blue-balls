<template>
    <nav class="navbar ">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="/static/img//svg/f_logo.svg" alt="Foobar Digital" width="112">
            </a>
            <div id="burger" class="navbar-burger burger" data-target="navMenuExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navMenu" class="navbar-menu">

            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                        <img src="/static/img/flags/US.png" alt="English US">
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown is-boxed">
                        <a class="navbar-item " href="#">
                            <div class="level is-mobile">
                                <div class="level-right">
                                    <div class="level-item">
                                        <span class="icon has-text-info"><img src="/static/img/flags/RO.png" alt="Romana RO"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="navbar-item " href="#">
                            <div class="level is-mobile">
                                <div class="level-right">
                                    <div class="level-item">
                                        <span class="icon has-text-info"><img src="/static/img/flags/GR.png" alt="Greek GR"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="navbar-item is-tab has-text-centered"><a href="#">About</a></div>
                <div class="navbar-item is-tab has-text-centered"><a href="#">Services</a></div>
                <div class="navbar-item is-tab has-text-centered"><router-link :to="{ name: 'blog' }">Blog</router-link></div>
                <div class="navbar-item is-tab has-text-centered"><router-link :to="{ name: 'contact' }">Contact</router-link></div>
                <div class="navbar-item is-tab has-text-centered"><button v-on:click="logOut">LogOut</button></div>
            </div>
        </div>
    </nav>
</template>

<script>
    // Burger Menu activation
    $(document).ready(function () {
        $('.navbar-burger').click(function () {
            $(this).toggleClass("is-active");
            $('.navbar-menu').toggleClass("is-active");
        });
    });

    export default {
        name: 'headerPartial',
        methods: {
            logOut(){
                var user = window.localStorage.getItem('authUser');
                if (user !== null) {
                    window.localStorage.clear('authUser');
                    window.location.reload(); // dirty method -> force refresh and class updates
                    this.$router.push('/blog');
                } else {
                    alert('You need to login before you can logout, dumbass!')
                }
            }
        }
    }
</script>

<style scoped lang="css">
    .navbar-item.is-tab button{
        color: var(--aqua);
        font-size: .9em;
        cursor: pointer;
        text-decoration: none;
        background-color: transparent;
        box-shadow: none;
        border: none;
    }
    .navbar {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 0px 0px 10px 10px;
        -moz-border-radius: 0px 0px 10px 10px;
        -webkit-border-radius: 0px 0px 10px 10px;
        box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.14), 0 1px 10px 5px rgba(0, 0, 0, 0.12), 0 4px 5px -5px rgba(0, 0, 0, 0.2);
    }

    .navbar a :hover {
        text-decoration: none;
        color: #59C3C3;
    }

    .navbar img {
        max-height: 3.2em;
        padding-right: 0
    }
</style>
