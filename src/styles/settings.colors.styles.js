export function rgba(hex, opacity) {
  const hexCode = hex.replace('#', '');
  const r = parseInt(hexCode.substring(0, 2), 16);
  const g = parseInt(hexCode.substring(2, 4), 16);
  const b = parseInt(hexCode.substring(4, 6), 16);
  const result = `rgba(${r},${g},${b},${opacity})`;

  return result;
}

export const colors = {
  core: '#5efc8d',
  light: '#ffffff',
  dark: '#000000',
  neutral: '#a7a2a9',
  pale: '#f4f7f5',
  danger: '#fe938c'
};
