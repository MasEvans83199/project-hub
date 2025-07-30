<script setup lang="ts">
    const route = useRoute()

    const { data: project, pending, error } = await useProject(String(route.params.id))
</script>

<template>
    <div class="p-8">
        <div v-if="pending" class="text-gray-500">Loading project...</div>

        <div v-else-if="error" class="text-red-500">Failed to load project.</div>

        <div v-else>
            <h1 class="text-3xl font-bold mb-4">{{ project?.title }}</h1>
            <p class="text-gray-700">{{ project?.body }}</p>
            <NuxtLink to="/dashboard" class="text-blue-600 hover:underline mt-4 block">Back to Projects</NuxtLink>
        </div>
    </div>
</template>