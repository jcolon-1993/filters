var $listItems = $("li");
// The .filter() method finds
// the last list item with a class
// attribute whose value is hot.
// It then removes that value from
// the class attribute.
$listItems.filter(".hot:last").removeClass("hot");

// The :not() selector is used
// within the jQuery selector to find
// <li>elements without a va1ue of
// hot in their class attribute and
// adds a value of cool.
$("li:not(.hot)").addClass("cool");

// The .has() method finds the
// <li>element that has an <em>
// element within it and adds the
// value complete to the class
// attribute.
$listItems.has("em").addClass("complete");

//The .each() method loops
// through the list items. The
// current element is cached in
// a jQuery object. The .is()
// method looks to see if the <li>
// element has a class attribute
// whose value is hot. If it does,
// 'Priority item: ' is added to
// the start of the item
$listItems.each(function()
{
    var $this = $(this);
    if ($this.is(".hot"))
    {
      this.prepend("Priority item: ");
    }
});

//The :contains selector
// checks for <li> elements that
// contain the text "honey" and
// appends the text " ( 1oca1)" to
// the end of those items. 
$("li:contains('honey')").append(" (local)")
