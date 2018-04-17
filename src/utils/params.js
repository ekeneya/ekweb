import qs from 'qs';

export function getIdFromParam(search){
    let id = null;
    if(search && search!==''){
        const params = qs.parse(search, { ignoreQueryPrefix: true });
        if(params && params.id){
            id = params.id;
        }
    }
    return id;
}