export default function toLocalDateShort(date) {
    return new Date(date).toLocaleDateString("fa-IR",
        // {weekday: "long", day: "numeric"}
    )
}