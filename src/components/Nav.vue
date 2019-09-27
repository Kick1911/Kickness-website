<template>
    <div id="nav">
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
  name: 'Nav',
  props: ['items', 'onclick']
}
</script>

<style lang="less" scoped>
#nav{
    top: 0;
    left: 0;
    width: 100%;
    height: 6%;
    ul{
        overflow: hidden;
        list-style-type: none;
        li{
            float: left;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
            cursor: pointer;
            &:hover {
                background-color: #ddd;
                color: black;
            }
            &.active {
                background-color: #4CAF50;
                color: white;
            }
        }
    }
}
</style>
