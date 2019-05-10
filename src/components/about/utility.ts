export function calculateCurrentAge(): number {
  const birthday = new Date("7-dec-1988");
  const today = new Date();

  let diffYear = today.getFullYear() - birthday.getFullYear();
  if (today.getMonth() < birthday.getMonth()) {
    diffYear -= 1;
  } else if (today.getMonth() === birthday.getMonth()) {
    if (today.getDay() < birthday.getDay()) {
      diffYear -= 1;
    }
  }
  return diffYear;
}

export default {};
