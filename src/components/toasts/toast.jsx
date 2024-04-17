import React, { useContext } from "react";
import './toast-custom.css'
import DataContext from "../Context/dataContext";

export default function Toast() {
  const toastContext = useContext(DataContext);



  return <>
  <div class={`${toastContext.isShowToast ? 'show' : ''} toast toastStyle align-items-center z-7 position-fixed end-0 me-2`} role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body text-sm small">
        <span >  با موفقیت به سبد خرید شما اضافه شد</span>
  
   </div>
    <button onClick={(()=>{
      toastContext.setIsShowToast(false)
    })} type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" >

    </button>
  </div>
</div>

  </>;
}
