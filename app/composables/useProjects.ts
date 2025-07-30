import type { Project } from '../composables/project'

export function useProjects() {
    return useFetch<Project[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
}

export function useProject(id: string | number) {
    return useFetch<Project>(`https://jsonplaceholder.typicode.com/posts/${id}`)
}