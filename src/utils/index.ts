import { HOURTIME, DAYTIME, DUMYNOWDATE } from 'constants/';

export const clipboardCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const innerText = e.currentTarget.innerHTML;
  navigator.clipboard
    .writeText(innerText)
    .then(() => {
      alert(`${innerText}주소가 복사 되었습니다.`);
    })
    .catch((e) => {
      console.log('Clipboard Copy Error', e);
    });
  return;
};

export const divisionNum = (byte: number, num: number) => {
  return (byte / 1000 ** num).toFixed(2);
};

export const getSize = (byte: number) => {
  const kb = divisionNum(byte, 1);
  const mb = divisionNum(byte, 2);
  const gb = divisionNum(byte, 3);
  const tb = divisionNum(byte, 4);
  if (Number(tb) >= 1) return `${tb}TB`;
  if (Number(gb) >= 1) return `${gb}GB`;
  if (Number(mb) >= 1) return `${mb}MB`;
  if (Number(kb) >= 1) return `${kb}KB`;
  return `${byte}B`;
};

export const getExpiresDate = (date: number) => {
  // @NOTE: 임의로 날짜 변경
  // const expiresDate = new Date(date * 1000).getTime();
  // const nowDate = new Date().getTime();

  const expiresDate = new Date((date + 2800000) * 1000).getTime();
  const nowDate = DUMYNOWDATE;
  const expiresLeft = expiresDate - nowDate;
  console.log(expiresDate, nowDate, 123);

  const days = Math.floor(expiresLeft / DAYTIME);
  const hours = Math.floor((expiresLeft % DAYTIME) / HOURTIME)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((expiresLeft % HOURTIME) / (1000 * 60))
    .toString()
    .padStart(2, '0');
  console.log(days, 'days');
  console.log(hours, 'hours');
  console.log(minutes, 'minutes');

  if (days < 0) return 'expiration';
  if (days < 2) return `${hours}시간 ${minutes}분`;
  if (days > 2) return `${days}일`;
  return;
};
