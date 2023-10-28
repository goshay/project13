//There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

function matchingStrings(strings, queries) {
const result = []
    queries.map( q => result.push( strings.filter( str => str === q ).length))
    return result
}

//I still do not completely understand JS, so this solution is not my own. I find the solution, then learn why it is correct. Here's the explanation for this solution:

//The function takes two arguments: a list of strings and a list of queries. The function iterates over the queries and for each query, it checks if the query string is present in the list of strings. If the query string is present, the function adds the query string to the list of results. The function returns the list of results.