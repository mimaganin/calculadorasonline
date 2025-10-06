export function parseISO(d) {
  // Accepts YYYY-MM-DD
  const [y,m,da] = d.split('-').map(Number);
  if(!y || !m || !da) return null;
  return new Date(Date.UTC(y, m-1, da));
}

export function diffYMD(from, to) {
  // Returns {years, months, days} diff ignoring timezones
  let y = to.getUTCFullYear() - from.getUTCFullYear();
  let m = to.getUTCMonth() - from.getUTCMonth();
  let d = to.getUTCDate() - from.getUTCDate();
  if (d < 0) {
    const prevMonth = new Date(Date.UTC(to.getUTCFullYear(), to.getUTCMonth(), 0));
    d += prevMonth.getUTCDate();
    m -= 1;
  }
  if (m < 0) {
    m += 12;
    y -= 1;
  }
  return {years:y, months:m, days:d};
}

export function daysBetween(a, b) {
  const ms = Math.abs(b - a);
  return Math.floor(ms / 86400000);
}
