<template>
    <div>
        <NaviaTion />
        <div class="py-10 max-w-screen-lg m-auto px-4">
            <h1 class="content-center justify-center flex text-5xl font-bold textwhite">User Details</h1>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10">
                <div v-for="user in UserData.data" :key="user.id">
                    <div class="card bg-white shadow-xl hover:shadow py-10 rounded-md">
                        <img class="w-32 mx-auto rounded-full border-8 border-white" :src="user.avatar" alt="">
                        <div class="text-center mt-2 text-3xl font-medium">{{ user.first_name }} {{ user.last_name }}</div>
                        <div class="text-center font-normal text-lg">{{ user.email }}</div>
                        <div class="px-6 text-center mt-2 font-light text-sm">
                            <p>
                                Front end Developer, avid reader. Love to take a long walk, swim
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 

<script>
import { mapActions, mapGetters } from 'vuex'
import NaviaTion from '../components/Navigation.vue'
export default {
    name: 'HomePage',
    components: {
        NaviaTion,
    },
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(["fetchAllUsers"]),

    },
    computed: mapGetters(["UserData"]),
    created() {
        this.fetchAllUsers();
        console.log(this.fetchAllUsers());
    },
}
</script>