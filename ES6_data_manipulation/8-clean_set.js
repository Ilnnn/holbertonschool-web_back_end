
function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  set.forEach((value) => 
    {
    if (typeof value === 'string' && value.startsWith(startString)) {
      parts.push(value.substring(startString.length));
    }
  });

  return parts.join('-');
}