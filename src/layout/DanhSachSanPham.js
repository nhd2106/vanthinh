import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachSanPham } from '../redux/actions/quanLySanPham';


const DanhSachSanPham = () => {
    const dispatch = useDispatch()
    const danhSachSanPham = useSelector(state=> state.quanLySanPhamReducer)
    useEffect(()=>{
        dispatch(layDanhSachSanPham())
        console.log(danhSachSanPham);
        
    })
    return (
        <div>
            
        </div>
    )
}

export default DanhSachSanPham;
