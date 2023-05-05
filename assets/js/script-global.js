function getSession() {
    let status = localStorage.getItem('status');
    let session = JSON.parse(localStorage.getItem("session"));
    
    if ( !status || !session ) {
        return { status:false, profile:null}
    } else {
        return { status:true, profile:session}
    }
}
