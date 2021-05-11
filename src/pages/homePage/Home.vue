<template>
    <div>
        <ul>
            <ProjectItem
                v-for="project in $store.getters.getAllProjects"
                :key="project.id"
                :project="project"
            />
        </ul>
    </div>
</template>

<script>
import ProjectItem from '@/components/ProjItem/ProjectItem';
export default {
    name: 'Home',
    components: {
        ProjectItem,
    },
};
</script>

<style lang="scss" scoped></style>
