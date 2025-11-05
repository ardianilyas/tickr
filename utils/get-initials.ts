/**
 * Get user initials (max 2 letters) from a name string.
 * Examples:
 * - "Ardian Ilyas" → "AI"
 * - "Ardian" → "A"
 * - "john doe smith" → "JD"
 * - "a" → "A"
 * - "" → ""
 */
export function getUserInitials(name: string): string {
    if (!name) return "";
  
    const parts = name
      .trim()
      .split(/\s+/) // split by any whitespace
      .filter(Boolean);
  
    if (parts.length === 0) return "";
  
    if (parts.length === 1) {
      // Single name → take first letter only
      return parts[0].charAt(0).toUpperCase();
    }
  
    // Multi-word name → take first letters of first and last words
    const firstInitial = parts[0].charAt(0).toUpperCase();
    const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase();
  
    return firstInitial + lastInitial;
}  