import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  orders: any = [];
  constructor(private location: Location) { }

  ngOnInit() {
    this.orders = [{
      id: 'OD-001',
      name: 'Samsung Galaxy M31 Prime Edition',
      price: 16499,
      brand:'samsung',
      type: 'phone',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71zb0UaK0PL._SL1500_.jpg',
      orderplaced: '05-10-2020',
      shippingaddess:'T.veeranjaneyulu,H.No:8-23, 5thcross, 5thmain, Marathalli, Bangalore-560037',
      shippingName: 'T.veeranjaneyulu'
    },
  {
    id: 'OD-002',
    name: 'Samsung T5 500GB Up to 540MB/s External Solid State Drive',
    price: 5999,
    brand:'samsung',
    type: 'External Hardisk',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81oYFsPwVrL._SL1500_.jpg',
    orderplaced: '03-10-2020',
    shippingaddess:'T.veer,H.No:8-23, 5thcross, 5thmain, Marathalli, Bangalore-560037',
    shippingName: 'T.veer'


  },{
    id: 'OD-003',
    name: 'OnePlus Nord',
    price: 29999,
    brand:'OnePlus',
    type: 'Phones',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Lx9l3NivL._SL1500_.jpg',
    orderplaced: '15-10-2020',
    shippingaddess:'T.veera,H.No:8-23, 5thcross, 5thmain, Marathalli, Bangalore-560037',
    shippingName: 'T.veera'

},{
  id: 'OD-004',
  name: 'Zebronics Zeb-Thunder Wireless BT Headphone ',
  price: 649,
  brand:'Zebronics',
  type: 'Wireless BT Headphone',
  image: 'https://images-na.ssl-images-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg',
  orderplaced: '20-10-2020',
  shippingaddess:'T.veerth,H.No:8-23, 5thcross, 5thmain, Marathalli, Bangalore-560037',
  shippingName: 'T.veerth'

},{
  id: 'OD-005',
  name: 'Spaces Atrium 144 TC 100% Cotton Queen Size Double Bedsheet',
  price : 899,
  brand:'Amazon Brand',
  type: 'BedSheet',
  image: 'https://images-na.ssl-images-amazon.com/images/I/81XVgYNia8L._SL1500_.jpg',
  orderplaced: '28-10-2020',
  shippingaddess:'T.veerthondamalla,H.No:8-23, 5thcross, 5thmain, Marathalli, Bangalore-560037',
  shippingName: 'T.veerthondamalla'


} ]
  }

  goBack(){
    this.location.back();
  }
}
