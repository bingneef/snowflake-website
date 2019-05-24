import differenceInYears from "date-fns/difference_in_years";

export function calculateCurrentAge(): number {
  const birthday = new Date("7-dec-1988");
  const today = new Date();

  return differenceInYears(today, birthday);
}

export default {};
