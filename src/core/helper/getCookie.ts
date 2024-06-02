export const getCookie = (name: string): string | undefined => {
  const cookieValue = document.cookie.match(
    '(^|;)\\s*' + name + '\\s*=\\s*([^;]+)',
  );
  return cookieValue ? cookieValue.pop() : '';
};
