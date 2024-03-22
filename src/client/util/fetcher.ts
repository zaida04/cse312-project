export const backendBase = import.meta.env.DEV ? 'http://localhost:3000/api' : 'https://api.example.com';

export async function APIFetch
    <T = Record<string, any>>
    (
        method: string,
        path: string,
        body?: Record<string, any>,
    ) {
    const request = await fetch(backendBase + path, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    return request.json() as Promise<(T & { error: false }) | { error: true, message: string }>;
}