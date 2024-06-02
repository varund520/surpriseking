import React from 'react'
import InfoBox from '../../../components/InfoBox'
import { boxData } from '../../List/data'
import Sidebar from './Sidebar'

const Wishlist = () => {
    return (
        <div className="mx-[3.2rem] my-10">
            <div className="flex gap-[4rem]">
                <Sidebar />
                <div className='flex-[0.77]'>
                    <div className='bg-white p-[1.2rem] py-[2rem] rounded-[0.6rem] child:shadow-md space-y-3 child:border'>
                        {boxData.map((item, i) =>
                            <InfoBox item={item} key={i} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist