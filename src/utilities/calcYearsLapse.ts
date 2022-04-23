type Lapse = {
  start: string;
  end?: string;
}

/**
 * Calculates a time lapse in years from provided start and end points. The
 * resulting amount is not rounded up, unless a true value is used as second
 * parameter.
 * @param lapse Object specifying start and end of time lapse, in 'YYYY-MM-DD'
 * format. Property end is optional, current date is used if not provided.
 * @param roundUp Optional, if set to true, periods over half a year are rounded
 * up to one
 * @returns amount of years of time lapse
 */
export default function calcYearsLapse(
  lapse: Lapse, 
  roundUp: boolean = false
): string {
  const round = roundUp ? Math.round : Math.floor;
  const startDate = new Date(lapse.start);
  const endDate = lapse.end ? new Date(lapse.end) : new Date();
  const diff = endDate.getTime() - startDate.getTime();
  const diffInYears = round(diff / (1000 * 3600 * 24 * 365.25));

  return String(diffInYears);
}
