function gcd(a, b) {
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const xStr = searchParams.get("x") ?? "";
  const yStr = searchParams.get("y") ?? "";


  if (!/^[1-9]\d*$/.test(xStr) || !/^[1-9]\d*$/.test(yStr)) {
    return new Response("NaN", { status: 200 });
  }

  const x = BigInt(xStr);
  const y = BigInt(yStr);

  const g = gcd(x, y);
  const l = (x / g) * y;

  return new Response(l.toString(), { status: 200 });
}
