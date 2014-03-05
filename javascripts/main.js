$(document).ready(function(){

    // Add permalinks to anchors.
    _.each($('.anchor'), function(el) {
        var el = $(el);
        var parent = el.parents();
        var permalink = $('<a>').html('¶').attr({href:'#' + el.attr('name'),
                                                 class:'headerlink',
                                                 title:"Permalink to this headline"});
        parent.append(permalink);
    });

});
