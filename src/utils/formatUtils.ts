/**
 * Formats a numerical value for money to have exactly 2 decimal places.
 * @param value The numerical value to format.
 * @returns The formatted string.
 */
export const formatPrice = (value: number | string): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '0.00';
  return num.toFixed(2);
};

/**
 * Formats a date string or object to YYYY-MM-DD in LOCAL time.
 * Avoids the 1-day shift caused by toISOString() on UTC-offset timezones.
 */
export const formatDateYYYYMMDD = (d: string | Date): string => {
  const date = typeof d === 'string' ? new Date(d) : d;
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

/**
 * Formats a date to a long string (e.g., Sat, May 9, 2026) in local time.
 */
export const formatDateLong = (d: string | Date | null): string => {
  if (!d) return 'Select date';
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString('en-PH', { 
    weekday: 'short', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

/**
 * Formats a date to a short string (e.g., May 9, 2026) in local time.
 */
export const formatDateShort = (d: string | Date | null): string => {
  if (!d) return 'Select date';
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString('en-PH', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
};
