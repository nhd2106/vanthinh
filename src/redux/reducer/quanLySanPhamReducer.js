const initialValue = {
    danhSachSanPham: []
}

const quanLySanPhamReducer = (state= initialValue, action) => {
        switch (action.type) {
            case '':
                
              return {...state}
        
            default:
                return state;
        }
}

export default quanLySanPhamReducer;