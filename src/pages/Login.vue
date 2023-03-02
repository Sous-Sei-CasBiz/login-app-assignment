<template>
    <div class="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
        <div class="mt-[100px] mb-[50px] text-4xl font-bold border-b-2 pb-4 w-1/2 text-center text-gray-600">Log In</div>
        <form class="mt-2 flex flex-col lg:w-1/2 w-8/12">
            <div class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10">
                <div class="flex -mr-px justify-center w-15 p-4">
                    <span
                        class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                        <i class="fas fa-user-circle"></i>
                    </span>
                </div>
                <input type="text" v-model="email"
                    class="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                    placeholder="Email" />
            </div>
            <div class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-4">
                <div class="flex -mr-px justify-center w-15 p-4">
                    <span
                        class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                        <i class="fas fa-lock"></i>
                    </span>
                </div>
                <input type="text" v-model="first_name"
                    class="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                    placeholder="first name" />
            </div>
            <button @click="onLogin"
                class="bg-blue-500 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20">
                Login
            </button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            first_name: '',
        }
    },
    computed: {
        ...mapGetters(["UserData"]),
    },
    methods: {
        ...mapActions(["fetchAllUsers"]),
        onLogin() {
            let tableData = this.UserData.data.length;

            for (let i = 0; i < tableData; i++) {
                if (this.email == this.UserData.data[i].email && 
                this.first_name == this.UserData.data[i].first_name) {
                    this.$router.push({ name: 'HomePage' })
                     sessionStorage.setItem("authentication", true);
                    break;
                } else {
                    alert("Login Failed , Please Try Agin !!");
                    break;
                }
            }

        }
    },
    created() {
        this.fetchAllUsers();
    },
};
</script>