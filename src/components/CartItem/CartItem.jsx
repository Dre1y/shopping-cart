import React from "react";
import { BsCartDashFill } from "react-icons/bs";

import "./CartItem.css";

function CartItem() {
  return (
    <section className="cart-item">
      <img src="" alt="imagem do produto" className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-tittle">Titulo do produto</h3>
        <h3 className="cart-item-price">200,00</h3>

        <button type="button" className="button__remove-item">
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;
