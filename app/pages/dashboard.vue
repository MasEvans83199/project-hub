<script setup lang="ts">
    const { data: projects, pending, error } = await useProjects()
</script>

<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold mb-6">Your Projects</h1>

        <div v-if="pending" class="text-gray-500">Loading projects...</div>

        <div v-else-if="error" class="text-red-500">Failed to load projects.</div>

        <div v-else class="space-y-4">
            <li v-for="project in projects" :key="project.id" class="list-none border rounded p-4 hover:shadow">
                <NuxtLink :to="`/project/${project.id}`" class="text-lg font-semibold text-blue-600 hover:underline">
                    {{ project.title }}
                </NuxtLink>
                <p class="text-gray-600 mt-2">{{ project.body }}</p>
            </li>
        </div>
    </div>
</template>