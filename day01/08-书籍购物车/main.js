const app = new Vue({
  el:'#app',
  data:{
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85,
        count: 1
      },
      {
        id: 2,
        name: '《Unix编程艺术》',
        date: '2006-5',
        price: 35,
        count: 1
      },
      {
        id: 3,
        name: '《边长》',
        date: '2006-9',
        price: 55,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-6',
        price: 87,
        count: 1
      },
    ]
  },
  methods:{
    // getFinalPrice(price){
    //   return "￥" + price.toFixed(2);
    // }
    deCrement(index){
      this.books[index].count--;
    },
    inCrement(index){
      this.books[index].count++;
    },
    removeHandle(index){
      this.books.splice(index,1);
    }

  },
  filters:{
    showPrice(price){
      return "￥" + price.toFixed(2);
    }
  },
  computed:{
    totalPrice(){
      let total = 0;
      for (let i = 0;i < this.books.length;i++){
        total += this.books[i].price * this.books[i].count;
      }
      for (let item of this.books){
        total + item.price * item.count;
      }
      return total;
    }
  }
});

//filter中的回调函数有一个要求：必须返回一个Boolean值
//true：返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false：会过滤掉这次的n
const nums = [10,20,55,44,100,333,222];

let newNums = nums.filter(function (n) {
  return n < 100;
});
console.log(newNums);

//map
let newNums2 = newNums.map(function (n) {
  return n * 2;
});
console.log(newNums2);

//对数组中的内容进行汇总
let total = newNums2.reduce(function (preValuee,n) {
  return preValuee + n;
},0);

//第一次：preValuee 初始化值：0 n 10
//第一次：preValuee 返回值 n 20

let totalNum = nums.filter(function (n) {
  return n <100;
}).map(function (n) {
  return n * 2
}).reduce(function (preValue,n) {
  return preValue + n;
},0);