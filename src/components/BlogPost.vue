<template>
    <div class="post">
        <div class="post:head" @click="this.expanded = !this.expanded">
            <div class="post:head_content">
                <b>{{ this.author }}</b> - {{ this.title }}
                <span class="post:date">{{formatDate(this.date * 1000)}}</span>
            </div>
        </div>
        <div class="post:content" v-if="this.expanded">
            {{ this.content }}
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "blogpost",
    props: ["title", "author", "date", "content"],
    data() {
        return {
            expanded: false,
        };
    },
    methods: {
        formatDate(date: number) {
            let yyyy_mm_dd = new Date(date).toISOString().split("T")[0];
            let hh_mm = `${new Date(date).getHours()}:${new Date(
                date
            ).getMinutes()}`;

            return `${yyyy_mm_dd} ${hh_mm}`;
        },
    },
};
</script>

<style lang="scss" scoped>
div.post {
    div.post\:head {
        cursor: pointer;
        background-color: rgb(209, 209, 209);
        height: 50px;
        display: flex;
        align-items: center;

        div.post\:head_content {
            margin-left: 20px;
        }

        span.post\:date {
            margin-left: 25px;
            color: gray;
        }
    }
    div.post\:content {
        white-space: pre-wrap; 
        word-wrap: break-word;
    }
}
</style>
