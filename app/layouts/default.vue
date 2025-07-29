<template>
    <div class="min-h-screen flex flex-col">
        <header class="p-4 flex justify-between items-center bg-white shadow">
            <h1 class="font-bold text-2xl">ProjectHub</h1>

            <nav class="space-x-4">
                <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
                <NuxtLink to="/login" class="hover:underline">Login</NuxtLink>
                <NuxtLink to="/signup" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</NuxtLink>
            </nav>
        </header>

        <main class="flex-1">
            <slot />
        </main>

        <footer class="bg-gray-100 p-4 text-center">
            <p class="text-gray-500 text-sm">&copy; 2025 ProjectHub</p>
        </footer>
    </div>
</template>