$(function () {
  initNav('#nav');
  //initNav($('.sub-nav'));
});


function initNav(parent) {
  var location = window.location.href,
      items = $(parent).find('a');


  ////// start
  // var i;


  // for (i=0; i<items.length; i++) {
  //   var item = items.eq(i);
  //   var href = item.attr('href');
  //   var locationIndex = location.indexOf(href);

  //   if (locationIndex!=-1) {
  //     item.closest('li').addClass('active');
  //   }
  // }

  ////// end

  

  ////// start
  $.each(items, function(i, item) {
    var href = $(item).attr('href');
    var locationIndex = location.indexOf(href);

    if (locationIndex != -1) {
      $(item).closest('li').addClass('active');
    }
  });
  ////// end


  //console.log(locationIndex);

  
}

// each([1,2,3], function(arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3); // 1, 0, [1,2,3]
// });


// function each(collection, callback) {
//   var i, el;
//   for (i = 0; i < collection.length; i++) {
//     el = collection[i];
//     callback(i, el, collection);
//   }
// }
