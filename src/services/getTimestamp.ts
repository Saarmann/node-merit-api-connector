export const getTimestamp = (): string => {
  const pad2 = (n: any) => {
    return n > 9 ? '' + n : '0' + n;
  };

  const d = new Date();
  const yyyy = d.getFullYear();
  const MM = pad2(d.getMonth() + 1);
  const dd = pad2(d.getDate());
  const HH = pad2(d.getHours());
  const mm = pad2(d.getMinutes());
  const ss = pad2(d.getSeconds());
  return yyyy + MM + dd + HH + mm + ss;
};
