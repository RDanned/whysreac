export function formatDate(datestring){
    const date = new Date(datestring)
    return date.toISOString().split('T')[0]
}