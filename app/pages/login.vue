<template>
    <div class="flex items-center justify-center min-h-[calc(100vh-160px)] bg-gray-50">
        <form
            @submit.prevent="handleLogin"
            class="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
        >
            <h2 class="text-2xl font-bold text-center">Login</h2>

            <div>
                <label for="email" class="block text-gray-700 mb-2">Email</label>
                <input
                    v-model="email"
                    type="email"
                    id="email"
                    required
                    class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label for="password" class="block text-gray-700 mb-2">Password</label>
                <input
                    v-model="password"
                    type="password"
                    id="password"
                    required
                    class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Log In
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
    const email = ref('')
    const password = ref('')

    function handleLogin() {
        console.log('Logging in with:', email.value, password.value)

        navigateTo('/dashboard')
    }
</script>