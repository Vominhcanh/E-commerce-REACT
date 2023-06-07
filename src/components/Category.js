import React from 'react'
import img1 from "../assets/img/cat-img-1.jpg";
import img2 from "../assets/img/cat-img-2.jpg";
import img3 from "../assets/img/cat-img-3.jpg";
import img4 from "../assets/img/cat-img-4.jpg";
const Category = () => {
  return (
    <>
       <section className="pt-5">
        <header className="text-center">
          <p className="small text-muted small text-uppercase mb-1">
            Carefully created collections
          </p>
          <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
        </header>
        <div className="row">
          <div className="col-md-4">
            <a className="category-item" href="#">
              <img className="img-fluid" src={img1} alt="" />
              <strong className="category-item-title text-secondary ">Clothes</strong>
            </a>
          </div>
          <div className="col-md-4">
            <a className="category-item mb-4" href="#">
              <img className="img-fluid" src={img2} alt="" />
              <strong className="category-item-title text-secondary">Shoes</strong>
            </a>
            <a className="category-item" href="#">
              <img className="img-fluid" src={img3} alt="" />
              <strong className="category-item-title text-secondary">Watches</strong>
            </a>
          </div>
          <div className="col-md-4">
            <a className="category-item" href="#">
              <img className="img-fluid" src={img4} alt="" />
              <strong className="category-item-title text-secondary">Electronics</strong>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category
