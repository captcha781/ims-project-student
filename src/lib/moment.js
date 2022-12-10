// import package
import momentTZ from 'moment-timezone';

export const getTimeZone = () => {
    let timeZones = momentTZ.tz.names();
    let offsetTmz = [];
    for (var i in timeZones) {
        let timeZoneGMT = momentTZ.tz(timeZones[i]).format('Z')
        let checkIndexTmz = offsetTmz.findIndex((el) => el.GMT == timeZoneGMT)
        if (checkIndexTmz >= 0) {
            offsetTmz[checkIndexTmz] = {
                'name': offsetTmz[checkIndexTmz].name + ', ' + timeZones[i],
                'GMT': timeZoneGMT,
                // "label": `GMT${momentTZ.tz(timeZones[i]).format('Z')} ${timeZones[i]}`
                "label": `UTC${momentTZ.tz(timeZones[i]).format('Z')} ${offsetTmz[checkIndexTmz].name}, ${timeZones[i]}`
            }
        } else {
            offsetTmz.push({
                'name': timeZones[i],
                'GMT': timeZoneGMT,
                // "label": `GMT${momentTZ.tz(timeZones[i]).format('Z')} ${timeZones[i]}`
                "label": `UTC${momentTZ.tz(timeZones[i]).format('Z')} ${timeZones[i]}`
            })
        }
    }
    return offsetTmz
}