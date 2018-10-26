        function getTime(){
            return (new Date()).toLocaleTimeString();
        }
            setInterval(function() {
            document.getElementById('time').innerHTML = getTime();
        }, 500);