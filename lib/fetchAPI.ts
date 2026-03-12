export async function fetchAPI<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options);

    if (!response.ok) {
        const { error } = await response.json().catch(() => ({ error: 'Request Error' }));
        throw new Error(error ?? `Request failed: ${response.status}`)
    }

    return response.json();
}