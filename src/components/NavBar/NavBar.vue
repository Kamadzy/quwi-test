<template>
    <div class="main-navbar">
        <a class="nav-link">
            <router-link to="/">Projects</router-link>
        </a>
        <a class="nav-link">
            <router-link to="/login">Logout</router-link>
        </a>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-navbar {
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #000;
    padding: 15px;
}
.nav-link {
    margin-left: 15px;
}
.nav-link a {
    color: grey;
    text-decoration: none;
    text-transform: uppercase;
}
</style>
