import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Journals extends Component {
  render() {
    console.log(this.props.title);
    return (
      <div className="journals__one">
        <Link
          to={`/journals/${this.props.id}`}
          className="journals__one--anchor"
        >
          <h5>{this.props.sub}</h5>
          <h4>{this.props.title}</h4>
          <img src={this.props.image} />
          {/* <h1>Summer Style Roundup</h1>
          <h4>
            The heat is here! With the summer season in full swing, whether
            you’re outside embracing the warm rays or inside enjoying the
            company of your beloved AC, we’ve got you covered. Here is a round
            up of some of our Stylegarage summer favourites worthy of a spot in
            your home both indoor and outdoor.
          </h4>
          <h4>
            Crafted locally in Toronto, our collection of made-to-order pieces –
            Stylegarage Originals – is always expanding, often inspired by our
            very own clients who share their ideas about what they would love to
            see in their own homes.
          </h4>
          <h4>
            The Marcelle Collection will make you feel like you’ve transported
            to your very own Parisian pied-de-terre this summer. Cozy and
            effortlessly chic, this piece can come as a stand- alone sofa or as
            sectional by pairing it with a chaise for maximum feet-up comfort.
          </h4>
          <h4>
            The Sommelier Credenza is the perfect way to hold you favourite
            vintages and spark conversation any entertainment space. Customize
            the configuration and make it your own, with a selection of rich
            woods, stones and finishes.
          </h4>
          <h4>
            Perfect for your patio, the Rapson Cocktail Table by Loll Design is
            part of a collection inspired by midcentury architect Ralph Rapson.
            Sculptural and sleek, yet low maintenance and easy to clean, this
            piece is made entirely from recycled plastic in your choice of a
            variety of colours.
          </h4>
          <h4>
            This summer we’ve also introduced new products by Toronto-based
            design studio, Castor. A winner of several design awards and a
            Stylegarage staff favourite – the Induction Light Tube operates
            using a magnetic field to transfer electrical current from the cube
            shaped base to a regular fluorescent light bulb.
          </h4>
          <h4>
            The Lily Table by Good Thing functions as a stackable indoor/outdoor
            side table, and when pulled up to a sofa or chair can be used as a
            mobile work/snack station. We appreciate the versatility, but we
            also love the fun silhouette and the fresh shades of colours.
          </h4>
          <h4>July 20, 2018</h4> */}
        </Link>
      </div>
    );
  }
}
