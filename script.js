function threeSum(arr, target) {
  let n=arr.length;
	let arr2=[];
	let ind=0;
  for(let i=0;i<n-2;++i){
	  for(let j=i+1;j<n-1;++j){
		  for(let k=j+1;k<n;++k){
			  arr2[ind]=arr[i]+arr[j]+arr[k];
        ++ind;
		  }
	  }
  }
	
  let closest=arr2[0];
  for(let i=0;i<arr2.length;++i){
     let curr=arr2[i];
     let currDiff=Math.abs(curr-target)
     let closeDiff=Math.abs(closest-target)
	  
	  if(currDiff<closeDiff){
	    closest=curr;
	  }
    }
	return closest;
}
// let arr=[-1 , 2 , 1, -4];
// let target=1;
// let arr2=threeSum(arr, target) 

// console.log(closest);
// module.exports = threeSum;

module.exports = threeSum;
