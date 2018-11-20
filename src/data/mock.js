export let userId = 0
export let orderId = 100
export let demandId = 10
export const data = [0, 1, 2, 3, 4]

// the list of userInfo
export const userList = [
  {userId: 0, name: 'A', password: '123456', tel: 18642175656},
  {userId: 0, name: 'A', password: '123456', tel: 18642175656}
]

/**
 * the state of order
 * 0:recruiting
 * 1:working
 * 2:completed
 */

// the list of all orders
export const orderList = [
  {userId: 0, orderId: 100, tittle: '陪我逛街', state: 0, notice: 'notice', deadline: '12:00 2018-11-20', releaseTime: '12:00 2018-11-20'},
  {userId: 1, orderId: 102, tittle: '陪我逛街1', state: 1, notice: 'notice', deadline: '12:00 2018-11-20', releaseTime: '12:00 2018-11-20'},
  {userId: 2, orderId: 103, tittle: '陪我逛街2', state: 2, notice: 'notice', deadline: '12:00 2018-11-20', releaseTime: '12:00 2018-11-20'},
  {userId: 0, orderId: 101, tittle: '陪我逛街11', state: 0, notice: 'notice', deadline: '12:00 2018-11-20', releaseTime: '12:00 2018-11-20'},
]

// the order list if someone
export const myOrderlist = {
  userId: 0,
  orders: [
    {orderId: 100, tittle: '陪我逛街', state: 0, notice: 'notice', deadline: '12:00 2018-11-20', releaseTime: '12:00 2018-11-20'},
    {orderId: 101, tittle: '陪我逛街11', state: 0, notice: 'notice', deadline: '12:00 2018-11-20', releaseTime: '12:00 2018-11-20'}
  ]
}

// the list of my demands
export const myDemandList = {
  userId: 0,
  demands: [
    {demandId: 10, tittle: '陪我逛街', state: 0, notice: 'notice', deadline: '12:00 2018-11-20', releaseTime: '12:00 2018-11-20'},
    {demandId: 11, tittle: '陪我逛街11', state: 0, notice: 'notice', deadline: '12:00 2018-11-20', releaseTime: '12:00 2018-11-20'}
  ]
}

export const my = {myOrderlist, myDemandList}