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
                    Anyamnak tegnap azt mondtam hogy ne csodalkozzon ha 4-kor ott lat ulni a gepnel, mert projektfeladatot csinalok. Na mindegy is. Lenyeg a lenyeg, lehet picit nagy hulyeseg volt ennyire eltolni az ikt cuccost, de legalabb mar valamennyire kesz van. Szerintem github pagesre feltenni elegge fajdalmas lenne, szoval max commitolok egyet mainre, lebuildelem az oldalt es felteszem gyorsan a webszerveremre.
                `,
                },
				{
                    title: "Teszt",
                    author: "Kernel",
                    date: 1642483134,
                    content: `
                    Ezt amugy vue componentekkel csinaltam. Meno, ugye?
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
