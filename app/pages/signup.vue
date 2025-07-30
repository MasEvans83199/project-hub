<script setup lang="ts">
const name = ref('')
const email = ref('')
const password = ref('')

function handleSignup() {
    console.log('Signing up with:', name.value, email.value, password.value)

    navigateTo('/login')
}
</script>

<template>
    <div class="flex items-center justify-center min-h-[calc(100vh-160px)] bg-gray-50">
        <form @submit.prevent="handleSignup" class="bg-white pb-8 rounded-lg shadow-md w-full max-w-md space-y-6">
            <div class="py-8 bg-gray-200 rounded-t-lg">
                <h2 class="text-blue-800 text-2xl font-bold text-center">Sign Up</h2>
            </div>

            <div class="px-4">
                <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
                <input v-model="name" type="text" id="name" required
                    class="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="px-4">
                <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                <input v-model="email" type="email" id="email" required
                    class="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="px-4">
                <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                <input v-model="password" type="password" id="password" required
                    class="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="px-4">
                <button type="submit"
                    class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700">
                    Create Account
                </button>
            </div>
        </form>
    </div>
</template>
