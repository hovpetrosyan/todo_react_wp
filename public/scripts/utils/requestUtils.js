class _RequestUtils {
    url = ""
    get(path) {
        fetch(`${this.url}/{path}`).then(res=>res.json())
    }
    post() {
        
    }
}


const requestUtils = new _RequestUtils()

