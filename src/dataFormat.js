export function calcTimeBetween(date1,date2){
    var timePassed;
    if(date2.getFullYear()-date1.getFullYear()==0)
    {
        if(date2.getMonth()-date1.getMonth()==0)
        {
            if(date2.getDate()-date1.getDate()==0)
            {
                if(date2.getHours()-date1.getHours()==0)
                {
                    if(date2.getMinutes()-date1.getMinutes()==0)
                    {
                        timePassed= (date2.getSeconds()-date1.getSeconds())+" seconds ago";
                    }
                    else
                        timePassed= (date2.getMinutes()-date1.getMinutes())+" minutes ago";
                }
                else
                    timePassed= (date2.getHours()-date1.getHours())+" hours ago";
            }
            else
                timePassed= (date2.getDate()-date1.getDate())+" days ago";
        }
        else
            timePassed= (date2.getMonth()-date1.getMonth())+" months ago";
    }
    else
            timePassed= (date2.getFullYear()-date1.getFullYear())+" years ago";
    
    return timePassed;
}