<template>
    <nav class="flex items-center justify-between bg-blue-500 p-6 ">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto max-w-screen-lg m-auto">
            <div class="text-md lg:flex-grow">
                <router-link to="/" class="text-4xl mr-4 font-bold text-white">Bester</router-link>
              
            </div>
            <div>
                <button @click="onLogout" 
                    class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Log
                    Out</button>

            </div>
        </div>
    </nav>
</template>
<script>


export default {
    name: 'NaviaTion',
    methods:{
        onLogout(){
            sessionStorage.clear();
            this.$router.push({name: 'LogIn'});
        }
    }
}

</script>
<style scoped>
.nav.active {
    background: #eee;
    color: #000;
    padding: 5px 10px;
    border-radius: 5px;
}
</style>