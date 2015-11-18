$(function () {
  initNav('#nav');
  myTabs('.tabs', 'active','is-visible');
});


function initNav(parent, activeClass) {
  var location = window.location.href,
      items = $(parent).find('a');

  activeClass = activeClass || 'active';

  items.filter(function(i, item) {
    var href = $(item).attr('href');
    var locationIndex = location.indexOf(href);
    return (locationIndex != -1);
  }).closest('li').addClass(activeClass);


  // $.each(items, function(i, item) {
  //   var href = $(item).attr('href');
  //   var locationIndex = location.indexOf(href);

  //   if (locationIndex != -1) {
  //     $(item).closest('li').addClass(activeClass);
  //   }
  // });  
}

function myTabs(tabset, activeClass, isVisibleClass) {
  var links, tabs;

  tabset = $(tabset);
  links = tabset.find('[data-target]');
  tabs = $('[data-tab]');

  activate(links.eq(0));

  links.on('click', function() {
    var link = $(this);
    activate(link);
  });

  function activate(link) {
    var target = link.data('target'); //'tab1'

    links.removeClass(activeClass);
    link.addClass(activeClass);

    $.each(tabs, function(i, tab) {
      var tabName = $(tab).data('tab');

      if(target === tabName) {
        $(tab).addClass(isVisibleClass);
      } else {
        $(tab).removeClass(isVisibleClass);
      }
    });
  }
}

