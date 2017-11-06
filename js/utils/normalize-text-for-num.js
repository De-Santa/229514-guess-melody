const normalizeTextForNum = (text, forms, num) => {
  let end = ``;

  if (num % 100 !== 11 && num % 10 === 1) {
    end = forms[0];
  } else if (num % 10 > 1 && num % 10 < 5 && Math.floor((num % 100) / 10) !== 1) {
    end = forms[1];
  } else {
    end = forms[2];
  }
  return `${text}${end}`;
};

export default normalizeTextForNum;
