import { FETCH_DATA } from "../constants";

const initialState = {
  slides: [
    {
      id: 1,
      name: "Оператор call-центра",
      price: "20 000 — 30 000 руб.",
      company: "ООО Гранд Авто",
      description: "Lorem lorem lorem lorem lorem lorem"
    },
    {
      id: 2,
      name: "Водитель в Яндекс Такси на любом авто",
      price: "80 000 — 100 000 руб.",
      company: "Яндекс Такси",
      description: "Lorem lorem lorem lorem lorem lorem"
    },
    {
      id: 3,
      name: "Менеджер по работе с клиентами",
      price: "20 000 — 70 000 руб.",
      company: "ПАО МТС",
      description: "Lorem lorem lorem lorem lorem lorem"
    },
    {
      id: 4,
      name: "Администратор-регистратор",
      price: "от 18 000 руб.",
      company: "Центр красоты и здоровья 'Грация'",
      description: "Lorem lorem lorem lorem lorem lorem"
    }
  ]
};

export default function vacancies(state = initialState, action) {
  if (action.type === FETCH_DATA) {
    return {
      ...state,
      initialized: action.initialized,
      loading: action.loading
    };
  }
  return state;
}
