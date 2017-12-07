export const dateToString = ( date ) => {
    const splitDate = date.toDateString().split( ' ' )
    const day = splitDate[ 1 ] + ' ' + splitDate[ 2 ]
    const time = date.toTimeString().split( ':' )
    return day + ' - ' + time[ 0 ] + ':' + time[ 1 ]
}