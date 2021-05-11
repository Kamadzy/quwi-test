<template>
    <li>
        <h3>{{ project.title }}</h3>
    </li>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            require: true,
        },
    },
};
</script>

<style lang="scss" scoped></style>
