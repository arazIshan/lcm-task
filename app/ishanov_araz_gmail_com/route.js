function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const x = Number(searchParams.get("x"));
  const y = Number(searchParams.get("y"));

  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
    return new Response("NaN", { status: 200 });
  }

  const result = (x * y) / gcd(x, y);
  return new Response(String(result), { status: 200 });
}

