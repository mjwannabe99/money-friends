const DENOMS=[10,50,100,500,1000,5000,10000,50000];
const MISSIONS={
 make:[1000,2000,3000,5000,7000,10000,15000,20000,30000,50000].map(n=>({target:n,kind:'make'})),
 exchange:[{target:1000,kind:'exchange',base:1000},{target:2000,kind:'exchange',base:1000},{target:5000,kind:'exchange',base:5000},{target:10000,kind:'exchange',base:10000},{target:3000,kind:'exchange',base:1000},{target:10000,kind:'exchange',base:5000}],
 shop:[{items:[['🧃','주스',1000],['🍪','과자',1000],['🧸','인형',5000]],paid:10000},{items:[['🍭','사탕',500],['🧃','주스',1000]],paid:5000},{items:[['📚','책',5000],['✏️','연필',1000]],paid:10000},{items:[['🍎','사과',2000],['🥖','빵',3000]],paid:10000},{items:[['🧸','장난감',10000],['🍪','과자',2000]],paid:20000},{items:[['🧃','주스',1000],['📚','책',5000],['✏️','연필',1000]],paid:10000}].map(x=>({...x,kind:'shop',target:x.paid-x.items.reduce((a,i)=>a+i[2],0)})),
 value:[{price:1000,budget:5000,item:'✏️ 연필',answer:5},{price:5000,budget:50000,item:'📚 책',answer:10},{price:10000,budget:50000,item:'🧸 장난감',answer:5},{price:2000,budget:10000,item:'🍦 아이스크림',answer:5}].map(x=>({...x,kind:'value'}))
};
