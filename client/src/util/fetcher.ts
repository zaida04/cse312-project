export const backendBase = import.meta.env.DEV ? 'http://localhost:3000' : 'https://api.example.com';

export async function APIFetch(
    method: string,
    path: string,
    body?: Record<string, unknown>,
) {
    const request = await fetch(backendBase + path, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!request.ok) {
        throw new Error(`Request failed with status ${request.status}`);
    }

    return request.json();
}