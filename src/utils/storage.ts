export function saveMood(date, mood) {
  localStorage.setItem(date, mood);
}
export function loadAll() {
  const entries = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)!;
    entries.push([key, localStorage.getItem(key)]);
  }
  return entries;
}