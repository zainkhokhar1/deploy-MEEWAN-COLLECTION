
import React, { createContext, useEffect, useContext, useReducer, useState } from "react";

export const sideBarContext = createContext();
export const wishListContext = createContext();
export const filterContext = createContext();
export const sortContext = createContext();
export const searchContext = createContext();
export const cartContext = createContext();
export const showCartContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((single) => single._id !== action.payload);
        default: return state
    }
}
const reducer1 = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((singleCart) => {
                return singleCart._id !== action.id
            });
        case "update":
            return action.payload;
        case "clear":
            return []
        default: {
            return state;
        }
    }
}

const initialState = () => {
    let savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
}

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(localStorage.getItem('isOpen') === "true" ? localStorage.getItem('isOpen') : null);
    const [filterOpen, setFilterOpen] = useState(localStorage.getItem('filterSlider') === "true" ? localStorage.getItem('filterSlider') : null);
    const [wishList, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('wishListCart')) || []);
    const [sort, setSort] = useState(localStorage.getItem('Sort') === "true" ? localStorage.getItem('Sort') : null);
    const [openSearch, setOpenSearch] = useState(localStorage.getItem('Search') === "true" ? localStorage.getItem('Search') : false);
    const [showCart, setShowCart] = useState(false);
    const [cart, dispatchCart] = useReducer(reducer1, initialState());

    useEffect(() => {

        if (wishList.length > 0) {
            localStorage.setItem('wishListCart', JSON.stringify(wishList));
        }
        else {
            localStorage.removeItem("wishListCart")
        }
    }, [wishList]);

    // useEffect(() => {
    //     if (cart.length > 0) {
    //         localStorage.setItem('Cart', JSON.stringify(cart));
    //     }
    //     else {
    //         localStorage.removeItem("Cart")
    //     }
    // }, [cart]);

    return (
        <showCartContext.Provider value={[showCart, setShowCart]}>
            <cartContext.Provider value={[cart, dispatchCart]}>
                <searchContext.Provider value={[openSearch, setOpenSearch]}>
                    <sortContext.Provider value={[sort, setSort]}>
                        <filterContext.Provider value={[filterOpen, setFilterOpen]}>
                            <sideBarContext.Provider value={[isOpen, setIsOpen]}>
                                <wishListContext.Provider value={[wishList, dispatch]} >
                                    {children}
                                </wishListContext.Provider>
                            </sideBarContext.Provider>
                        </filterContext.Provider>
                    </sortContext.Provider>
                </searchContext.Provider>
            </cartContext.Provider>
        </showCartContext.Provider>
    )
}

export const useSideBar = () => useContext(sideBarContext);
export const useWishlist = () => useContext(wishListContext);
export const useFilter = () => useContext(filterContext);
export const useSort = () => useContext(sortContext);
export const useSearch = () => useContext(searchContext);
export const useCart = () => useContext(showCartContext);
export const useAddCart = () => useContext(cartContext);