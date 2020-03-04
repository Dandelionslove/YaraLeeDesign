<template>
    <div>
        <BackHomeButton></BackHomeButton>
    </div>
</template>

<script>
    import BackHomeButton from '../BackHomeButton'

    export default {
        name: "Work4",
        components:{BackHomeButton},
        methods:{

        },
        beforeRouteLeave(to, from, next) {
            sessionStorage.clear();
            next();
        }
    }
</script>

<style scoped>

</style>
