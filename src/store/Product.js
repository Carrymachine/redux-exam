const SET_PRODUCTS = "product/SET_PRODUCT"; // 얼마만큼 더하거나 뺄지
const CLEAR_PRODUCTS = "product/CLEAR_PRODUCTS";

/* ----------------- 액션 생성 함수 ------------------ */
export const setProducts = (products) => ({ type: SET_PRODUCTS, products });
export const clearProducts = () => ({ type: SET_PRODUCTS });

/* ----------------- 모듈의 초기 상태 ------------------ */
const initialState = {
  products: [{ id: 1, name: "billy jean", description: "billybilly" }],
};

/* ----------------- 리듀서 ------------------ */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: initialState.products,
      };

    default:
      return state;
  }
}
