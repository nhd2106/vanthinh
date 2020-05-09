import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';   
const ProductDetail = () => {
    const danhSachSanPham = useSelector(state => state.danhSachSanPham)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch()
    })
    return (
        <div className='container'>
            <h1 className='text-center'>Chi tiết sản phẩm</h1>

        </div>
    )
}

export default ProductDetail;
