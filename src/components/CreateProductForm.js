import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './CreateProductForm/css/style.css'
import './CreateProductForm/css/responsive.css'
import './CreateProductForm/fonts/fontawesome-free-5.15.4-web/css/all.min.css'

export default function CreateProductForm() {

    const [newProduct, setNewProduct] = useState({
        name: "",
        brand: "",
        type: "",
        currency: "",
        price: "",
        image: "",
        description: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setNewProduct({...newProduct, [name]:value})
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log(newProduct);
        axios({
            method: 'POST',
            url: 'http://localhost:3000/api/products',
            data: newProduct
        });
    }


    return (
        <>
            <div id="app">
                <div id="dashboad">
                    <Link to="/" className="dashboad__header">
                        <i className="dashboad__icon fas fa-laugh-wink"></i>
                        <p className="dashboad__name">Admin Page</p>
                    </Link>

                    <ul id="slidebar">
                        <li>
                            <Link to="/createProduct">
                                <i className="slidebar__icon fas fa-microchip"></i>
                                Thêm sản phẩm
                            </Link>
                        </li>
                    
                        <li >
                            <a href="#" id="setting">
                                <i className="slidebar__icon fas fa-cog"></i>
                                Setting
                            </a>
                        </li>

                    </ul>
                </div>
                <div id="content">
                    <ul id="nav">
                        <li>
                            <i className="mobile-menu fas fa-bars"></i>
                        </li>
                        <li>
                            <form id="form-search" >
                                <div className="search-wrapper">
                                    <input type="text" name="search" placeholder="Search for" id="form-search__search" />
                                    <button>
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </li>
                        <li>
                            <div className="nav__avatar">
                                <i className="nav__avatar--noti fas fa-bell"></i>
                                <p className="avatar__user-name">User name</p>
                                <a href="#" className="nav__wrap-avt">
                                    <img src="./assets/image/avatar.png" alt="" className="avatar__img" />
                                </a>
                            </div>
                        </li>
                    </ul>

                    <h1>Thêm sản phẩm mới</h1>
                    <div className="form-login">
                        <form onSubmit={submitHandler} id="form-product">
                            <div className="form-control">
                                <label for="name">Tên sản phẩm</label>
                                <input type="text" name="name" id="name" onChange={handleChange} value={newProduct.name} placeholder="Tên sản phẩm" />
                            </div>
                            <div className="form-control">
                                <label for="brand">Hãng sản xuất</label>
                                <input type="text" name="brand" id="brand" onChange={handleChange} value={newProduct.brand} placeholder="Hãng sản xuất" />
                            </div>
                            <div className="form-control">
                                <label for="type">Loại</label>
                                <input type="text" name="type" id="type" onChange={handleChange} value={newProduct.type} placeholder="Loại hàng hóa" />
                            </div>
                            <div className="form-control">
                                <label for="curr">Loại Tiền</label>
                                <input type="text" name="currency" id="curr" onChange={handleChange} value={newProduct.currency} placeholder="USD or VND" />
                            </div>
                            <div className="form-control">
                                <label for="price">Giá Sản Phẩm</label>
                                <input type="text" name="price" id="price" onChange={handleChange} value={newProduct.price} placeholder="Giá Sản phẩm" />
                            </div>
                            <div className="form-control">
                                <label for="image">Hình ảnh sản phẩm</label>
                                <input type="text" name="image" onChange={handleChange} value={newProduct.image} placeholder="Hình ảnh sản phẩm" id="image" />
                            </div>
                            <div className="form-control">
                                <label for="desc">Tên sản phẩm</label>
                                <textarea name="description" id="desc" onChange={handleChange} value={newProduct.description} cols="30" rows="10" placeholder="Mô tả sản phẩm....."></textarea>
                            </div>

                            <button type="submit">Lưu Sản phẩm</button>
                            <button type="reset">Làm lại</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}