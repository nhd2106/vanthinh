import { LAY_DANH_SACH_SAN_PHAM } from "../constants/constants";

const initialValue = {
    danhSachSanPham: [{
      productName: "cá Thu",
      description: "",
      price: 120000,
      hinhAnh: "http://www.vanthinhseafoods.com/images/Sanphamseafood/KING%20MACKEREL/King%20Mackerel%20steak02.jpg"
    }]
}

const quanLySanPhamReducer = (state= initialValue, action) => {
        switch (action.type) {
            case LAY_DANH_SACH_SAN_PHAM:
                
              return {...state,
              danhSachSanPham: action.data
              }
        
            default:
                return state;
        }
}

export default quanLySanPhamReducer;