        function getDate(){
            let time = (new Date()).toLocaleTimeString('pl-PL');
            let date = (new Date()).toLocaleDateString('pl-PL');
            let daynum = (new Date()).getDay('pl-PL');
            let nazwa = '';
            const day = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa','Czwartek','Piątek','Sobota']
            nazwa += day[daynum];
            return `${time} </br>${nazwa} ${date}`;
        }
            setInterval(function() {
            document.getElementById('date').innerHTML = getDate();
        }, 500);