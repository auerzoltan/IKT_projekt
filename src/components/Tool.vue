<template>
    <div class="tool">
        <img :src="this.img" alt="">
        <div class="tool:content">
            <span class="tool:title">{{ this.name }}</span>
            <span class="tool:price"><b>Ár:</b> {{ this.price }}Ft</span>
            <span class="tool:desc">• {{ this.desc }}</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "blogpost",
    props: ["img", "name", "price", "desc"],
    data() {
        return {
            expanded: false,
        };
    }
};
</script>

<style lang="scss" scoped>
div.tool {
    display: flex;

    border: gray 2px solid;
    border-radius: 15px;
    padding: 15px;

    box-sizing: border-box;

    img {
        width: 30%;
        border-radius: 15px;
    }

    div.tool\:content {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        flex-grow: 1;

        span.tool\:title {
            font-size: 3vw;
        }

        span.tool\:price {
            font-size: 1.5vw;
            color: rgb(59, 59, 59);
        }

        span.tool\:desc {
            margin-top: 20px;
            color: gray;
            font-size: 1.3vw;
        }
    }
}
</style>
