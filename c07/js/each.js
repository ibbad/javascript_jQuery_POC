/**
 * Created by ebad on 3.4.2016.
 */
$(function(){
    $('li').each(function(){
        var ids = this.id;
        $(this).append(' <span class="orrder">'+ids+'</span>')
    });
});