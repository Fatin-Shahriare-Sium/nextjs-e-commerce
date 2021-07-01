import React from 'react'

const OrderdetailsSidebarOffcanvas = ({ children, show, handleSlider }) => {

    return (
        <div className='offcanvas-wrapper'>
            <div class={show ? 'offcanvas offcanvas-start show ' : 'offcanvas offcanvas-start'}>
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">My Order</h5>
                    <button type="button" onClick={() => handleSlider()} class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    {children}
                </div>
                <div className='offcanvas-footer'>

                    <p>#allahisalmighty</p>
                </div>
            </div>

        </div>
    )
}

export default OrderdetailsSidebarOffcanvas
