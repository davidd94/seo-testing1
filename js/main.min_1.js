define(['jquery','bootstrap','slick-carousel','mmenu','picturefill','eq-height'],(function($){var desktopBreakPoint=992;$('body').on('click','.compare-collapse',function(){var compareBlockHeight=$('.compare-wrapper .block-compare').outerHeight()-50;$('.compare-wrapper .block-compare').toggleClass('compare-minimized');if($('.compare-wrapper .block-compare').hasClass("compare-minimized")){$('.compare-wrapper .block-compare').css("bottom","-"+compareBlockHeight+"px");}else{$('.compare-wrapper .block-compare').css("bottom","25px");}});if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))){$('.full-dropdown .menu-parent-item').on('click touchstart',function(e){e.preventDefault();$(this).parent('.full-dropdown').addClass('open');},function(e){e.preventDefault();$(this).parent('.full-dropdown').removeClass('open');});$('.full-dropdown .is-tablet').removeClass('hidden');}
if($('.primary-nav').length){var $primaryNav=$('.primary-nav-wrap');var stickyNavActive=$primaryNav.offset().top;var navHeight=$primaryNav.outerHeight();$(window).scroll(function(){if($(window).scrollTop()>stickyNavActive){$primaryNav.addClass('is-fixed').css('top','0');$('.secondary-nav').css('margin-bottom',navHeight);}
else{$primaryNav.removeClass('is-fixed').css('top','');$('.secondary-nav').css('margin-bottom','');}});}
$('.full-dropdown a').on('focus',function(e){$(this).closest('.full-dropdown').find('.primary-dropdown').addClass('js-shown');}).on('blur',function(e){$(this).closest('.full-dropdown').find('.primary-dropdown').removeClass('js-shown');});$('.toggle-menu').jPushMenu({closeOnClickLink:false});onPrimaryNavDropdownToggleClick=function(e){event.preventDefault();var $toggle=$(event.currentTarget);$toggle.parent().toggleClass('open');$toggle.next('.primary-dropdown').toggleClass('hide');};fixMobileMenu=function(){var ddToggle=$('#primaryNav .dropdown-toggle');var bsDropdown=ddToggle.data('bs.dropdown');ddToggle.attr('aria-expanded','false');ddToggle.attr('aria-haspopup','true');if($(window).width()<desktopBreakPoint){ddToggle.removeAttr('data-toggle');ddToggle.next('.primary-dropdown').switchClass('dropdown-menu','hide');if(bsDropdown){ddToggle.off('click.bs.dropdown',bsDropdown.toggle);ddToggle.data('bs.dropdown',null);}
if(ddToggle.data('pulpClick')){return}
ddToggle.data('pulpClick',true).on('click',onPrimaryNavDropdownToggleClick);}else{ddToggle.off('click',onPrimaryNavDropdownToggleClick).data('pulpClick',false).next('.primary-dropdown').switchClass('hide','dropdown-menu');if(bsDropdown){return;}
ddToggle.dropdown();}};$(window).load(fixMobileMenu);$(window).resize(fixMobileMenu);if($(window).width()<desktopBreakPoint){$('.page-header').width($(window).width());$(window).resize(function(){$('.page-header').width($(window).width());});}
$('#cart-panel-close').on('click',function(e){e.preventDefault();$('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');});if($(window).width()>=desktopBreakPoint){$(".primary-dropdown").hover(function(){$(this).parent('.full-dropdown').addClass('open');},function(){$(this).parent('.full-dropdown').removeClass('open');});}
$('.product-carousel').slick({slidesToShow:4,slidesToScroll:4,infinite:false,accessibility:false,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3,}},{breakpoint:desktopBreakPoint,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.category-carousel').slick({accessibility:false,infinite:false,slidesToScroll:1,slidesToShow:5,responsive:[{arrows:true,breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:desktopBreakPoint,settings:{slidesToShow:2}},{breakpoint:480,settings:{arrows:true,centerMode:true,centerPadding:'70px',infinite:true,slidesToShow:1}}]});var currentCategory=$('.category-carousel').find('.current-category').data('slick-index');if(typeof currentCategory==='undefined'){currentCategory=$('.category-carousel').find('[data-is-current-category="true"]').not('.slick-cloned').data('slick-index');}
$('.category-carousel').slick('slickGoTo',currentCategory);if($('.category-carousel .category-col').length>=6){$('.category-carousel').addClass('has-arrows');}
else{$('.category-carousel').removeClass('has-arrows');}
function setFilterHeight(){windowHeight=$('.toolbar-main').outerHeight();$('.column.main .sidebar-main').css('top',windowHeight);}
setFilterHeight();$(window).resize(function(){setFilterHeight();});$('body').on('click','.toolbar-products .toggle-option',function(){$(this).toggleClass('is-open');if($(window).width()>=992){$.cookieStorage.set('tactical-filter-open',$(this).hasClass('is-open'));}
$('.page-with-filter .column.main').toggleClass('has-filters');$('.page-with-filter .sidebar.sidebar-main').toggleClass('has-filters');$.fn.matchHeight._update();if($(window).width()>=768){$(".page-with-filter .sidebar.sidebar-main, .products-grid").matchHeight({byRow:false,property:'min-height'});}
if($(this).hasClass('is-open')){$(this).find('span').text('Hide Filters');}else{$(this).find('span').text('Show Filters');}});var removeToolbarElements=function(){$('.toolbar-main .pages, #product-list-toolbar-bottom .toolbar-amount, #product-list-toolbar-bottom .filter-toggle, #product-list-toolbar-bottom .toolbar-sorter').remove();};$(document).ready(function(){if($('.toolbar-products .toggle-option').length&&$.cookieStorage.get('tactical-filter-open')){if($(window).width()>=992){$('.toolbar-products .toggle-option').addClass('is-open');$('.page-with-filter .column.main').addClass('has-filters');$('.page-with-filter .sidebar.sidebar-main').addClass('has-filters');$('.toolbar-products .toggle-option').find('span').text('Hide Filters');removeToolbarElements();}}});$(document).ajaxComplete(function(){removeToolbarElements();});$('[data-toggle="tooltip"]').tooltip();$('.btn-to-top').on('click',function(){$("html, body").animate({scrollTop:0},500,'swing',function(){$('[href="#contentarea"]').focus();});return false;});$('.reviews-actions .view').on('click',function(){$('html, body').animate({scrollTop:($('#product-review-container').offset().top-100)},500,'swing',function(){$('[href="#review-form"]').focus();});return false;});$('.js-pdp-anchor').on('click',function(){var pdpAnchorLink=$(this).attr('href');$('html, body').animate({scrollTop:($(pdpAnchorLink).offset().top-75)},500,'swing',function(){$(pdpAnchorLink).focus();});return false;});$(".product-info-main .page-title:contains('®')").html(function(_,html){return html.replace(/(®)/g,'<span class="trademark">$1</span>');});$('ol.product-items').each(function(){$(this).children(".item").matchHeight({byRow:true,property:'min-height'});});$('.product-items .product-item .swatch-more').on('click',function(){$.fn.matchHeight._update();$(window).resize();});$('.fit-guide-toggle').on('click',function(e){e.preventDefault();var $parent=$(this).closest('.guide-content');if($(this).hasClass('inactive')){$(this).removeClass('inactive');$parent.find('.size-charts-toggle').addClass('inactive');$parent.find('.guide-charts').addClass('hidden');$parent.find('.guide-fit').removeClass('hidden');}});$('.size-charts-toggle').on('click',function(e){e.preventDefault();var $parent=$(this).closest('.guide-content');if($(this).hasClass('inactive')){$(this).removeClass('inactive');$parent.find('.fit-guide-toggle').addClass('inactive');$parent.find('.guide-fit').addClass('hidden');$parent.find('.guide-charts').removeClass('hidden');}});var getActiveTabSelector=function(){if($('.size-guide.in').find('.chart-unit-switcher').length){return'.size-guide.in .guide-charts .tab.active ';}else{return'.size-guide.in .guide-charts ';}};var haveScrollableTable=function(){var activeTabSelector=getActiveTabSelector();return $(activeTabSelector+'.scrollable-table').length;};var getVisibleChart=function(){var activeTabSelector=getActiveTabSelector();if(haveScrollableTable()){return $(activeTabSelector+'.scrollable-table > .size-chart');}else{return $(activeTabSelector+'.size-chart');}};var setupScrollableTable=function(resizing){var $visibleChart=getVisibleChart();if(!haveScrollableTable()){$visibleChart.wrap('<div class="scrollable-table"></div>');}};$('.size-guide').on('shown.bs.modal',function(e){setupScrollableTable();$(this).find('.guide-title').focus();});var tabsUpdate=function($el,attr){$el.closest('.tabs').find('> .tab, > .tab-nav a').removeClass('active');$($el.attr(attr)).addClass('active');setupScrollableTable();};$('.tab-select').on('change',function(){tabsUpdate($(this),'value');$('.tab-nav a[href="'+$(this).attr('value')+'"]').addClass('active');});$('.tab-nav a').on('click',function(e){e.preventDefault();tabsUpdate($(this),'href');$(this).addClass('active');var $tabSelect=$(this).closest('.tabs').find('.tab-select');if($tabSelect.length){$tabSelect.val($(this).attr('href'));}});var $configPanel=$('#product-info-main');var $contentPanel=$('#product-extras-col');if($(window).width()>=desktopBreakPoint&&$configPanel.length){var scrollDiv=document.createElement("div");scrollDiv.className="scrollbar-measure";document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);var startingPosX=$configPanel.offset().left;var startingWidth=$configPanel.outerWidth();var fixedScrollPoint=$configPanel.offset().top-$('.primary-nav-wrap').outerHeight()-30;var fixedPosY=$('.primary-nav-wrap').outerHeight()+30;$configPanel.wrapInner('<div id="configuration-wrap" />');$('#configuration-wrap').width(startingWidth+scrollbarWidth);$(window).scroll(function(){var scrollAmount=$(window).scrollTop();var configPanelTop=$configPanel.css('top');var contentBottom=$contentPanel.offset().top+$contentPanel.outerHeight()-scrollAmount;if(scrollAmount>=fixedScrollPoint){if(!$configPanel.hasClass('is-fixed')){$configPanel.addClass('is-fixed').css('width',startingWidth).css('left',startingPosX).css('top',fixedPosY);}else{var configPanelBottom=$configPanel.outerHeight()+fixedPosY;if(contentBottom<=configPanelBottom){$configPanel.css('top',fixedPosY-(configPanelBottom-contentBottom));}}}else{$configPanel.removeClass('is-fixed');}});$(window).resize(function(){$configPanel.removeClass('is-fixed').attr('style','');$('#configuration-wrap').attr('style','');startingPosX=$configPanel.offset().left;startingWidth=$configPanel.outerWidth();});}
$(window).load(function(){picturefill();});if($('.cms-menu').length){$('<div class="select-wrap"><label class="sr-only" for="cms-menu-select">Select page</label><select class="select" id="cms-menu-select" aria-hidden="true"><option value="">Select page...</option></select></div>').appendTo('.cms-sidebar');$('.cms-menu > li.parent > ul > li').each(function(){var $itemLink=$(this).find('> a');var optionText=$(this).find('strong').text();var optionValue='';if($itemLink.length){optionText=$itemLink.text();optionValue=$itemLink.attr('href');}
$('#cms-menu-select').append('<option value="'+optionValue+'">'+optionText+'</option>');});}
$('body').on('change','#cms-menu-select',function(){window.location.href=$(this).val();});$(document).on('click','.checkout-index-index .continue',function(){setTimeout(function(){if($("._error").length>0){$('html, body').animate({scrollTop:($('._error').first().offset().top-100)},500);}else if($(".mage-error").length>0){$('html, body').animate({scrollTop:($('.mage-error').first().offset().top-100)},500);}},100);});var primaryMobileParent='#primaryNav .menu-parent';var primaryMobileSub='#primaryNav .sub-parent';$(primaryMobileParent).on('click',function(){$(primaryMobileParent).removeClass('is-active').closest('li').find('.primary-dropdown').removeClass('panel-active');$(this).addClass('is-active').closest('li').find('.primary-dropdown').addClass('panel-active');});$(primaryMobileSub).on('click',function(){$(primaryMobileSub).removeClass('is-active').closest('.dropdown-section').find('.sub-menu').removeClass('panel-active');$(this).addClass('is-active').closest('.dropdown-section').find('.sub-menu').addClass('panel-active');});$('#mobileSiteOverlay, .primary-nav .navbar-toggle').on('click',function(){$('.primary-nav .primary-dropdown').removeClass('panel-active');$('.primary-nav .sub-menu').removeClass('panel-active');});$('#primaryNav .back-parent').on('click',function(){$(this).closest('.primary-dropdown').removeClass('panel-active');});$('#primaryNav .back-sub').on('click',function(){$(this).closest('.sub-menu').removeClass('panel-active');});var primaryMobileNavAccountHeight=$('.primary-nav .account-menu').outerHeight();var primaryNavHeight=$(window).height()-primaryMobileNavAccountHeight;if($(window).width()<=desktopBreakPoint){$('#primaryNav').css('height',primaryNavHeight+'px');}
mobileNavWidth=function(){var mobileNavWidth=$(window).width()-$('.primary-nav .navbar-toggle').outerWidth();$('.primary-nav .navbar-toggle').on('click',function(){$('.cbp-spmenu-left.cbp-spmenu-open').css('width',mobileNavWidth+'px');});};mobileNavWidth();$(window).resize(function(){var mobileNavWidth=$(window).width()-$('.primary-nav .navbar-toggle').outerWidth();$('.cbp-spmenu-left.cbp-spmenu-open').css('width',mobileNavWidth+'px');});var hcKey='tactical-high-contrast';var hcClass='hc';var $hcBtn=$('#high-contrast-toggle');if(localStorage.getItem(hcKey)){$('body').addClass(hcClass);$hcBtn.text('Disable High Contrast Mode');}
$hcBtn.on('click',function(e){e.preventDefault();if(localStorage.getItem(hcKey)){localStorage.removeItem(hcKey);$('body').removeClass(hcClass);$hcBtn.text('Enable High Contrast Mode');}else{localStorage.setItem(hcKey,"1");$('body').addClass(hcClass);$hcBtn.text('Disable High Contrast Mode');}});$(window).resize(function(){isScrollNecessery();});function isScrollNecessery(){if($(window).innerWidth()>=desktopBreakPoint){let configurationWrap=$('#configuration-wrap'),configurationWrapHeight=configurationWrap.outerHeight(true)+200;if($(window).height()>configurationWrapHeight){configurationWrap.css('overflow-y','visible');}else{configurationWrap.css('overflow-y','scroll');}}}
if($('.catalog-product-view .product-info-stock-sku > .sku .value').length>0){$('.catalog-product-view .product-info-stock-sku > .sku').clone().appendTo('.page-wrapper .breadcrumbs');}}));