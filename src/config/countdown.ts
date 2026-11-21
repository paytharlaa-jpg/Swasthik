/**
 * New Year 2027 campaign.
 * Midnight 1 January 2027 in India (IST, UTC+05:30) = 31 Dec 2026 18:30 UTC.
 */
export const NEW_YEAR_TARGET = Date.UTC(2026, 11, 31, 18, 30, 0);
export const NEW_YEAR = 2027;

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

export function getCountdown(now: number): CountdownParts {
  const diff = Math.max(0, NEW_YEAR_TARGET - now);
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: diff === 0,
  };
}
