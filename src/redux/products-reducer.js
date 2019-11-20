const REMOVE_SERVICE = "REMOVE_SERVICE";

const initialState = {
  products: [
    { id: 1, title: "Van Decals 1" },
    { id: 2, title: "Van Decals 2" }
  ],
  models: [
    { id: 11, title: "A1 PAX Wardrobe System Door" },
    { id: 22, title: "B1 PAX Wardrobe System 2 Door" }
  ],
  items: [
    { id: 111, title: "FARDAL" },
    { id: 222, title: "REINSVOLL 1" },
    { id: 333, title: "REINSVOLL 2" },
    { id: 444, title: "FORSAND" }
  ],
  services: [
    { id: 11111, title: "Service One" },
    { id: 22222, title: "Service Two" },
    { id: 33333, title: "Service Three" }
  ]
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_SERVICE:
      return {
        ...state,
        services: [
          ...state.services.filter(service => service.id != action.serviceId)
        ]
      };
    default:
      return state;
  }
};

export const removeServiceCreator = serviceId => ({
  type: REMOVE_SERVICE,
  serviceId
});

export default productsReducer;
