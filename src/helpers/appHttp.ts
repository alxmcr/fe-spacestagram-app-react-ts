export async function appHttp<T>(
    request: RequestInfo,
    signal: AbortSignal
): Promise<T> {
    const response = await fetch(request, { signal });
    const body = await response.json();
    return body;
}