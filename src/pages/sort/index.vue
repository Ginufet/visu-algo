<template>
    <div>
        <h1>
            <span>排序</span>
            <router-link :to="{name: 'HelloWorld'}" class="el-button el-button--default el-button--mini is-round">返回目录</router-link>
        </h1>
        <router-view></router-view>
    </div>
</template>

<style scoped>
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    a {
        text-decoration: none;
        margin: 4px 0 0 10px;
    }
</style>
