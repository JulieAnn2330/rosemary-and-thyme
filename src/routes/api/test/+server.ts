// src/routes/api/test/+server.ts

export async function GET() {
  return new Response('🎯 API TEST WORKS', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
