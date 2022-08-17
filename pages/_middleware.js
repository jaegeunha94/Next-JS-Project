export function middleware(request, eventt) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    alert('전역 미들웨어입니다.');
  }
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
  alert('전역 미들웨어입니다.');
}
