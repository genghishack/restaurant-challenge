export async function getData<T>(
  request: RequestInfo,
  options: RequestInit
): Promise<T> {
  const response = await fetch(request, options);
  const body = response.json();
  return body;
}
