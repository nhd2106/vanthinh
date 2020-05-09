import { LAY_DANH_SACH_SAN_PHAM } from "../constants/constants"
import axios from '../../utils/axios'
export const LayDanhSachSanPhamAction = (danhSachSanPham) =>{
    return {
        type: LAY_DANH_SACH_SAN_PHAM,
        data: danhSachSanPham
    }
}

export const layDanhSachSanPham = () => {
    return dispatch=> {
        axios.request({
            method:'GET',
            url: '/products/caThu'
        }).then(res=>{
            dispatch(LayDanhSachSanPhamAction(res.data))
        }).catch(err=>{
            console.log(err);
            
        })
    }
}