

export default function Salute() {
    const today = new Date();
let time = greet();

    function greet() {
        const currentHr = today.getHours();
        let timeOfTheDay;

        if(currentHr < 12) {
            timeOfTheDay = 'good morning'
        }else if (currentHr < 18) {
            timeOfTheDay = `good afternoon`
        }else {
            timeOfTheDay = `good evening`
        }

        return timeOfTheDay;
    }

    function dateBgFormat() {
        const month = today.getUTCMonth() + 1
        const day = today.getDate();
        const year = today.getFullYear();

        const newDate = day + '/' + month + '/' + year;

        return newDate;
    }

    return (
        <div>
            <div className="welcome1">{time}</div>
        </div>
    )
}
