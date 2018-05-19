import moment from "moment/moment";
import _ from 'lodash';


export default async function faltanteNC(serverIP,item) {
    let {_id, _rev, ORIGEN, MODULO, ETIQUETA, FECHAFALTANTE, TURNO, CUENTA, CAUSA, MONTO, FECHAPASADO,INSTANCIA,PAGOEFECTIVO, RRHH, PASAR,NOFALTANTE,ZONA} = item
    await fetch(`${serverIP}/faltantes/${_id}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: await JSON.stringify({
            '_rev': _rev,
            'ORIGEN': ORIGEN,
            'MODULO': MODULO,
            'ETIQUETA': ETIQUETA,
            'FECHAFALTANTE': FECHAFALTANTE,
            'TURNO': TURNO,
            'CUENTA': CUENTA,
            'MONTO': MONTO,
            'CAUSA':CAUSA,
            'FECHAPASADO': FECHAPASADO,
            'INSTANCIA': INSTANCIA,
            'COBRANZA':'NO CORRESPONDE',
            'PAGOEFECTIVO': PAGOEFECTIVO,
            'NOCORRESPONDE': MONTO,
            'RRHH': RRHH,
            'PASAR': PASAR,
            'NOFALTANTE':NOFALTANTE,
            'ZONA':ZONA
        })
    })
}

export default async function faltantePasar(serverIP,item) {
    let {_id, _rev, ORIGEN, MODULO, ETIQUETA, FECHAFALTANTE, TURNO, CUENTA, CAUSA, MONTO, FECHAPASADO,INSTANCIA,PAGOEFECTIVO,NOCORRESPONDE, RRHH,NOFALTANTE,ZONA} = item
    await fetch(`${serverIP}/faltantes/${_id}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: await JSON.stringify({
            '_rev': _rev,
            'ORIGEN': ORIGEN,
            'MODULO': MODULO,
            'ETIQUETA': ETIQUETA,
            'FECHAFALTANTE': FECHAFALTANTE,
            'TURNO': TURNO,
            'CUENTA': CUENTA,
            'MONTO': MONTO,
            'CAUSA':CAUSA,
            'FECHAPASADO': FECHAPASADO,
            'INSTANCIA': INSTANCIA,
            'COBRANZA':'PROXIMA',
            'PAGOEFECTIVO': PAGOEFECTIVO,
            'NOCORRESPONDE': NOCORRESPONDE,
            'RRHH': RRHH,
            'PASAR': MONTO,
            'NOFALTANTE':NOFALTANTE,
            'ZONA':ZONA
        })
    })
}

export default async function faltantePay(serverIP,item) {
    let {_id, _rev, ORIGEN, MODULO, ETIQUETA, FECHAFALTANTE, TURNO, CUENTA, CAUSA, MONTO, FECHAPASADO,INSTANCIA,NOCORRESPONDE, RRHH, PASAR,NOFALTANTE,ZONA} = item
    await fetch(`${serverIP}/faltantes/${_id}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: await JSON.stringify({
            '_rev': _rev,
            'ORIGEN': ORIGEN,
            'MODULO': MODULO,
            'ETIQUETA': ETIQUETA,
            'FECHAFALTANTE': FECHAFALTANTE,
            'TURNO': TURNO,
            'CUENTA': CUENTA,
            'MONTO': MONTO,
            'CAUSA':CAUSA,
            'FECHAPASADO': FECHAPASADO,
            'INSTANCIA': INSTANCIA,
            'COBRANZA': moment().format('DD/MM/YYYY'),
            'PAGOEFECTIVO': MONTO,
            'NOCORRESPONDE': NOCORRESPONDE,
            'RRHH': RRHH,
            'PASAR': PASAR,
            'NOFALTANTE':NOFALTANTE,
            'ZONA':ZONA
        })
    })
}

export default async function faltanteRRHH(serverIP,item) {
    let {_id, _rev, ORIGEN, MODULO, ETIQUETA, FECHAFALTANTE, TURNO, CUENTA, CAUSA, MONTO, FECHAPASADO,PAGOEFECTIVO,INSTANCIA,NOCORRESPONDE, PASAR,NOFALTANTE,ZONA} = item
    await fetch(`${serverIP}/faltantes/${_id}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: await JSON.stringify({
            '_rev': _rev,
            'ORIGEN': ORIGEN,
            'MODULO': MODULO,
            'ETIQUETA': ETIQUETA,
            'FECHAFALTANTE': FECHAFALTANTE,
            'TURNO': TURNO,
            'CUENTA': CUENTA,
            'MONTO': MONTO,
            'CAUSA':CAUSA,
            'FECHAPASADO': FECHAPASADO,
            'INSTANCIA': INSTANCIA,
            'COBRANZA':'RRHH',
            'PAGOEFECTIVO': PAGOEFECTIVO,
            'NOCORRESPONDE': NOCORRESPONDE,
            'RRHH': MONTO,
            'PASAR': PASAR,
            'NOFALTANTE':NOFALTANTE,
            'ZONA':ZONA
        })
    })
}

export default async function getDataByZona(serverIP,etiqueta) {
    let response = await  fetch(`${serverIP}/faltantes/_design/filterByZona/_view/filterByEtiqueta?key="${etiqueta}"`)
    response= await response.json()
    response=await response.rows
    response= await response.map(item=>
    {item = item.value
        return item
    })
    return response
}

export default async function getEtiquetasConDeudaByZona(serverIP,zona) {
    let response = await  fetch(`${serverIP}/faltantes/_design/filterByZona/_view/filterByZonaToEtiqueta?key="${zona}"`)
    response= await response.json()
    response=await response.rows
    response= await response.map(item=>
    {item = item.value
        return item
    })
    response=await _.uniq(response);
    return response
}

export default async function getZonas(serverIP) {
    let response = await  fetch(`${serverIP}/zonas/_design/zonas/_view/all`)
    response= await response.json()
    response=await response.rows
    response= await response.map(item=>
    {item = item.key
        return item
    })
    return response
}

export default async function getSumByEtiqueta(serverIP,etiqueta,array) {
    let response = await  fetch(`${serverIP}/faltantes/_design/filterByZona/_view/sumByEtiqueta?key="${etiqueta}"`)
    response= await response.json()
    response=await response.rows
    response= await response.map(item=>
    {item = item.value
        return item
    })
    return await response
}