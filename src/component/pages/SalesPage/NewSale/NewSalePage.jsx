import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './newsale.scss';

function NewSalePage() {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/sales/new-sale/quick-sale', { replace: true });
        }, 100);
    }, []);

    return (
        <div className='new-sale-container'>
            <div className='detail-container'>
                <div className='content-container'>
                    <div className='content-title'>New sale</div>
                    <div className='content-tab'>
                        <div className="content-group">
                            <Link className={`tab-item ${location.pathname.includes("/sales/new-sale/quick-sale") && 'active'}`} to={'/sales/new-sale/quick-sale'}>
                                Quick Sale
                            </Link>
                            <Link className={`tab-item ${location.pathname.includes("/sales/new-sale/appointments") && 'active'}`} to={'/sales/new-sale/appointments'}>
                                To check out
                            </Link>
                            <Link className={`tab-item ${location.pathname.includes("/sales/new-sale/products") && 'active'}`} to={'/sales/new-sale/products'}>
                                Products
                            </Link>
                            <Link className={`tab-item ${location.pathname.includes("/sales/new-sale/services") && 'active'}`} to={'/sales/new-sale/services'}>
                                Services
                            </Link>
                            <Link className={`tab-item ${location.pathname.includes("/sales/new-sale/memberships") && 'active'}`} to={'/sales/new-sale/memberships'}>
                                Memberships
                            </Link>
                            <Link className={`tab-item ${location.pathname.includes("/sales/new-sale/vouchers") && 'active'}`} to={'/sales/new-sale/vouchers'}>
                                Vouchers
                            </Link>
                        </div>
                    </div>
                    <>
                        <Outlet />
                    </>
                </div>
            </div>
            <div className='clients-container'>
                <div className='add-client-button'>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                    <span>Add client</span>
                </div>
                <div className='client-list'>
                    <div className='list-empty-state'>
                        <div className='empty-logo-container'>
                            <svg viewBox="0 0 56 58" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M49 20c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h6c.6179394 0 1.0879825.5548673.9863939 1.164399l-3.4430553 20.6583318C52.1408079 42.2329143 50.0545619 44 47.611 44H13c-.4888392 0-.9060293-.353413-.9863939-.835601l-4.00000002-24C7.91201746 18.5548673 8.38206056 18 9 18h8c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-6.81953958l3.66666668 22H47.611c1.46605 0 2.7181281-1.0605314 2.9596061-2.506399L53.8195396 20H49z"></path><path d="M50 48c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H13.828C11.7142153 50 10 48.2857847 10 46.171c0-1.014735.40298826-1.9878479 1.1211951-2.7074085l1.172-1.171c.3906909-.3903576 1.0238558-.3900874 1.4142134.0006036.3903576.3906909.3900874 1.0238558-.0006036 1.4142134l-1.171032 1.1700315C12.1925918 45.2212686 12 45.6863283 12 46.171c0 1.0102153.8187847 1.829 1.828 1.829H50zM1 12c-.55228475 0-1-.4477153-1-1 0-.55228475.44771525-1 1-1h4.438c1.3765066 0 2.57649505.93687534 2.9111513 2.2724996l1.621 6.485c.13392929.5357997-.19185111 1.0787224-.72765087 1.2126517-.53579977.1339293-1.07872244-.1918511-1.21265173-.7276509l-1.62086284-6.4844519C6.2973771 12.3126144 5.8969677 12 5.438 12H1zM46 30c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h2zM20 30c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h2zM46 36c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h4zM38 36c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h4zM30 36c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h4zM38 30c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h4zM30 30c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h4zM22 36c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h4z"></path><path d="M41 49c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2z"></path><path d="M44 54c0-1.1047153-.8952847-2-2-2s-2 .8952847-2 2 .8952847 2 2 2 2-.8952847 2-2zm2 0c0 2.2092847-1.7907153 4-4 4s-4-1.7907153-4-4 1.7907153-4 4-4 4 1.7907153 4 4zM17 49c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2z"></path><path d="M20 54c0-1.1047153-.8952847-2-2-2s-2 .8952847-2 2 .8952847 2 2 2 2-.8952847 2-2zm2 0c0 2.2092847-1.7907153 4-4 4s-4-1.7907153-4-4 1.7907153-4 4-4 4 1.7907153 4 4zM44 13c0-6.07471525-4.9252847-11-11-11S22 6.92528475 22 13c0 6.0747153 4.9252847 11 11 11s11-4.9252847 11-11zm2 0c0 7.1792847-5.8207153 13-13 13s-13-5.8207153-13-13c0-7.17928475 5.8207153-13 13-13s13 5.82071525 13 13z"></path><path d="M36.2928932 8.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0 .3905243.39052429.3905243 1.02368927 0 1.41421356l-8 8.00000002c-.3905243.3905243-1.0236893.3905243-1.4142136 0-.3905243-.3905243-.3905243-1.0236893 0-1.4142136l8-7.99999998z"></path><path d="M28.2928932 9.70710678c-.3905243-.39052429-.3905243-1.02368927 0-1.41421356.3905243-.39052429 1.0236893-.39052429 1.4142136 0l8 7.99999998c.3905243.3905243.3905243 1.0236893 0 1.4142136-.3905243.3905243-1.0236893.3905243-1.4142136 0l-8-8.00000002z"></path></g></svg>
                        </div>
                        <p>Your cart is empty</p>
                        <span>Select an appointment, service or item to check out.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewSalePage
