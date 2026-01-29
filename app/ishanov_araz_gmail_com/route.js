function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const xStr = searchParams.get("x");
  const yStr = searchParams.get("y");

 
  if (!/^[1-9]\d*$/.test(xStr ?? "") || !/^[1-9]\d*$/.test(yStr ?? "")) {
    return new Response("NaN");
  }

  const x = BigInt(xStr);
  const y = BigInt(yStr);

  let a = x, b = y;
  while (b !== 0n) [a, b] = [b, a % b];
  const lcm = (x / a) * y; 

  return new Response(lcm.toString());
}

