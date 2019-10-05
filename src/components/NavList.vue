<template>
    <div id='navlist'>
        <ul>
            <li v-for="item in this.$props.items"
                :key="item.id"
                v-on:click="onclick($parent, item.content)">
                <a>{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'navlist',
  props: ['items', 'onclick']
}
</script>

<style lang="less" scoped>
#navlist {
    height: 100%;
    ul {
        height: 100%;
        padding: 0px;
        list-style-type: none;
        li {
            cursor: pointer;
            text-align: justify;
            padding: 5px;
            &:hover {
                box-shadow: 1px 3px 7px 0px #ccc;
            }
        }
    }
}
</style>
