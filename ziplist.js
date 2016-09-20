/**
 * Created by Admin on 9/19/2016.
 */
let tl1 = ['a', 'b', 'c'];
let tl2 = [1, 2, 3];

function zipList(list1, list2){
  let finList = [];
  let i = 0;
  while(list1.length != 0 || list2.length != 0){
    if(i%2 == 0 && list1.length !=0){
      finList.push(list1.shift());
      i += 1;
    }
    else if(i%2 != 0 && list2.length !=0){
      finList.push(list2.shift());
      i += 1;
    }
    else {
      i +=1;
    }

  }

  return finList;
}


//console.log(zipList(tl1, tl2));

function zipListTheSimpleWay(list1, list2){
  let dismanteled = _.zip(list1, list2);
  return _.flatten(dismanteled);
}

//console.log(zipListTheSimpleWay(tl1, tl2));



