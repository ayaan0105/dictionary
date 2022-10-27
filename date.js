function solution(D)
{
   const dict = {}
   for(var key in D) {
   const date = new Date(key);
   const day = date.getDay();
   if(dict[day]==undefined)
   {
       dict[day] = D[key];
   }
   else
   {
       dict[day]+=D[key];
   }
 }
 const dictAns = {};
 dictAns['Mon'] = dict[1];
 for (let i = 2; i < 7; i++) {
   let value = 0;
   if(dict[i]==undefined)
   {
       let j = i;
       while(dict[j]==undefined)
       {
           j++;
           j = j%7;
       }
       let n = 0;
       if(j==0)
       {
           n = j-i+1;
       }
       else
       {
           n = 7-i
       }
       let chunk = (dict[i-1]-dict[j])/n;
       if(j==0)
        j = 6;
       else 
        j--;
       let k = i;
       while(k<=j)
       {
           if(chunk<0)
           dict[k] = dict[k-1]-chunk;
           else
           dict[k] = dict[k-1]+chunk;
           k++;
       }
   }
    value = dict[i];
   if( i==2)
   {
       dictAns['Tue']=value;
   }
   else if( i==3)
   {
       dictAns['Wed']=value;
   }
   else if( i==4)
   {
       dictAns['Thu']=value;
   }
   else if( i==5)
   {
       dictAns['Fri']=value;
   }
   else
   {
       dictAns['Sat']=value;
   }	
 }
 dictAns['Sun'] = dict[0];
 return dictAns;
}