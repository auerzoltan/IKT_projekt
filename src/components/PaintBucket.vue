<template>
    <div class="festek">
        <div class="img-wrapper">
            <img src="https://images.thdstatic.com/productImages/4c2a4e95-b520-47b5-afa6-00e0c2028fee/svn/silver-behr-paint-buckets-96601-64_1000.jpg" alt="">
            <div :style="`background-color: ${color};`"/>
        </div>
        <span class="title">{{ colorName }} falfesték (2 liter)</span>
        <span class="desc"><b>Gyárto:</b> {{ manufacturer }}</span>
        <span class="desc"><b>Felhasználás:</b> {{ usage }}</span>
        <span class="desc"><b>Egységár:</b> {{ price }} Ft/liter</span>
    </div>
</template>


<script lang="ts">
export default {
    name: 'paint-bucket',
    props: ['colorName', 'manufacturer', 'usage', 'price', 'color']
}
</script>


<style lang="scss" scoped>
.festek {
    border: rgb(201, 201, 201) 2px solid;
    border-radius: 10px;
    align-items: center;
    padding: 10px;
    display: flex;
    flex-direction: column;

    .img-wrapper {
        width: 100%;
        text-align: center;
        position: relative;

        img {
            max-width: 90%;
            border-radius: 10px;
        }

        div {
            bottom: 12px;
            right: 24px;
            position: absolute;
            border-radius: 100%;
            width: 24px; height: 24px;
        }
    }

    .title {
        font-size: 18px;
        text-decoration: underline;
    }
    .desc {
        font-size: 14px;
    }
}
</style>