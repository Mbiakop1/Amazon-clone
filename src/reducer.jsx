export const initialState =
	{
		basket: [],
	};

//  selector with reduce function ////////////////////
export const getBasketTotal =
	(basket) =>
		basket?.reduce(
			(
				amount,
				item,
			) =>
				item.price +
				amount,
			0,
		);
// selector with reduce function/////////////////////
const reducer = (
	state,
	action,
) => {
	console.log(
		action,
	);
	switch (
		action.type
	) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [
					...state.basket,
					action.item,
				],
			};
	}
};

export default reducer;
