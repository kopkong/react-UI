import './shoplist.scss';

import React, {PropTypes, Component} from 'react';

export default class ShopList extends Component {
    static propTypes = {
        shop: PropTypes.array
    };

    render() {
        const shopList = this.props.shop.map((item,key)=> {
           return (
               <div className="shop-container clearfix" key={key} >
                    <div className="shop-item-block-left">
                        <img src={item.logoImg} alt="" />
                    </div>
                    <div className="shop-item-block-right">
                        <div className="shop-item-line1 clearfix">
                            <div className="line-left">
                                <span className="brand">品牌</span>
                                <span className="title">{item.title}</span>
                            </div>
                            <div className="line-right">
                                {
                                    item.assurance === 1 ?
                                        <span className="shop-icon">保</span>
                                        : null
                                }
                                {
                                    item.receipt === 1 ?
                                        <span className="shop-icon">票</span>
                                        : null
                                }
                            </div>
                        </div>
                        <div className="shop-item-line2 clearfix">
                            <div className="line-left">
                                 <span className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span className="rate">{item.rate}</span>
                                <span className="sales">月售 {item.monthSale}单</span>
                            </div>
                            <div className="line-right">
                                {
                                    item.hummingbird === 1 ?
                                        <span className="shop-icon2">蜂鸟专送</span>
                                        : null
                                }
                                {
                                    item.onTime === 1 ?
                                        <span className="shop-icon3">准时达</span>
                                        :null
                                }
                            </div>
                        </div>
                        <div className="shop-item-line3 clearfix">
                            <div className="line-left">
                                <span className="fee">¥{item.deliverLow}起送 / 配送费¥{item.deliverFee}</span>
                            </div>
                            <div className="line-right">
                                {
                                    item.deliverDistance >= 1000 ?
                                        <span className="distance">{item.deliverDistance / 1000}km</span>
                                        :<span className="distance">{item.deliverDistance}m</span>
                                }
                                {
                                    item.deliverTime > 0 ?
                                        <span> / <span className="timer">{item.deliverTime}分钟</span></span>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
               </div>
           )
        });
        return (
            <div className="shop-list-container">
                <div className="shop-list-header">
                    <i className="fa fa-shopping-basket"></i><span className="tag">附近商家</span>
                </div>
                <div className="shop-list">
                    {shopList}
                </div>
            </div>
        )
    }
}

