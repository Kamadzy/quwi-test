<template>
    <div class="main-login">
        <h3>Login</h3>
        <input class="input-form email-input" type="text" placeholder="Email" />
        <input
            class="input-form psw-input"
            type="password"
            placeholder="Password"
        />
        <button class="submit-btn" type="submit">
            <router-link to="/">Login</router-link>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Login',
};
</script>

<style lang="scss" scoped>
.main-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
}
.submit-btn {
    text-transform: uppercase;
    font-size: 14px;
    padding: 9px 24px;
    background: rgb(62, 83, 117);
    border-radius: 5px;
    cursor: pointer;
}
.submit-btn a {
    text-decoration: none;
    color: white;
}
.input-form {
    width: 250px;
    padding: 10px 15px;
}
.email-input {
    margin-bottom: 10px;
}
.psw-input {
    margin-bottom: 15px;
}

// .submit-btn:after {
//     content: '';
//     position: absolute;
//     z-index: -1;
//     -webkit-transition: all 0.3s;
//     -moz-transition: all 0.3s;
//     transition: all 0.3s;
// }
</style>
