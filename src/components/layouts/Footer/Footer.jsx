import { Link, NavLink } from 'react-router';
import MaxWidth from '../../MaxWidth';
import FContact from './FContact';
import FBody from './FBody';
import FBrandsSlider from './FBrandsSlider';
import FCTA from './FCTA';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <FCTA></FCTA>
            <MaxWidth>
                <FBrandsSlider></FBrandsSlider>
            </MaxWidth>
            <div className='bg-base-300 shadow-md'>
                <MaxWidth>
                    <div className="py-20 space-y-20">
                        <FContact></FContact>
                        <FBody></FBody>
                        <hr className='text-black/30' />
                        <p className='text-center'>©{year} RENAX. All rights reserved.</p>
                    </div>
                </MaxWidth>
            </div>
        </div>
    );
};

export default Footer;