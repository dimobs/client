import style from './salute.module.css'

export default function Salute() {
    const today = new Date();
    let time = greet();
    let user = true;

    function greet() {
        const currentHr = today.getHours();
        let timeOfTheDay;

        if (currentHr < 12) {
            timeOfTheDay = 'good morning'
        } else if (currentHr < 18) {
            timeOfTheDay = `good afternoon`
        } else {
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
            {user
            ?
            <div className={style.welcome1}>{time}, Pesho!</div>
            :
            <section className={style.welcome1}>{ time }</section>
}
            <h1>Welcome</h1>
        </div>
    )
}
