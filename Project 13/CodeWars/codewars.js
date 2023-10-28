//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str){
    var regExp =/[-_]\w/ig;
      
      return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
      });
    }
    //I still do not completely understand JS, so this solution is not my own. I find the solution, then learn why it is correct. Here's the explanation for this solution:
    
    //The forward slash is there to denote the boundaries of the regExp
    //The "\w" finds all word characters. It's preceded by "[-_]" to not highlight dashes
    //"i"=ignore case "g"=global search
    //Replace method is called on first parameter. And a callback on second parameter.
    //The "chartAt()" method takes an index. By using the index of 1 the character before it is skipped and the first letter is uppercase.