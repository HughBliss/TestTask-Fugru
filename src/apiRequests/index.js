import request from '../utils/request'

export const fetchData = ({ rows }) => request({
  url: '/',
  method: 'get',
  params: {
    rows,
    id: '{index}',
    firstName: '{firstName}',
    lastName: '{lastName}',
    email: '{email}',
    phone: '{phone|(xxx)xxx-xx-xx}',
    address: '{addressObject}',
    description: '{description}'
  }
})
