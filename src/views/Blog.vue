<template>
    <main class="blog">
		<blog-post v-for="post in posts" :key="post" :title="post.title" :author="post.author" :date="post.date" :content="post.content">

		</blog-post>
	</main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BlogPost from "@/components/BlogPost.vue";

@Options({
    data() {
        return {
            posts: [
                {
                    title: "Az utolso (nappal 2-vel utani) nap",
                    author: "Kernel",
                    date: 1642481376,
                    content: `
                    Anyámnak tegnap azt mondtam hogy ne csodálkozzon ha 4-kor ott lat ülni a gépnél, mert projektfeladatot csinálok. Na mindegy is. Lényeg a lényeg, lehet picit nagy hülyeség volt ennyire eltolni az ikt cuccost, de legalább már valamennyire kész van. Szerintem github pagesre feltenni eléggé fájdalmas lenne, szóval max commitolok egyet mainre, lebuildelem az oldalt es felteszem gyorsan a webszerveremre.
                `,
                },
				{
                    title: "Teszt",
                    author: "Kernel",
                    date: 1642483134,
                    content: `
                    Ezt amúgy vue componentekkel csináltam. Menő, ugye?
                `,
                },
            ],
        };
    },
	components: {
		"blog-post": BlogPost
	}
})
export default class Blog extends Vue {}
</script>

<style lang="scss" scoped>
div.post {
	margin-bottom: 10px;
}
</style>
