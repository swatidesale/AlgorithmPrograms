module.exports = {
        //-----------------------Algorithm Programs-------------------------//

    /**
	 * 2. Prime numbers in range 1-1000
	 * @param number
	 * @return
	 */
    checkPrime: function(number) {
        var flag=0;
        for(var i = 2;i<number;i++){
            if(number%i==0){
                flag=1;
                break;
            }
        }
        if(flag==0)
            return true;
        return false;
    },


    /**
	 * 3. Prime anagrams and palindromes
	 * @param number
	 * @return
	 */
    isPalindrome: function(number) {
        var rem,sum=0;
        var temp=number;
        if(number > 10) {
            while(number>0){
                rem = number%10;
                sum = (sum*10)+rem;
                number = parseInt(number/10);
            }
        }
        if(temp==sum)
            return true;
        else 
           return false;
    },


    /**
	 * 4. binarySearch method for integer
	 * @param array
	 * @param elem
     * @param length
	 */
    binarySearchInteger: function(array, elem,length) {
        var first = 0;
        var last = length;
        
        while(first<last){
            var mid = parseInt((first+last)/2);
            
            if(elem < array[mid])
                last=mid;
            else if(elem > array[mid])
                first = mid+1;
            else 
                return mid;
        }
        return -1;
    },
    
    /**
	 * 4. binarySearch method for String
	 * @param array
	 * @param elem
     * @param length
	 */
    binarySearchString: function(array, elem,length) {
        var first = 0;
        var last = length;
        
        while(first<last){
            var mid = parseInt((first+last)/2);
            
            if(elem.localeCompare(array[mid])<0)
                    last=mid;
            else if(elem.localeCompare(array[mid])>0)
                    first = mid+1;
            else 
                return mid;
        }
        return -1;
    },

    /**
	 * 4. Insertion Sort method for Integer.
	 * @param array
     * @param size
	 */
    insertionSortInteger: function(array,size) {
        var key;
        for(var index=1;index<size;index++){
            key = array[index];
            var j = index-1;
            while(j>=0 && key < array[j]){
                array[j+1]=array[j];
                j--;
            }
            array[j+1] = key;
        }
        return array;
    },
    
    /**
	 * 4. Insertion Sort method for String.
	 * @param array
     * @param size
	 */
    insertionSortString: function(array,size) {
        var key;
        for(var index=1;index<size;index++){
            key = array[index];
            var j = index-1;
            while(j>=0 && key.localeCompare(array[j]) < 0){
                array[j+1]=array[j];
                j--;
            }
            array[j+1] = key;
        }
        return array;
    },
    
    /**
	 * 4. Bubble Sort method for Integer.
	 * @param array
     * @param size
	 */
    bubbleSortInteger: function(array,size) {
        for(var i =0;i<size;i++){
            for(var j=0;j<size-1;j++){
                if(array[j] > array[j+1]){
                    var temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    },
    
    /**
	 * 4. Bubble Sort method for String.
	 * @param array
     * @param size
	 */
    bubbleSortString: function(array,size) {
        for(var i =0;i<size;i++){
            for(var j=0;j<size-1;j++){
                if(array[j].localeCompare(array[j+1])>0) {
                    var temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    },
    

    /**
	 * 10. Vending Machine Program.
	 * @param notes
	 * @param money
     * @param index
	 */
    calculateMoney: function(notes,money,index) {
        var total = 0;
        if(money == 0){
            return -1;
        }
        else {
            
            if(money >= notes[index]){
                var calculate = parseInt(money/notes[index]);
                money = money%notes[index];
                total = Number(total)+Number(calculate);
                console.log(total+" Notes of : "+notes[index]);
            }
            index++;
            
            return this.calculateMoney(notes, money, index);
        }
    },
    

    /**
	 * 13. Monthly Payment
	 * @param p
	 * @param y
     * @param r
	 */
    findMonthlyPayment: function( p, y, r) {
        var n = 12*y;
        var rr = r/(12*100);
        
        var payment = (p * rr) /(1 - Math.pow((1+rr),(-n)));
        return payment;
    },


    /**
	 * 14. Sqrt Of Non Negative Numb
	 * @param number
	 * @return
	 */
    sqrtOfNumber: function(number) {
        epsilon = 1e-15;
        t = number;
        while(Math.abs((t-number/t)) > epsilon*t) {
            t = ((number/t) + t) / 2; 
        }
        return t;
    },


    /**
	 * 15. Decimal to Binary conversion
	 * @param decimal
	 * @return
	 */
    toBinary: function(decimal) {
        var binary = "";
        var value = 0;
        while(decimal>0) {
            value = decimal%2;
            binary = value+binary;
            decimal = parseInt(decimal/2);
        }
        while(binary.length < 8){
            binary = 0 + binary;
        }
        return binary;
    },


    /**
	 * 16. Binary.java ---> convert decimal to binary swap
     *  nibbles and fins new decimal number
	 * @param binary
	 * @return
	 */
    swapNibbles: function(binary) {
        var str1,str2,temp1,temp2;
        
        str1 = binary.substring(0,4);
        temp1 = str1;
        
        str2 = binary.substring(4,8);
        temp2 = str2;
        
        /*temp = str1;
        str1 = str2;
        str2 = temp;	
        var strAfterSwap = str1 + str2;
        console.log("String after swapping " +strAfterSwap);*/
        
        var strAfterSwap = temp2 + temp1;
        
        return strAfterSwap;
    },
    
    toDecimal: function(swap) {
        var decimal = 0;
        var binaryNumber = parseInt(swap);
        var i = 0;
        while(binaryNumber>0) {
            var temp = binaryNumber%10;
            decimal = decimal + (temp * Math.pow(2, i));
            binaryNumber = parseInt(binaryNumber/10);
            i++;
        }
        return decimal;
     }
};

