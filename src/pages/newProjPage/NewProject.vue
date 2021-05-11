<template>
    <div class="main-section">
        <p>Name</p>
        <form @submit.prevent="addProject">
            <input class="new-input" type="text" v-model="newProjectTitle" />
            <button class="new-btn">OK</button>
        </form>
    </div>
</template>

<script>
//import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            newProjectTitle: '',
        };
    },
    name: 'NewProject',
    //computed: mapGetters(['addProject']),
    methods: {
        addProject() {
            this.$store.dispatch('addProject', this.newProjectTitle);
            this.newProjectTitle = '';
        },
    },
};
</script>

<style lang="scss" scoped>
.main-section {
    display: flex;
    margin: 15px;
}
.new-input {
    width: 250px;
    padding: 10px 15px;
    margin: 0 10px;
}
.new-btn {
    text-transform: uppercase;
    font-size: 14px;
    padding: 9px 24px;
    background: rgb(62, 83, 117);

    color: white;
    border-radius: 5px;
    cursor: pointer;
}
</style>
