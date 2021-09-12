import formatDistance from "date-fns/formatDistance";

export const convertTimestampToDate = (timestampStr: string) => {
    let timestamp = new Date(timestampStr);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }
    return new Intl.DateTimeFormat('en-US', options).format(timestamp)
}

export const timeAgo = (timestampStr: string) => {
    let timestamp = new Date(timestampStr);
    // addSuffix => "... ago"
    return formatDistance(timestamp, new Date(), {
        addSuffix: true
    })
}