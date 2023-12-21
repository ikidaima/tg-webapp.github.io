/**
 * Возвращает слово подходящее по падежу и числу
 * @param count - числительное перед существительным
 * @param firstForm - существительное в именительном падеже
 * @param secondForm - существительное в родительном падеже(ед. число)
 * @param thirdForm - существительное в родительном падеже(мн. число)
 */
export const declOfNum = (
  count: number,
  firstForm: string,
  secondForm: string,
  thirdForm: string,
) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const words = [firstForm, secondForm, thirdForm];

  return words[
    (count % 100 > 4 && count % 100 < 20)
      ? 2
      : cases[(count % 10 < 5) ? count % 10 : 5]
  ];
};
