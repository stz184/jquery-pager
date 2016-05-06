(function ($) {
    $.fn.pager = function(config) {
        var that            = $(this);
    
        var config          = $.extend({
            currentPage     : 1,
            itemsOnPage     : 20,
            farOffset       : 2,
            range           : 6,
            farRange        : 2,
            containerClass  : 'pagination'
        }, config);
    
        $(this).empty().append('<ul class="' + config.containerClass + '"></ul>');
        var holder          = $(this).find('ul');
        
        function getFarStart(lastPage) {
            return Math.ceil((lastPage + config.farOffset)/10) * 10;
        }
        
        function getPager() {
            var maxPage;
            var firstPage;
            var lastPage;
            var prevPage;
            var nextPage;
            var farRangeList = [];
        
            if (!config.itemsNumber) {
                return;
            }
            
            if (!config.itemsOnPage) {
                throw ("Pager requires items on page not to be zero!");
            }
            
            maxPage = config.itemsNumber == 0 ? 1 : Math.ceil(config.itemsNumber / config.itemsOnPage);

            if (config.currentPage > maxPage && $.isNumeric(config.currentPage)) {
                throw ('Current page is greater than the maximum page');
            } else if (config.currentPage <= 0) {
                throw ('Current page is less then 1st one');
            }

            prevPage  = config.currentPage > 1 ? config.currentPage - 1 : false;
            nextPage  = config.currentPage < maxPage ? config.currentPage + 1 : false;

            firstPage = Math.max(1, config.currentPage - Math.floor(config.range / 2));
            lastPage  = Math.min(maxPage, firstPage + config.range - 1);

            for (var i = getFarStart(lastPage); farRangeList.length < config.farRange && i < maxPage; i += 10) {
                farRangeList.push(i);
            }
            
            return {
                farRangeList    : farRangeList,
                rangeList       : (function () {
                    var array = new Array();
                    for(var i = firstPage; i <= lastPage; i++) {
                        array.push(i);
                    }
                    return array;
                })(),
                prevPage        : prevPage,
                nextPage        : nextPage,
                firstPage       : firstPage,
                lastPage        : lastPage
            }
        }

        function renderPager() {
            var pager = getPager();
            holder.empty();
            
            if (pager.prevPage) {
                holder.append('<li><a href="javascript:;" data-page="' + pager.prevPage + '">&laquo; Prev</a></li>');
                
            } else {
                holder.append('<li><span>&laquo; Prev</span></li>');
            }

            for (var page in pager.rangeList) {
                holder.append('<li' + (pager.rangeList[page] == config.currentPage ? ' class="active"' : '') + '><a href="javascript:;" data-page="' + pager.rangeList[page] + '">' + pager.rangeList[page] + '</a></li>');
            }

            if (pager.farRangeList.length > 0) {
                holder.append('<li class="pagination-dots"><span>...</span></li>');

                for (var page in pager.farRangeList) {
                    holder.append('<li><a href="javascript:;" data-page="' + pager.farRangeList[page] + '">' + pager.farRangeList[page] + '</a></li>');
                }
            }

            if (pager.nextPage) {
                holder.append('<li><a href="javascript:;" data-page="' + pager.nextPage + '">Next &raquo;</a></li>');
            } else {
                holder.append('<li><span>Next &raquo;</span></li>');
            }

            holder.find('a').click(function () {
                var page = parseInt($(this).data('page'));
                config.currentPage = parseInt(page);
                renderPager();
                if (typeof config.onClick == 'function') {
                    config.onClick(page);
                }
            });
        }
        
        renderPager();

        return this;
    }
})(jQuery);