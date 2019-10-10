<template>
    <div id='blog'>
        <div class="destination flex board">
            <div class="sidebar">
                <NavList :items="pages" v-on:nav="navigate"
                        :page="page" />
            </div>
            <div class="content">
                <Page :path="current_nav" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blog'
}
</script>