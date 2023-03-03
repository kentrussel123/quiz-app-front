


class ApiService {
    baseUrl = `http://localhost:3000`
    resource

    constructor(resource:any) {
        if (!resource) throw new Error("Resource is not provided");
        this.resource = resource;
    }

    getUrl(id = "") {
        return `${this.baseUrl}/${this.resource}/${id}`;
    }

    getCallUrl(id = "", res = ""){
        return `${this.baseUrl}/${res}/${id}`;
    }

    setHeaders(options:any) {
        let headers = {
            'Content-Type' : 'application/json'
        };
        options["headers"] = headers;
    }

    async handleResponse(response:any) {
        if(response.status == 200) {
            return await response.json();
        } else {
            return await this.handleErrorJson(response)
        }
    }

    async handleErrorJson(response:any) {
        let json = await response.json()
        let error = new Error(json.title)
        error.message = json.message;
        throw error;
    }
    async fetchLogin(config = {}) {
        const response = await fetch(this.getUrl(), config);
        return await response;
    }

    async fetch(config = {}) {
        const response = await fetch(this.getUrl(), config);
        return await this.handleResponse(response);
    }

    async getManyCall(url:any,data={}){
        let options = {
            method: "GET",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        }
        this.setHeaders(options)
        const response = await fetch(url,options)
        return await this.handleResponse(response)
    }

    async getMany(data = {}){
        return this.getManyCall(this.getUrl(),data)
    }

    async get(id:any) {
        const response = await fetch(this.getUrl(id));
        return await this.handleResponse(response);
    }

    async getCall(url:any,id:any){
        const response = await fetch(this.getCallUrl(url,id));
        return await this.handleResponse(response);
    }
    

    async postCall(url:any,data = {}) {
        let options = {
            method: "POST",
            body: JSON.stringify(data),
        };
        this.setHeaders(options);
        const response = await fetch(url, options);
        return await this.handleResponse(response);

    }

    post(data = {}) {
        return this.postCall(this.getUrl(),data)
    }

    async patchCall(url:any,data = {}) {
        let options = {
            method: "PATCH",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        };
        this.setHeaders(options);
        const response = await fetch(url, options);
        return await this.handleResponse(response);
    }

    patch(data = {}) {
        return this.patchCall(this.getUrl(),data)
    }

    async delete(id:any) {
        if (!id) throw Error("Id is not provided");
        let options = {
            method: "DELETE"
        };
        this.setHeaders(options);
        const response = await fetch(this.getUrl(id), options);
        return await this.handleResponse(response);
    }
}

export const api = {
    quiz: new ApiService('quiz'),
    users: new ApiService('users')
}