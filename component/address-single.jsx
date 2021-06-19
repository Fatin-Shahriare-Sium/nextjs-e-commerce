import React from 'react'

const AddressSingle = () => {
    return (
        <div>
            <table class="table table-responsive">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Street Address</th>
                        <th style={{ textAlign: 'center' }} >Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rajobbbnsa</td>
                        <td>faHNJ&GMAIS;LX.COM</td>
                        <td>NewYork</td>
                        <td>drswqfyd11,waterpark</td>
                        <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <button style={{ marginRight: '1%' }} className='btn btn-outline-dark'>Edit</button>
                            <button className='btn btn-outline-danger'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddressSingle;
