var names_array=[];
function submit()
{
    var names=document.getElementById("get_name").value;
    names_array.push(names);
    console.log(names);
    console.log(names_array);
}
function show()
{
    document.getElementById("display_names").innerHTML=names_array;
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    names_array.sort();
    var i=names_array.join("<br>");
    console.log(i);
    document.getElementById("sorted_names").innerHTML=i.toString();
}
function search()
{
    var search=document.getElementById("search_name").value;
    var found=0;
    for(var j=0;j<names_array.length;j++)
    {
        if(search==names_array[j])
        {
            found=found+1;
        }
    }
    document.getElementById("search_names").innerHTML="name found" + found;
    console.log("name found" + found);
}