/**
 * 숫자 천 단위마다 콤마(,)를 붙여서 반환하는 함수
 * @param target 함수를 적용할 숫자
 * @return result 숫자 천 단위마다 콤마가 붙여진 문자열
 */
export const numberWithCommas = (target: number): string => {
  return target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
